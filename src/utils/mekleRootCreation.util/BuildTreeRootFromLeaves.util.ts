import { prisma } from "../../prismaclient";
import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueueConsumer.controller";
import { keccak_256 } from "@noble/hashes/sha3";



const buildLevelForTree = (
  hash1: Buffer,
  hash2: Buffer
): Buffer => {
  const combined = Buffer.concat([
    hash1,
    hash2,
  ]);

  return Buffer.from(
    keccak_256(combined)
  );
};





export const BuildTreeRootFromLeaves = async (event: SnapshotRequestedType) => {
  const BATCH_SIZE = 10_000;

  const snapshotId = event.slot.toString()

  let currentLevel = 0;

  while (true) {

     const currentLevelCount = await prisma.merkleNode.count({
      where: {
        snapshotId,
        level: currentLevel,
      },
    });


     if (currentLevelCount === 0) {
      throw new Error(
        `No nodes found for snapshot ${snapshotId}, level ${currentLevel}`
      );
    }

    if (currentLevelCount === 1){

      const root = await prisma.merkleNode.findFirst({
        where:{
          snapshotId:snapshotId,
          level:currentLevel
        }
      })

      if(!root){
      throw new Error("Root node not found");       
      };

      return root.hash; 
  }


  let lastNodeIndex: bigint | undefined = undefined;


  while(true){

      const nodes :any = await prisma.merkleNode.findMany({
        take:BATCH_SIZE,

        where:{
          snapshotId:snapshotId,
          level:currentLevel,

          ...(lastNodeIndex !== undefined && {
            nodeIndex:{
              gt:lastNodeIndex
            }
          } ),
        },
          orderBy:{
            nodeIndex:"asc",
          },
        }
      );

      if(nodes.length === 0) break;
      
      const parentArray = [] 
      
      for(let i = 0;i<nodes.length;i+2 ){

        const left = nodes[i];

        let right = nodes[i + 1];

        if(!right){

          const isLastNode = left?.nodeIndex === BigInt(currentLevelCount -1 );
          
          if (!isLastNode) {
            throw new Error(
              `Unexpected missing sibling at node ${left!.nodeIndex}`
            );

        }
           right = left;

      } 

      const Hash = buildLevelForTree(
        Buffer.from(left!.hash),
        Buffer.from(right.hash)          
      );

       const parentHash = new Uint8Array(Hash.length);
      parentHash.set(Hash);


      const parentIndex = left!.nodeIndex / 2n ;


      parentArray.push( {  
        snapshotId : snapshotId , 
        hash : parentHash,
        level:currentLevel+1, 
        nodeIndex: parentIndex,
        mint: event.mint.toString()
      })


  }


    if (parentArray.length > 0) {
        await prisma.merkleNode.createMany({
          data: parentArray,
        });
      }


    lastNodeIndex = nodes[nodes.length - 1]!.nodeIndex!;

};

      currentLevel++;

}

}
