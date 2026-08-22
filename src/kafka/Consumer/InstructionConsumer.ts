import { solanaInstructionHandler } 
    from "../../helius/instructionHandlerForSolanaProgram";

import type { InstructionDataInterface } 
    from "../../types&interface/instructionData.Interface";

import { TransactionContext } 
    from "../../utils/solanaDbHandler";
import { kafka } from "../kakfaClient";



export const kafkaInstructionconsumer = async function () {

     const Consumer = kafka.consumer({
       groupId:"InstructionConsumer",
     })
     
     await Consumer.connect()
 
     await Consumer.subscribe({
         topic: "Instruction",
         // fromBeginning: true,
     });
 
      Consumer.run({
         autoCommit: true,
 
         eachMessage: async ({
             topic,
             heartbeat,
             message,
             partition,
             pause,
         }) => {
 
             if (!message.value) {
                 console.log("Message has no value");
                 return;
             }
 
             try {
 
                 const data: InstructionDataInterface =
                     JSON.parse(message.value.toString());
 
                 const ctx = new TransactionContext();
 
                 for (const element of data.InstructionNameAndData) {
 
                     const handler =
                         solanaInstructionHandler(element.name);
 
                     await handler(
                         data.transaction,
                         element.data,
                         ctx,
                         data.blockTime
                     );
                 }
 
                 await ctx.execute();
 
             } catch (error) {
 
                 console.error(
                     "❌ Error processing Kafka message:",
                     error
                 );
             }
         },
     });
   
}
