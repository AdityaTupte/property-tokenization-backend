import { Worker } from "bullmq";
import { BullMqConnection } from "../server&queues";
import type { CompletedExecution } from "../../types&interface/solanaLogParser.interface";
import { createMerkleLeavesFromTokenBalance } from "../../utils/mekleRootCreation.util/CreateLeaves.util";
import { SnapshotRequestedSchema } from "../../idl.schema/generated/SnapshotRequested.schema";
import type z from "zod";
import { eventDecoder } from "../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { BuildTreeRootFromLeaves } from "../../utils/mekleRootCreation.util/BuildTreeRootFromLeaves.util"; 
import { prisma } from "../../prismaclient";


export type SnapshotRequestedType = z.infer<typeof SnapshotRequestedSchema>;
const snapshotWorker = new Worker(
    "snapshotRequestedQueue",
    async(job) =>{

         const eventArray:CompletedExecution = job.data

         const decodedData = eventDecoder.decode(eventArray.events[0]?.raw!);
        
          const data = SnapshotRequestedSchema.parse(decodedData);
        

        await createMerkleLeavesFromTokenBalance(data,data.proposalType) //fixme prpolsal string

        await BuildTreeRootFromLeaves(data);

        const root =  await prisma.merkleNode.findFirst({
            where:{
                snapshotId:data.slot.toString(),
                mint:data.mint.toString(),
            },
            orderBy:{
                level:"desc",
            },
            select:{
                hash:true,
            }
        })


        
        // grnrate proof 

        //   call the submit function at submition enter the sanphot id snapshot in table
        

        // 



  
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