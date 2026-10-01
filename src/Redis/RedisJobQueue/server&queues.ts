import { Queue } from "bullmq";
import { BullMqConnection } from "../RedisConnection";



export const snapshotRequestedQueue = new Queue('snapshotRequestedQueue', { connection:BullMqConnection });

export const deleteLeavesAndRootQueue = new Queue('deleteLeavesAndRootQueue', { connection:BullMqConnection });

export const submitMerkleRootToOnchainQueue = new Queue('submitMerkleRootToOnchainPda', {connection:BullMqConnection})



