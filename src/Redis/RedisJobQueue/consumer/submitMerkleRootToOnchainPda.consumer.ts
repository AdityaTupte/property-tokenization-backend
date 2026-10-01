import { Worker } from "bullmq";
import type { SnapshotRequestedType } from "./snapshotRequestedQueue.consumer";
import { submitMerkleRootToOnchainPda } from "../../utils/mekleRootCreation.util/submitMerkleRootToOnchainPda.util";

const submitMerkleRootToOnchainPdaConsumer= new Worker(
  "submitMerkleRootToOnchainPda",
  async (job) => {
    const event: SnapshotRequestedType = job.data;

    await submitMerkleRootToOnchainPda(event);
  }
);