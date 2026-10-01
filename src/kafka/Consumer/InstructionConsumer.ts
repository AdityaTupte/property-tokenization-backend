
import { solanaInstructionHandler } 
    from "../../helius/instructionHandlerForSolanaProgram";

import type { InstructionDataInterface } 
    from "../../types&interface/instructionData.Interface";

import { TransactionContext } 
    from "../../utils/solanaDbHandler";
import { kafka } from "../kakfaClient";
import { EventHandler } from "../../helius/EventhandlerForSolanaProgram";
import type { InstructionHandler } from "../../types&interface/solanaInstrcution&event.type";
import * as SellProposal from "../../controllers/solanaProgram.controller.ts/sellProperty.controller/sellPropertyProposalImportLib"
import { VotingForProposalInstructionProducer } from "../Producers/VotingForProposal.Producer";

const VotingforProposalInstructionMap: Record<string, InstructionHandler> = {
    //  voting_for_sell_proposal:VotingForProposa.handleSellPropertyProposal,
};

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
                let index = 0 
                 for (const element of data.InstructionNameAndData) {

                if(VotingforProposalInstructionMap[element.name]){ 

                     await VotingForProposalInstructionProducer(
                        data.transaction,
                        element,
                        ctx,
                        data.blockTime,
                        data.log[index]!,
                     )
                    
                     index++
                     
                }

                else{
                    
                    const handler =
                         solanaInstructionHandler(element.name);
                    
                       
                     await handler(
                         data.transaction,
                         element.data,
                         ctx,
                         data.blockTime,
                         data.log[index]!,
                     );
                     index++

                     
                }
 


                }
                 await ctx.execute();

                 for (const log of data.log) {
                    
                    const logEventHandler = EventHandler(log)

                 }
                 
             } catch (error) {
 
                 console.error(
                     "❌ Error processing Kafka message:",
                     error
                 );
             }
         },
     });
   
}
