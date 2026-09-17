import { prisma } from "../../prismaclient";
import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueueConsumer.controller";

export const BuildTreeRootFromLeaves = async (event: SnapshotRequestedType) => {
  const BATCH_SIZE = 10_000;

  let level = 0;

  let lastNodeIndex: string | undefined = undefined;

  let nodeIndex: bigint = 0n;


//   FIXME use another fuction to buiod the tree and after completion of
//  create a single3 level create a logic where we call the fuctioon one agaion util the root does not left 

  while (true) {
    const leaves = await prisma.merkleNode.findMany({
      take: BATCH_SIZE,

      where: {
        snapshotId: event.slot.toString(),
        level: level,
        ...(lastNodeIndex !== undefined && {
          nodeIndex: {
            gt: lastNodeIndex,
          },
        }),
      },
      orderBy: {
        nodeIndex: "asc",
      },
    });

    if (leaves.length === 0) {
      break;
    }

    for (const leaf of leaves) {
      console.log(leaf.nodeIndex, leaf.hash);
    }

    // lastNodeIndex = leaves[leaves.length - 1]!.nodeIndex;
  }
};

// function buildMerkleTree(
//   leaves: ReadonlyArray<Buffer | Uint8Array>
// ): MerkleTree {
//   if (leaves.length === 0) {
//     throw new Error("Cannot build Merkle tree from zero leaves");
//   }

//   const levels: Buffer[][] = [];

//   // Level 0 = leaves
//   let level: Buffer[] = leaves.map((leaf) => Buffer.from(leaf));

//   levels.push(level);

//   while (level.length > 1) {
//     // If odd, duplicate last node
//     if (level.length % 2 === 1) {
//       level = [...level, Buffer.from(level[level.length - 1])];
//     }

//     const nextLevel: Buffer[] = [];

//     for (let i = 0; i < level.length; i += 2) {
//       const left = level[i];
//       const right = level[i + 1];

//       nextLevel.push(hashPair(left, right));
//     }

//     level = nextLevel;

//     levels.push(level);
//   }

//   return {
//     levels,
//     root: level[0],
//   };
// }
