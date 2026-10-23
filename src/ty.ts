// async function saveMerkleProofs(
//   snapshotId: string,
//   holders: Holder[],
//   proofs: MerkleProof[]
// ) {
//   const rows = [];

import { tokenTransfereventDecoder } from "./idl.schema/SolanaProgramHelper/anchorIdlHelper";


//   for (
//     let i = 0;
//     i < holders.length;
//     i++
//   ) {
//     const holder = holders[i];
//     const proof = proofs[i];

//     for (
//       let proofIndex = 0;
//       proofIndex < proof.length;
//       proofIndex++
//     ) {
//       rows.push({
//         snapshotId,
//         holder: holder.holder.toBase58(),
//         leafIndex: i,
//         proofIndex,
//         hash: proof[proofIndex],
//       });
//     }
//   }

//   await prisma.merkleProof.createMany({
//     data: rows,
//   });
// }




// async function createMerkleSnapshot(
//   snapshotId: string,
//   holders: Holder[],
//   proposal: PublicKey,
//   governanceMint: PublicKey,
//   slot: bigint
// ) {
//   // -----------------------------
//   // 1. Build leaves
//   // -----------------------------

//   const leaves = buildLeaves(
//     holders,
//     proposal,
//     governanceMint
//   );

//   // -----------------------------
//   // 2. Build tree
//   // -----------------------------

//   const tree = buildMerkleTree(
//     leaves
//   );

//   // ROOT IS AVAILABLE NOW
//   const root = tree.root;

//   // -----------------------------
//   // 3. Generate proofs
//   //    from existing levels
//   // -----------------------------

//   const proofs =
//     buildAllMerkleProofs(tree);

//   // -----------------------------
//   // 4. Save holder indexes
//   // -----------------------------

//   await saveHolderIndexes(
//     snapshotId,
//     holders
//   );

//   // -----------------------------
//   // 5. Save proofs
//   // -----------------------------

//   await saveMerkleProofs(
//     snapshotId,
//     holders,
//     proofs
//   );

//   // -----------------------------
//   // 6. Save root in DB
//   // -----------------------------

//   await saveMerkleSnapshot(
//     snapshotId,
//     root,
//     slot
//   );

//   // -----------------------------
//   // 7. Return root
//   // -----------------------------

//   return root;
// }



// function buildAllMerkleProofs(
//   tree: MerkleTree
// ): MerkleProof[] {
//   return tree.leaves.map(
//     (_, index) =>
//       buildMerkleProof(tree, index)
//   );
// }



// function buildMerkleProof(
//   tree: MerkleTree,
//   leafIndex: number
// ): MerkleProof {
//   if (
//     leafIndex < 0 ||
//     leafIndex >= tree.levels[0].length
//   ) {
//     throw new Error(
//       `Leaf index ${leafIndex} is out of range`
//     );
//   }

//   const proof: Buffer[] = [];

//   let currentIndex = leafIndex;

//   for (
//     let levelIndex = 0;
//     levelIndex < tree.levels.length - 1;
//     levelIndex++
//   ) {
//     const originalLevel =
//       tree.levels[levelIndex];

//     /*
//      * The tree-building step duplicates the
//      * last node when the level is odd.
//      *
//      * Do the same here only for LOOKUP.
//      * We are NOT hashing anything.
//      */
//     const level =
//       originalLevel.length % 2 === 1
//         ? [
//             ...originalLevel,
//             originalLevel[
//               originalLevel.length - 1
//             ],
//           ]
//         : originalLevel;

//     const siblingIndex =
//       currentIndex % 2 === 0
//         ? currentIndex + 1
//         : currentIndex - 1;

//     proof.push(
//       Buffer.from(
//         level[siblingIndex]
//       )
//     );

//     currentIndex =
//       Math.floor(currentIndex / 2);
//   }

//   return proof;
// }



// function buildMerkleTree(
//   leaves: ReadonlyArray<Buffer | Uint8Array>
// ): MerkleTree {
//   if (leaves.length === 0) {
//     throw new Error(
//       "Cannot build Merkle tree from zero leaves"
//     );
//   }

//   const levels: Buffer[][] = [];

//   // Level 0 = leaves
//   let level: Buffer[] = leaves.map(
//     (leaf) => Buffer.from(leaf)
//   );

//   levels.push(level);

//   while (level.length > 1) {

//     // If odd, duplicate last node
//     if (level.length % 2 === 1) {
//       level = [
//         ...level,
//         Buffer.from(
//           level[level.length - 1]
//         ),
//       ];
//     }

//     const nextLevel: Buffer[] = [];

//     for (
//       let i = 0;
//       i < level.length;
//       i += 2
//     ) {
//       const left = level[i];
//       const right = level[i + 1];

//       nextLevel.push(
//         hashPair(left, right)
//       );
//     }

//     level = nextLevel;

//     levels.push(level);
//   }

//   return {
//     levels,
//     root: level[0],
//   };
// }




// import { PublicKey } from "@solana/web3.js";
// import { keccak_256 } from "@noble/hashes/sha3";
// import BN from "bn.js";

// type Holder = {
//   holder: PublicKey;
//   votingPower: number | bigint | BN;
// };

// type MerkleTree = {
//   levels: Buffer[][];
//   root: Buffer;
// };

// type MerkleProof = Buffer[];


// /* ---------------------------------- */
// /* Helpers                            */
// /* ---------------------------------- */

// function toU64LeBuffer(
//   value: number | bigint | BN
// ): Buffer {
//   if (BN.isBN(value)) {
//     return value.toArrayLike(Buffer, "le", 8);
//   }

//   const buffer = Buffer.alloc(8);

//   buffer.writeBigUInt64LE(
//     BigInt(value)
//   );

//   return buffer;
// }


// function keccakBuffer(
//   parts: ReadonlyArray<Buffer | Uint8Array>
// ): Buffer {
//   return Buffer.from(
//     keccak_256(
//       Buffer.concat(
//         parts.map((part) =>
//           Buffer.from(part)
//         )
//       )
//     )
//   );
// }


// /*
//  * Hash pair using SORTED order.
//  *
//  * hash(A, B) == hash(B, A)
//  */
// function hashPair(
//   left: Buffer,
//   right: Buffer
// ): Buffer {
//   const [first, second] =
//     Buffer.compare(left, right) <= 0
//       ? [left, right]
//       : [right, left];

//   return keccakBuffer([
//     first,
//     second,
//   ]);
// }


// /* ---------------------------------- */
// /* Leaf                              */
// /* ---------------------------------- */

// function buildSellProposalLeaf(
//   holder: PublicKey,
//   proposal: PublicKey,
//   governanceMint: PublicKey,
//   votingPower: number | bigint | BN
// ): Buffer {
//   return keccakBuffer([
//     Buffer.from("SELLPROPERTY"),
//     holder.toBuffer(),
//     proposal.toBuffer(),
//     governanceMint.toBuffer(),
//     toU64LeBuffer(votingPower),
//   ]);
// }


// /* ---------------------------------- */
// /* Build leaves                       */
// /* ---------------------------------- */

// function buildLeaves(
//   holders: Holder[],
//   proposal: PublicKey,
//   governanceMint: PublicKey
// ): Buffer[] {
//   return holders.map((holder) =>
//     buildSellProposalLeaf(
//       holder.holder,
//       proposal,
//       governanceMint,
//       holder.votingPower
//     )
//   );
// }


// model MerkleNode {
//   snapshotId String
//   level      Int
//   nodeIndex  BigInt
//   hash       Bytes

//   @@id([snapshotId, level, nodeIndex])
//   @@index([snapshotId, level])
// }


// model MerkleSnapshot {
//   id             String   @id
//   mint           String
//   proposal       String
//   governanceMint String
//   slot           BigInt
//   root           Bytes
//   createdAt      DateTime @default(now())

//   @@index([mint, slot])
// }



// model MerkleProof {
//   snapshotId String
//   holder     String
//   leafIndex  BigInt
//   proofIndex Int
//   hash       Bytes

//   @@id([snapshotId, holder, proofIndex])
//   @@index([snapshotId, holder])
// }





// export const BuildTreeRootFromLeaves = async (
//   event: SnapshotRequestedType
// ) => {
//   const BATCH_SIZE = 10_000;

//   const snapshotId = event.slot.toString();

//   let currentLevel = 0;

//   while (true) {
//     // --------------------------------------------------
//     // 1. Count nodes in the current level
//     // --------------------------------------------------

//     const currentLevelCount = await prisma.merkleNode.count({
//       where: {
//         snapshotId,
//         level: currentLevel,
//       },
//     });

//     if (currentLevelCount === 0) {
//       throw new Error(
//         `No nodes found for snapshot ${snapshotId}, level ${currentLevel}`
//       );
//     }

//     // --------------------------------------------------
//     // 2. If only one node exists, it is the root
//     // --------------------------------------------------

//     if (currentLevelCount === 1) {
//       const root = await prisma.merkleNode.findFirst({
//         where: {
//           snapshotId,
//           level: currentLevel,
//         },
//       });

//       if (!root) {
//         throw new Error("Root node not found");
//       }

//       console.log(
//         `Merkle root found: level=${currentLevel}, index=${root.nodeIndex}`
//       );

//       return root.hash;
//     }

//     // --------------------------------------------------
//     // 3. Process current level in batches
//     // --------------------------------------------------

//     let lastNodeIndex: bigint | undefined = undefined;

//     while (true) {
//       const nodes = await prisma.merkleNode.findMany({
//         take: BATCH_SIZE,

//         where: {
//           snapshotId,
//           level: currentLevel,

//           ...(lastNodeIndex !== undefined && {
//             nodeIndex: {
//               gt: lastNodeIndex,
//             },
//           }),
//         },

//         orderBy: {
//           nodeIndex: "asc",
//         },
//       });

//       if (nodes.length === 0) {
//         break;
//       }

//       // ------------------------------------------------
//       // 4. Build parent nodes from pairs
//       // ------------------------------------------------

//       for (let i = 0; i < nodes.length; i += 2) {
//         const left = nodes[i]!;

//         let right = nodes[i + 1];

//         // ----------------------------------------------
//         // Odd number of nodes:
//         // duplicate the final node
//         // ----------------------------------------------

//         if (!right) {
//           const isLastNode =
//             left.nodeIndex === BigInt(currentLevelCount - 1);

//           if (!isLastNode) {
//             throw new Error(
//               `Unexpected missing sibling at node ${left.nodeIndex}`
//             );
//           }

//           right = left;
//         }

//         // ----------------------------------------------
//         // Build parent hash
//         // ----------------------------------------------

//         const parentHash = buildLevelForTree(
//           left.hash,
//           right.hash
//         );

//         // ----------------------------------------------
//         // Parent index
//         // ----------------------------------------------

//         const parentIndex = left.nodeIndex / 2n;

//         // ----------------------------------------------
//         // Insert parent into next level
//         // ----------------------------------------------

//         await prisma.merkleNode.create({
//           data: {
//             id: `${snapshotId}-${currentLevel + 1}-${parentIndex}`,

//             snapshotId,

//             level: currentLevel + 1,

//             nodeIndex: parentIndex,

//             hash: parentHash,
//           },
//         });
        
//       }

//       // ------------------------------------------------
//       // 5. Move cursor
//       // ------------------------------------------------

//       lastNodeIndex =
//         nodes[nodes.length - 1]!.nodeIndex;
//     }

//     // --------------------------------------------------
//     // 6. Move to the next level
//     // --------------------------------------------------

//     currentLevel++;
//   }
// };



// export type MerkleProof = {
//   hash: Buffer;
//   // true  -> sibling is on the left
//   // false -> sibling is on the right
//   siblingIsLeft: boolean;
// };

// export const buildMerkleProofFromDB = async (
//   snapshotId: string,
//   holder: string,
//   mint:string
// ): Promise<MerkleProof[]> => {

//   const proof: MerkleProof[] = [];

//   /*
//    * 1. Find the holder's leaf
//    */
//   const leaf = await prisma.merkleNode.findFirst({
//     where: {
//       snapshotId,
//       holder,
//       level: 0,
//     },
//     select: {
//       nodeIndex: true,
//       hash: true,
//     },
//   });

//   if (!leaf) {
//     throw new Error(
//       `Leaf not found for holder ${holder}`
//     );
//   }

//   let currentIndex = leaf.nodeIndex;
//   let currentLevel = 0;

//   /*
//    * 2. Keep walking upward until we reach root
//    */
//   while (true) {

//     const currentLevelCount =
//       await prisma.merkleNode.count({
//         where: {
//           snapshotId,
//           level: currentLevel,
//         },
//       });

//     /*
//      * Only one node at this level means
//      * we have reached the root.
//      */
//     if (currentLevelCount === 1) {
//       break;
//     }

//     /*
//      * 3. Determine sibling index
//      *
//      * 0 -> sibling 1
//      * 1 -> sibling 0
//      * 2 -> sibling 3
//      * 3 -> sibling 2
//      */
//     const siblingIndex =
//       currentIndex % 2n === 0n
//         ? currentIndex + 1n
//         : currentIndex - 1n;

//     /*
//      * 4. Find sibling
//      */
//     let sibling =
//       await prisma.merkleNode.findFirst({
//         where: {
//           snapshotId,
//           level: currentLevel,
//           nodeIndex: siblingIndex,
//         },
//         select: {
//           hash: true,
//           nodeIndex: true,
//         },
//       });

//     /*
//      * 5. If sibling doesn't exist, this must be
//      * the last node of an odd-sized level.
//      *
//      * Your tree-building code duplicates the
//      * last node, so the node is its own sibling.
//      */
//     if (!sibling) {

//       const isLastNode =
//         currentIndex === BigInt(
//           currentLevelCount - 1
//         );

//       if (!isLastNode) {
//         throw new Error(
//           `Sibling not found for node ${currentIndex} at level ${currentLevel}`
//         );
//       }

//       sibling = await prisma.merkleNode.findFirst({
//         where: {
//           snapshotId,
//           level: currentLevel,
//           nodeIndex: currentIndex,
//         },
//         select: {
//           hash: true,
//           nodeIndex: true,
//         },
//       });

//       if (!sibling) {
//         throw new Error(
//           `Self-sibling not found for node ${currentIndex}`
//         );
//       }
//     }

//     /*
//      * 6. Add sibling to proof
//      */
//     proof.push({
//       hash: Buffer.from(sibling.hash),

//       /*
//        * If current node is odd:
//        *
//        *     sibling | current
//        *
//        * therefore sibling is LEFT.
//        */
//       siblingIsLeft:
//         currentIndex % 2n === 1n,
//     });

//     /*
//      * 7. Move to parent
//      */
//     currentIndex =
//       currentIndex / 2n;

//     currentLevel++;
//   }

//   return proof;
// };

// // /////////////////////////////////

// type MerkleProofItem = {
//   hash: Buffer;
//   siblingIsLeft: boolean;
// };

// type HolderMerkleProof = {
//   holder: string;
//   nodeIndex: bigint;
//   proof: MerkleProofItem[];
// };


// /**
//  * Generate Merkle proofs batch-wise for a snapshot.
//  *
//  * Only snapshotId/slot and mint are required.
//  *
//  * Example:
//  *
//  * await generateMerkleProofs(
//  *   event.slot.toString(),
//  *   event.mint.toString(),
//  *   async (proofs) => {
//  *     // store proofs / send to Kafka / etc.
//  *   }
//  * );
//  */
// export const generateMerkleProofs = async (
//   snapshotId: string,
//   mint: string,
//   onBatch: (
//     proofs: HolderMerkleProof[]
//   ) => Promise<void>
// ) => {

//   const BATCH_SIZE = 10_000;

//   let lastNodeIndex: bigint | undefined = undefined;

//   while (true) {

//     /*
//      * =====================================================
//      * 1. Fetch next 10,000 leaves
//      * =====================================================
//      */

//     const leaves = await prisma.merkleNode.findMany({
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

//     /*
//      * No more leaves.
//      */
//     if (leaves.length === 0) {
//       break;
//     }


//     /*
//      * =====================================================
//      * 2. Create proof state for every holder in this batch
//      * =====================================================
//      */

//     const proofMap = new Map<
//       string,
//       MerkleProofItem[]
//     >();

//     const indexMap = new Map<
//       string,
//       bigint
//     >();


//     for (const leaf of leaves) {

//       if (!leaf.holder) {
//         throw new Error(
//           `Leaf ${leaf.nodeIndex} has no holder`
//         );
//       }

//       proofMap.set(
//         leaf.holder,
//         []
//       );

//       indexMap.set(
//         leaf.holder,
//         leaf.nodeIndex
//       );
//     }


//     /*
//      * =====================================================
//      * 3. Walk upward through the Merkle tree
//      * =====================================================
//      */

//     let currentLevel = 0;


//     while (true) {

//       /*
//        * How many nodes exist at this level?
//        */
//       const currentLevelCount =
//         await prisma.merkleNode.count({
//           where: {
//             snapshotId,
//             mint,
//             level: currentLevel,
//           },
//         });


//       /*
//        * Only one node means this is the root.
//        */
//       if (currentLevelCount === 1) {
//         break;
//       }


//       /*
//        * ===================================================
//        * 4. Calculate all sibling indexes required
//        * ===================================================
//        */

//       const siblingIndexes = new Set<string>();

//       const holderInfo: {
//         holder: string;
//         currentIndex: bigint;
//         siblingIndex: bigint;
//         siblingIsLeft: boolean;
//       }[] = [];


//       for (const [
//         holder,
//         currentIndex
//       ] of indexMap) {

//         const siblingIndex =
//           currentIndex % 2n === 0n
//             ? currentIndex + 1n
//             : currentIndex - 1n;


//         holderInfo.push({
//           holder,
//           currentIndex,
//           siblingIndex,

//           /*
//            * currentIndex odd means:
//            *
//            * sibling | current
//            *
//            * Therefore sibling is on the left.
//            */
//           siblingIsLeft:
//             currentIndex % 2n === 1n,
//         });


//         siblingIndexes.add(
//           siblingIndex.toString()
//         );
//       }


//       /*
//        * ===================================================
//        * 5. Fetch ALL siblings for this level in ONE query
//        * ===================================================
//        */

//       const siblingIndexesBigInt =
//         Array.from(
//           siblingIndexes,
//           (index) => BigInt(index)
//         );


//       const siblings =
//         await prisma.merkleNode.findMany({
//           where: {
//             snapshotId,
//             mint,
//             level: currentLevel,

//             nodeIndex: {
//               in: siblingIndexesBigInt,
//             },
//           },

//           select: {
//             nodeIndex: true,
//             hash: true,
//           },
//         });


//       /*
//        * nodeIndex -> hash
//        */
//       const siblingMap = new Map<
//         string,
//         Buffer
//       >();


//       for (const sibling of siblings) {

//         siblingMap.set(
//           sibling.nodeIndex.toString(),
//           Buffer.from(sibling.hash)
//         );
//       }


//       /*
//        * ===================================================
//        * 6. Add sibling to every holder's proof
//        * ===================================================
//        */

//       for (const info of holderInfo) {

//         let siblingHash =
//           siblingMap.get(
//             info.siblingIndex.toString()
//           );


//         /*
//          * =================================================
//          * Odd number of nodes
//          *
//          * Example:
//          *
//          * 0 1 2 3 4
//          *
//          * Node 4 has no node 5.
//          *
//          * Tree construction uses:
//          *
//          * hash(4, 4)
//          *
//          * Therefore node 4 is its own sibling.
//          * =================================================
//          */

//         if (!siblingHash) {

//           const isLastNode =
//             info.currentIndex ===
//             BigInt(currentLevelCount - 1);


//           if (!isLastNode) {
//             throw new Error(
//               `Missing sibling ${info.siblingIndex} ` +
//               `for node ${info.currentIndex} ` +
//               `at level ${currentLevel}`
//             );
//           }


//           /*
//            * Fetch the last node itself.
//            *
//            * We need its hash because the sibling
//            * is the node itself.
//            */
//           siblingHash =
//             siblingMap.get(
//               info.currentIndex.toString()
//             );


//           if (!siblingHash) {

//             const self =
//               await prisma.merkleNode.findFirst({
//                 where: {
//                   snapshotId,
//                   mint,
//                   level: currentLevel,
//                   nodeIndex:
//                     info.currentIndex,
//                 },

//                 select: {
//                   hash: true,
//                 },
//               });


//             if (!self) {
//               throw new Error(
//                 `Self sibling not found for node ` +
//                 `${info.currentIndex} at level ` +
//                 `${currentLevel}`
//               );
//             }


//             siblingHash =
//               Buffer.from(self.hash);
//           }
//         }


//         /*
//          * Add sibling to proof.
//          */
//         proofMap
//           .get(info.holder)!
//           .push({
//             hash: siblingHash,
//             siblingIsLeft:
//               info.siblingIsLeft,
//           });
//       }


//       /*
//        * ===================================================
//        * 7. Move every holder to its parent
//        *
//        * parentIndex = floor(nodeIndex / 2)
//        * ===================================================
//        */

//       for (const [
//         holder,
//         currentIndex
//       ] of indexMap) {

//         indexMap.set(
//           holder,
//           currentIndex / 2n
//         );
//       }


//       /*
//        * Move to next level.
//        */
//       currentLevel++;
//     }


//     /*
//      * =====================================================
//      * 8. Convert Map → array
//      * =====================================================
//      */

//     const batchProofs: HolderMerkleProof[] =
//       leaves.map((leaf) => {

//         if (!leaf.holder) {
//           throw new Error(
//             `Leaf ${leaf.nodeIndex} has no holder`
//           );
//         }

//         return {
//           holder: leaf.holder,

//           nodeIndex:
//             leaf.nodeIndex,

//           proof:
//             proofMap.get(leaf.holder) ?? [],
//         };
//       });


//     /*
//      * =====================================================
//      * 9. Process/store this batch
//      *
//      * IMPORTANT:
//      * We don't keep all proofs in memory.
//      * =====================================================
//      */

//     await onBatch(batchProofs);


//     /*
//      * =====================================================
//      * 10. Move to next 10,000 leaves
//      * =====================================================
//      */

//     lastNodeIndex =
//       leaves[leaves.length - 1].nodeIndex;
//   }
// };




// const options = {
//   method: 'POST',
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify({
//     jsonrpc: '2.0',
//     id: '1',
//     method: 'getMultipleAccounts',
//     params: [
//       [
//         '29gH4cjcLDwkiGBJopxYrmqjnoYYTayhMDmjjMKxeAsn',
//         '9UnjFWAXyTKdbHKfdobjVc7ukZpzuBqUiAnfiKxyH3sV'
//       ],
//       {encoding: 'jsonParsed'}
//     ]
//   })
// };

// fetch('https://devnet.helius-rpc.com/?api-key=4aeb61ea-16ef-46e2-a283-bb8be85312e3', options)
//   .then(res => res.json())
//   .then(res => console.dir(res, { depth: null, colors: true }))
//   .catch(err => console.error(err));



// import bs58 from "bs58";

// export function decodeTokenTransfer(data: string): bigint {
//   const decoded = Buffer.from(bs58.decode(data));

//   // Transfer: 3 + 8-byte amount
//   if (decoded.length === 9 && decoded[0] === 3) {
//     return decoded.readBigUInt64LE(1);
//   }

//   // TransferChecked: 12 + 8-byte amount + 1-byte decimals
//   if (decoded.length === 10 && decoded[0] === 12) {
//     return decoded.readBigUInt64LE(1);
//   }

//   throw new Error("Unsupported or invalid token transfer instruction");
// }



interface ExecuteInstructionData {
  discriminator: string;
  amount: bigint;
}








// const options = {
//   method: 'POST',
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify({
//     jsonrpc: '2.0',
//     id: '1',
//     method: 'getAccountInfo',
//     params: ['29gH4cjcLDwkiGBJopxYrmqjnoYYTayhMDmjjMKxeAsn', {encoding: 'jsonParsed'}]
//   })
// };

// fetch('https://devnet.helius-rpc.com/?api-key=4aeb61ea-16ef-46e2-a283-bb8be85312e3', options)
//   .then(res => res.json())
//   .then(res => console.log(res))
//   .catch(err => console.error(err));


// import { address } from "@solana/kit";
// import "dotenv/config"
// import { createHelius } from "helius-sdk";
// import { dir } from "node:console";
// import { GetMultipleAccountsResponseSchema } from "./schemaValidation/heliusGetTokenOwnerAddressFromAtaSchema";

//  const apiKey = "4aeb61ea-16ef-46e2-a283-bb8be85312e3"; 
//  console.log("key length:", process.env.HELIUS_KEY?.length);
//   const helius = createHelius({ apiKey,network:"devnet"});

//             const data = await helius.getMultipleAccounts(
//                 [
//         address('29gH4cjcLDwkiGBJopxYrmqjnoYYTayhMDmjjMKxeAsn'),
//         address('9UnjFWAXyTKdbHKfdobjVc7ukZpzuBqUiAnfiKxyH3sV')
//       ],
//                 {
//                     commitment:"finalized",
//                     encoding:"jsonParsed",
//                 },
                                
//             )

//   const parsedResponse =
//   GetMultipleAccountsResponseSchema.parse(data);


// import { BorshEventCoder } from "@coral-xyz/anchor";
// import bs58 from "bs58";
// import type { ExecutionFrame,EventData } from "./types&interface/solanaLogParser.interface";

// import type { HeliusWebhook,
//   InnerInstruction } from "./schemaValidation/heliusWebhookDataSchema";

// interface CombinedInstruction {
//   name: string;
//   data: {
//     raw: string;
//     accounts: number[];
//     programId: string;
//     programIdIndex: number;
//     // stackHeight: number;
//     discriminator: string;
//     event?: EventData;
//   };
// }
// interface ExecutionFrame {
//   programId: string;
//   depth: number;
//   instructionName?: string;
//   events: {
//     name: string;
//     data: string;
//   }[];
//   children: ExecutionFrame[];
// }

// const INVOKE_REGEX = /^Program (\S+) invoke \[(\d+)\]$/;
// const SUCCESS_REGEX = /^Program (\S+) success$/;
// const FAILED_REGEX = /^Program (\S+) failed(?::.*)?$/;
// const INSTRUCTION_REGEX = /^Program log: Instruction: (.+)$/;

// function parseExecutionFrames(
//   logs: string[],
//   eventCoder: BorshEventCoder,
// ): ExecutionFrame[] {
//   const stack: ExecutionFrame[] = [];
//   const roots: ExecutionFrame[] = [];

//   for (const log of logs) {
//     const invoke = log.match(INVOKE_REGEX);

//     if (invoke) {
//       const frame: ExecutionFrame = {
//         programId: invoke[1]!,
//         depth: Number(invoke[2]),
//         events: [],
//         children: [],
//       };

//       const parent = stack[stack.length - 1];

//       if (parent) {
//         parent.children.push(frame);
//       } else {
//         roots.push(frame);
//       }

//       stack.push(frame);
//       continue;
//     }

//     const current = stack[stack.length - 1];

//     if (!current) continue;

//     const instruction = log.match(INSTRUCTION_REGEX);

//     if (instruction) {
//       current.instructionName = instruction[1];
//       continue;
//     }

//     if (log.startsWith("Program data: ")) {
//       const encoded = log.slice("Program data: ".length);

//       const decoded = eventCoder.decode(encoded);

//       if (decoded && current.programId) {
//         current.events.push({
//           data: encoded,
//         });
//       }

//       continue;
//     }

//     const completion = log.match(SUCCESS_REGEX) ?? log.match(FAILED_REGEX);

//     if (completion) {
//       const completed = stack.pop();

//       if (completed?.programId !== completion[1]) {
//         throw new Error(
//           `Execution stack mismatch: expected ${completed?.programId}, received ${completion[1]}`,
//         );
//       }
//     }
//   }

//   return roots;
// }

// export function combineInnerInstructionsWithEvents(
//   webhook: HeliusWebhook,
//   targetProgramId: string,
//   eventCoder: BorshEventCoder,
// ): CombinedInstruction[] {
//   const { logMessages, innerInstructions } = webhook.transaction.meta;

//   const accountKeys =
//     webhook.transaction.transaction.message.accountKeys;

//   if (!innerInstructions?.length) {
//     return [];
//   }

//   const roots = parseExecutionFrames(logMessages, eventCoder);
//   const results: CombinedInstruction[] = [];

//   for (const group of innerInstructions) {
//     const root = roots[group.index];

//     if (!root) continue;

//     const innerFrames: ExecutionFrame[] = [];

//     function collectChildren(frame: ExecutionFrame): void {
//       for (const child of frame.children) {
//         innerFrames.push(child);
//         collectChildren(child);
//       }
//     }

//     collectChildren(root);

//     const usedFrames = new Set<ExecutionFrame>();

//     for (const instruction of group.instructions) {
//       const programId = accountKeys[instruction.programIdIndex];

//       if (!programId || programId !== targetProgramId) {
//         continue;
//       }

//       const frame = innerFrames.find(
//         (candidate) =>
//           !usedFrames.has(candidate) &&
//           candidate.programId === programId &&
//           candidate.depth === instruction.stackHeight,
//       );

//       if (!frame) continue;

//       usedFrames.add(frame);

//       const instructionBytes = bs58.decode(instruction.data);
//       const discriminator = Buffer.from(
//         instructionBytes.subarray(0, 8),
//       ).toString("hex");

//       const event = frame.events[0];

//       results.push({
//         name: frame.instructionName ?? "Unknown",
//         data: {
//           raw: instruction.data,
//           accounts: instruction.accounts,
//           programId,
//           programIdIndex: instruction.programIdIndex,
//           // stackHeight: instruction.stackHeight,
//           discriminator,
//           ...(event ? { event } : {}),
//         },
//       });
//     }
//   }

//   return results;
// }

import { z } from "zod";

export const TokenTransferEventSchema = z.object({
  name: z.literal("TokenTransferEvent"),
  data: z.object({
    source: z.string(),
    destination: z.string(),
    postBalanceOfSource: z.string(),
    postBalaceOfDestination: z.string(),
  }),
});

const event = tokenTransfereventDecoder.decode(
  "7p/2WeYIWXUaTDpggWq/y3SrcdT/d1llrtFFWI1zQXBjASHSD8a+e86Ysu0bSh04BnoNR/dXowv/5EaI5YlkJtszXSJxJJ4OIAMAAAAAAADIAAAAAAAAAA=="
);

if (event) {
  const convertedEvent = {
    name: event.name,
    data: {
      source: event.data.source.toBase58(),
      destination: event.data.destination.toBase58(),
      postBalanceOfSource: event.data.postBalanceOfSource.toString(),
      postBalaceOfDestination:
        event.data.postBalaceOfDestination.toString(),
    },
  };

  const result = TokenTransferEventSchema.safeParse(convertedEvent);

  if (result.success) {
    console.log("Valid event:", result.data);
  } else {
    console.error("Invalid event:", result.error.format());
  }
} else {
  console.error("Failed to decode event");
}

