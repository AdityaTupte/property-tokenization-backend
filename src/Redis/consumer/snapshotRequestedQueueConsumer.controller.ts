import { Worker } from "bullmq";
import { BullMqConnection } from "../server&queues";
import type { CompletedExecution } from "../../types&interface/solanaLogParser.interface";
import { createMerkleLeavesFromTokenBalance } from "../../utils/mekleRootCreation.util/createleaves";



const snapshotWorker = new Worker(
    "snapshotRequestedQueue",
    async(job) =>{

        const data:CompletedExecution = job.data

        await createMerkleLeavesFromTokenBalance(data.events)


        



  
  /*   TODO   use batch wise proess of leaves ,poarent and eroots
        stoe evry leave and roots whjile creating then in batch whise
        again same until root created
        call the submit function
        for voting user redis 
        to store the data of token balcne schaneg use redis 
        maintain  a table whre we store data of mini number of slot required 
        
        
        
        
 */
    },
    {
        connection:BullMqConnection
    }
)


snapshotWorker.on("completed",(job:unknown) =>{

    console.log("merkle root creation succesful");
    

} )


snapshotWorker.on("failed",(job:unknown) =>{

    console.log("merkle root creation failed");
    

} )