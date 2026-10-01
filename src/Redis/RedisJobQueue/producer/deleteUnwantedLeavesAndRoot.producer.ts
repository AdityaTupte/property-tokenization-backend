import type { SnapshotRequestedType } from "../consumer/snapshotRequestedQueue.consumer";
import { deleteLeavesAndRootQueue } from "../server&queues";

export const deleteLeavesAndRootJobProducer = async (
  event: SnapshotRequestedType
) => {
  const job = deleteLeavesAndRootQueue.add(
    "delete-leaves-and-root",
    {
      event,
    },
    {
      attempts: 4,
      delay: 86400000,
    }
  );
};
