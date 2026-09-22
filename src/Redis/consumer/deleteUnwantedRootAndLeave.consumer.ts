import { Worker } from "bullmq";
import type { SnapshotRequestedType } from "./snapshotRequestedQueue.consumer";
import { deleteLeavesAndRootHandler } from "../../utils/mekleRootCreation.util/deleteleavesAfterRootAndProofGen.util";

const deleteLeavesAndRootWorker = new Worker(
  "deleteLeavesAndRootQueue",
  async (job) => {
    const event: SnapshotRequestedType = job.data;

    await deleteLeavesAndRootHandler(event);
  }
);
