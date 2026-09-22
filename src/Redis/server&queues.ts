import { Queue } from "bullmq";
import Redis from "ioredis";

export const BullMqConnection = new Redis('redis://localhost:6379');



export const snapshotRequestedQueue = new Queue('snapshotRequestedQueue', { connection:BullMqConnection });

export const deleteLeavesAndRootQueue = new Queue('deleteLeavesAndRootQueue', { connection:BullMqConnection });

export const submitMerkleRootToOnchainQueue = new Queue('submitMerkleRootToOnchainPda', {connection:BullMqConnection})



