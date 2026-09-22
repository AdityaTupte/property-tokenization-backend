import { prisma } from "../../prismaclient";
import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueue.consumer";

export const deleteLeavesAndRootHandler = async (
  event: SnapshotRequestedType
) => {
  const slot = event.slot.toString();
  const mint = event.mint;

  const BATCH_SIZE = 10_000;

  while (true) {
    const nodes = await prisma.merkleNode.findMany({
      where: {
        mint,
        snapshotId: slot,
      },
      select: {
        id: true,
      },
      take: BATCH_SIZE,
    });

    // Nothing left to delete
    if (nodes.length === 0) {
      break;
    }

    const ids = nodes.map((node) => node.id);

    await prisma.merkleNode.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
};
