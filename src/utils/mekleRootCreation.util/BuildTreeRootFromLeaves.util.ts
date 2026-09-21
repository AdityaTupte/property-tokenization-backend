// import { prisma } from "../../prismaclient";
// import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueueConsumer.controller";
// import { keccak_256 } from "@noble/hashes/sha3";



// const buildLevelForTree = (
//   hash1: Buffer,
//   hash2: Buffer
// ): Buffer => {
//   const combined = Buffer.concat([
//     hash1,
//     hash2,
//   ]);

//   return Buffer.from(
//     keccak_256(combined)
//   );
// };





// export const BuildTreeRootFromLeaves = async (event: SnapshotRequestedType) => {
//   const BATCH_SIZE = 10_000;

//   const snapshotId = event.slot.toString()

//   let currentLevel = 0;

//   while (true) {

//      const currentLevelCount = await prisma.merkleNode.count({
//       where: {
//         snapshotId,
//         level: currentLevel,
//       },
//     });


//      if (currentLevelCount === 0) {
//       throw new Error(
//         `No nodes found for snapshot ${snapshotId}, level ${currentLevel}`
//       );
//     }

//     if (currentLevelCount === 1){

//       const root = await prisma.merkleNode.findFirst({
//         where:{
//           snapshotId:snapshotId,
//           level:currentLevel
//         }
//       })

//       if(!root){
//       throw new Error("Root node not found");       
//       };

//       return root.hash; 
//   }


//   let lastNodeIndex: bigint | undefined = undefined;


//   while(true){

//       const nodes :any = await prisma.merkleNode.findMany({
//         take:BATCH_SIZE,

//         where:{
//           snapshotId:snapshotId,
//           level:currentLevel,

//           ...(lastNodeIndex !== undefined && {
//             nodeIndex:{
//               gt:lastNodeIndex
//             }
//           } ),
//         },
//           orderBy:{
//             nodeIndex:"asc",
//           },
//         }
//       );

//       if(nodes.length === 0) break;
      
//       const parentArray = [] 
      
//       for(let i = 0;i<nodes.length;i+2 ){

//         const left = nodes[i];

//         let right = nodes[i + 1];

//         if(!right){

//           const isLastNode = left?.nodeIndex === BigInt(currentLevelCount -1 );
          
//           if (!isLastNode) {
//             throw new Error(
//               `Unexpected missing sibling at node ${left!.nodeIndex}`
//             );

//         }
//            right = left;

//       } 

//       const Hash = buildLevelForTree(
//         Buffer.from(left!.hash),
//         Buffer.from(right.hash)          
//       );

//        const parentHash = new Uint8Array(Hash.length);
//       parentHash.set(Hash);


//       const parentIndex = left!.nodeIndex / 2n ;


//       parentArray.push( {  
//         snapshotId : snapshotId , 
//         hash : parentHash,
//         level:currentLevel+1, 
//         nodeIndex: parentIndex,
//         mint: event.mint.toString()
//       })


//   }


//     if (parentArray.length > 0) {
//         await prisma.merkleNode.createMany({
//           data: parentArray,
//         });
//       }


//     lastNodeIndex = nodes[nodes.length - 1]!.nodeIndex!;

// };

//       currentLevel++;

// }

// }



import { prisma } from "../../prismaclient";
import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueueConsumer.controller";
import { keccak_256 } from "@noble/hashes/sha3";


/*
 * MUST match Rust verify_proof().
 *
 * Rust:
 *
 * if computed <= *p {
 *     hash(computed, p)
 * } else {
 *     hash(p, computed)
 * }
 */
const buildLevelForTree = (
  hash1: Buffer,
  hash2: Buffer
): Buffer => {

  const [first, second] =
    Buffer.compare(hash1, hash2) <= 0
      ? [hash1, hash2]
      : [hash2, hash1];


  return Buffer.from(
    keccak_256(
      Buffer.concat([
        first,
        second,
      ])
    )
  );
};


export const BuildTreeRootFromLeaves =
  async (
    event: SnapshotRequestedType
  ) => {

    const BATCH_SIZE = 10_000;

    const snapshotId =
      event.slot.toString();

    const mint =
      event.mint.toString();

    let currentLevel = 0;


    while (true) {

      /*
       * Number of nodes at this level.
       */
      const currentLevelCount =
        await prisma.merkleNode.count({
          where: {
            snapshotId,
            mint,
            level: currentLevel,
          },
        });


      if (currentLevelCount === 0) {
        throw new Error(
          `No nodes found for snapshot ${snapshotId}, level ${currentLevel}`
        );
      }


      /*
       * One node = ROOT.
       */
      if (currentLevelCount === 1) {

        const root =
          await prisma.merkleNode.findFirst({
            where: {
              snapshotId,
              mint,
              level: currentLevel,
            },

            select: {
              hash: true,
            },
          });


        if (!root) {
          throw new Error(
            "Root node not found"
          );
        }


        return root.hash;
      }


      /*
       * Process this level in batches.
       */
      let lastNodeIndex:
        bigint | undefined;


      while (true) {

        const nodes =
          await prisma.merkleNode.findMany({

            where: {
              snapshotId,
              mint,
              level: currentLevel,

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
              hash: true,
              nodeIndex: true,
            },
          });


        if (nodes.length === 0) {
          break;
        }


        const parentArray: {
          snapshotId: string;
          mint: string;
          hash: Uint8Array<ArrayBuffer>;
          level: number;
          nodeIndex: bigint;
        }[] = [];


        /*
         * IMPORTANT:
         *
         * BATCH_SIZE must be EVEN.
         *
         * 10,000 is even, so a pair
         * will never be split across batches.
         */
        for (
          let i = 0;
          i < nodes.length;
          i += 2
        ) {

          const left =
            nodes[i];

          if (!left) {
            throw new Error(
              "Left node missing"
            );
          }


          let right =
            nodes[i + 1];


          /*
           * Odd number of nodes.
           *
           * Example:
           *
           * A B C
           *
           * becomes:
           *
           * A B
           * C C
           */
          if (!right) {

            const isLastNode =
              left.nodeIndex ===
              BigInt(currentLevelCount - 1);


            if (!isLastNode) {
              throw new Error(
                `Unexpected missing sibling at node ${left.nodeIndex}`
              );
            }


            right = left;
          }


          /*
           * Sorted-pair hashing.
           */
          const parentHash =
            buildLevelForTree(
              Buffer.from(left.hash),
              Buffer.from(right.hash)
            );


          /*
           * Parent index.
           *
           * 0,1 -> 0
           * 2,3 -> 1
           * 4,5 -> 2
           */
          const parentIndex =
            left.nodeIndex / 2n;
           
            const hash = new Uint8Array(parentHash.length);
            
            hash.set(parentHash);

          parentArray.push({
            snapshotId,

            mint,

            hash: hash,

            level:
              currentLevel + 1,

            nodeIndex:
              parentIndex,
          });
        }


        /*
         * Insert parents for this batch.
         */
        if (parentArray.length > 0) {

          await prisma.merkleNode.createMany({
            data: parentArray,
          });
        }


        lastNodeIndex =
          nodes[nodes.length - 1]!.nodeIndex;
      }


      /*
       * Next level.
       */
      currentLevel++;
    }
  };
