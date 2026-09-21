// import { prisma } from "../../prismaclient";

// type MerkleProofItem = {
//   hash: Buffer;
//   siblingIsLeft: boolean;
// };

// type HolderMerkleProof = {
//   holder: string;
//   nodeIndex: bigint;
//   proof: MerkleProofItem[];
// };
// export const generateProofForOnchainVerficaion = async (
//   mint: string,
//   slot: bigint
// ) => {
//   let snapshotId = slot.toString();

//   const BATCH_SIZE = 10_000;

//   let lastNodeIndex: bigint | undefined = undefined;

//   while (true) {
//     const leaves: Array<{
//       holder: string | null;
//       nodeIndex: bigint;
//     }> = await prisma.merkleNode.findMany({
//       where: {
//         snapshotId,
//         mint,
//         level: 0,

//         ...(lastNodeIndex !== undefined && {
//           nodeIndex: {
//             gt: lastNodeIndex,
//           },
//         }),
//       },

//       orderBy: {
//         nodeIndex: "asc",
//       },

//       take: BATCH_SIZE,

//       select: {
//         holder: true,
//         nodeIndex: true,
//       },
//     });

//     if (leaves.length === 0) {
//       break;
//     }

//     const proofMap = new Map<string, MerkleProofItem[]>();

//     const indexMap = new Map<string, bigint>();

//     for (const leaf of leaves) {
//       if (!leaf.holder) {
//         throw new Error(`Leaf ${leaf.nodeIndex} has no holder`);
//       }

//       proofMap.set(leaf.holder, []);

//       indexMap.set(leaf.holder, leaf.nodeIndex);
//     }

//     let currentLevel = 0;

//     while (true) {
//       const currentLevelCount = await prisma.merkleNode.count({
//         where: {
//           snapshotId,
//           mint,
//           level: currentLevel,
//         },
//       });

//       if (currentLevelCount === 1) {
//         break;
//       }

//       const siblingIndexes = new Set<string>();

//       const holderInfo: {
//         holder: string;
//         currentIndex: bigint;
//         siblingIndex: bigint;
//         siblingIsLeft: boolean;
//       }[] = [];

//       for (const [holder, currentIndex] of indexMap) {
//         const siblingIndex =
//           currentIndex % 2n === 0n ? currentIndex + 1n : currentIndex - 1n;

//         holderInfo.push({
//           holder,
//           currentIndex,
//           siblingIndex,
//           siblingIsLeft: currentIndex % 2n === 1n,
//         });

//         siblingIndexes.add(siblingIndex.toString());
//       }

//       const siblingIndexesBigInt = Array.from(siblingIndexes, (index) =>
//         BigInt(index)
//       );

//       const siblings = await prisma.merkleNode.findMany({
//         where: {
//           snapshotId,
//           mint,
//           level: currentLevel,

//           nodeIndex: {
//             in: siblingIndexesBigInt,
//           },
//         },

//         select: {
//           nodeIndex: true,
//           hash: true,
//         },
//       });

//       const siblingMap = new Map<string, Buffer>();

//       for (const sibling of siblings) {
//         siblingMap.set(sibling.nodeIndex.toString(), Buffer.from(sibling.hash));
//       }

//       for (const info of holderInfo) {
//         let siblingHash = siblingMap.get(info.siblingIndex.toString());

//         if (!siblingHash) {
//           const isLastNode =
//             info.currentIndex === BigInt(currentLevelCount - 1);

//           if (!isLastNode) {
//             throw new Error(
//               `Missing sibling ${info.siblingIndex} ` +
//                 `for node ${info.currentIndex} ` +
//                 `at level ${currentLevel}`
//             );
//           }

//           siblingHash = siblingMap.get(info.currentIndex.toString());

//           if (!siblingHash) {
//             const self = await prisma.merkleNode.findFirst({
//               where: {
//                 snapshotId,
//                 mint,
//                 level: currentLevel,
//                 nodeIndex: info.currentIndex,
//               },

//               select: {
//                 hash: true,
//               },
//             });

//             if (!self) {
//               throw new Error(
//                 `Self sibling not found for node ` +
//                   `${info.currentIndex} at level ` +
//                   `${currentLevel}`
//               );
//             }

//             siblingHash = Buffer.from(self.hash);
//           }
//         }

//         proofMap.get(info.holder)!.push({
//           hash: siblingHash,
//           siblingIsLeft: info.siblingIsLeft,
//         });
//       }

//       for (const [holder, currentIndex] of indexMap) {
//         indexMap.set(holder, currentIndex / 2n);
//       }

//       currentLevel++;
//     }

//     const batchProofs: HolderMerkleProof[] = leaves.map((leaf: any) => {
//       if (!leaf.holder) {
//         throw new Error(`Leaf ${leaf.nodeIndex} has no holder`);
//       }

//       return {
//         holder: leaf.holder,
//         snapshotId:snapshotId,
//         mint:mint,
//         leafnodeIndex: leaf.nodeIndex,
//         proof: proofMap.get(leaf.holder) ?? [],
//       };
//     });

//     //    await onBatch(batchProofs);
    
//     const inserProof = await prisma.merkleProof.createMany({
//         data:batchProofs
//     })

//     lastNodeIndex = leaves[leaves.length - 1]!.nodeIndex;
//   }
// };



import { prisma } from "../../prismaclient";


type HolderMerkleProof = {
  snapshotId: string;
  holder: string;
  mint: string;
  leafnodeIndex: bigint;
  proof: string[];
};


export const generateProofForOnchainVerification =
  async (
    mint: string,
    slot: bigint
  ) => {

    const snapshotId =
      slot.toString();

    const BATCH_SIZE = 10_000;


    /*
     * Cache node counts.
     *
     * Otherwise every holder batch would
     * repeatedly count the same levels.
     */
    const levelCounts =
      new Map<number, number>();


    let lastNodeIndex:
      bigint | undefined;


    while (true) {

      /*
       * ============================================
       * Fetch 10,000 leaves
       * ============================================
       */
      const leaves =
        await prisma.merkleNode.findMany({

          where: {
            snapshotId,
            mint,
            level: 0,

            ...(lastNodeIndex !== undefined && {
              nodeIndex: {
                gt: lastNodeIndex,
              },
            }),
          },

          orderBy: {
            nodeIndex: "asc",
          },

          take: BATCH_SIZE,

          select: {
            holder: true,
            nodeIndex: true,
          },
        });


      if (leaves.length === 0) {
        break;
      }


      /*
       * holder -> proof[]
       */
      const proofMap =
        new Map<string, Buffer[]>();


      /*
       * holder -> current node index
       */
      const indexMap =
        new Map<string, bigint>();


      for (const leaf of leaves) {

        if (!leaf.holder) {
          throw new Error(
            `Leaf ${leaf.nodeIndex} has no holder`
          );
        }


        proofMap.set(
          leaf.holder,
          []
        );


        indexMap.set(
          leaf.holder,
          leaf.nodeIndex
        );
      }


      let currentLevel = 0;


      /*
       * ============================================
       * Walk from leaf → root
       * ============================================
       */
      while (true) {

        let currentLevelCount =
          levelCounts.get(
            currentLevel
          );


        /*
         * Count this level only once.
         */
        if (
          currentLevelCount ===
          undefined
        ) {

          currentLevelCount =
            await prisma.merkleNode.count({
              where: {
                snapshotId,
                mint,
                level: currentLevel,
              },
            });


          levelCounts.set(
            currentLevel,
            currentLevelCount
          );
        }


        /*
         * Already at root.
         */
        if (currentLevelCount === 1) {
          break;
        }


        /*
         * ========================================
         * Calculate sibling indexes
         * ========================================
         */
        const siblingIndexes =
          new Set<string>();


        const holderInfo: {
          holder: string;
          currentIndex: bigint;
          siblingIndex: bigint;
        }[] = [];


        for (
          const [
            holder,
            currentIndex
          ] of indexMap
        ) {

          const siblingIndex =
            currentIndex % 2n === 0n
              ? currentIndex + 1n
              : currentIndex - 1n;


          holderInfo.push({
            holder,
            currentIndex,
            siblingIndex,
          });


          siblingIndexes.add(
            siblingIndex.toString()
          );
        }


        /*
         * ========================================
         * Fetch all siblings for this level
         * with ONE query.
         * ========================================
         */
        const siblingNodes =
          await prisma.merkleNode.findMany({

            where: {
              snapshotId,
              mint,
              level: currentLevel,

              nodeIndex: {
                in: Array.from(
                  siblingIndexes,
                  (index) => BigInt(index)
                ),
              },
            },

            select: {
              nodeIndex: true,
              hash: true,
            },
          });


        const siblingMap =
          new Map<string, Buffer>();


        for (
          const sibling of siblingNodes
        ) {

          siblingMap.set(
            sibling.nodeIndex.toString(),
            Buffer.from(
              sibling.hash
            )
          );
        }


        /*
         * ========================================
         * Add sibling to every proof
         * ========================================
         */
        for (
          const info of holderInfo
        ) {

          let siblingHash =
            siblingMap.get(
              info.siblingIndex.toString()
            );


          /*
           * Odd last node.
           *
           * Example:
           *
           * A B C
           *
           * C uses itself:
           *
           * hash(C,C)
           */
          if (!siblingHash) {

            const isLastNode =
              info.currentIndex ===
              BigInt(
                currentLevelCount - 1
              );


            if (!isLastNode) {

              throw new Error(
                `Missing sibling ${info.siblingIndex} ` +
                `for node ${info.currentIndex} ` +
                `at level ${currentLevel}`
              );
            }


            /*
             * Self-sibling.
             */
            siblingHash =
              siblingMap.get(
                info.currentIndex.toString()
              );


            /*
             * The current node may not have
             * been included in siblingIndexes.
             *
             * Fetch it only for the odd-node case.
             */
            if (!siblingHash) {

              const self =
                await prisma.merkleNode.findFirst({
                  where: {
                    snapshotId,
                    mint,
                    level: currentLevel,
                    nodeIndex:
                      info.currentIndex,
                  },

                  select: {
                    hash: true,
                  },
                });


              if (!self) {
                throw new Error(
                  `Self sibling not found for ` +
                  `node ${info.currentIndex}`
                );
              }


              siblingHash =
                Buffer.from(
                  self.hash
                );
            }
          }


          /*
           * IMPORTANT:
           *
           * No siblingIsLeft.
           *
           * Rust sorts the two hashes.
           */
          proofMap
            .get(info.holder)!
            .push(siblingHash);
        }


        /*
         * Move to parent index.
         *
         * Example:
         *
         * 5 -> 2 -> 1 -> 0
         */
        for (
          const [
            holder,
            currentIndex
          ] of indexMap
        ) {

          indexMap.set(
            holder,
            currentIndex / 2n
          );
        }


        currentLevel++;
      }


      /*
       * ============================================
       * Convert proof to DB format
       * ============================================
       *
       * JSON cannot directly store Buffer.
       *
       * Store each [u8;32] as hex.
       */
      const batchProofs:
        HolderMerkleProof[] =
        leaves.map((leaf) => {

          if (!leaf.holder) {
            throw new Error(
              `Leaf ${leaf.nodeIndex} has no holder`
            );
          }


          const proof =
            proofMap.get(
              leaf.holder
            ) ?? [];


          return {
            snapshotId,

            holder:
              leaf.holder,

            mint,

            leafnodeIndex:
              leaf.nodeIndex,

            proof:
              proof.map(
                (hash) =>
                  hash.toString("hex")
              ),
          };
        });


      /*
       * ============================================
       * Store 10,000 proofs
       * ============================================
       */
      await prisma.merkleProof.createMany({
        data: batchProofs,
      });


      /*
       * Next 10,000 leaves.
       */
      lastNodeIndex =
        leaves[
          leaves.length - 1
        ]!.nodeIndex;
    }
  };
