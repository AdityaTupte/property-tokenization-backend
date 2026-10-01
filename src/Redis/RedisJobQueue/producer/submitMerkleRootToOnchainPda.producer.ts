import type { SnapshotRequestedType } from "../consumer/snapshotRequestedQueue.consumer";
import { submitMerkleRootToOnchainQueue } from "../server&queues";


export const submitMerkleRootToOnchainPdaJobProducer = async(
    event:SnapshotRequestedType
) =>{

    const job  = submitMerkleRootToOnchainQueue.add(
        "submit-merkle-root-onChain",
        {
            data:event
        },
        {
            attempts:4
        }
    )



}