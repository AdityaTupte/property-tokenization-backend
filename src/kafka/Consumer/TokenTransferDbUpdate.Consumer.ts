import { UpdateHistoryOfHolder } from "../../controllers/solanaProgram.controller.ts/TokenTransferProgram/updateHistoryOfHolder.controller";
import type { TokenTransferDbEventSchema } from "../../types&interface/instructionData.Interface";
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import { kafka } from "../kakfaClient";


export const tokenTransferKafkaConsumerDbInsert = async() =>{
     const Consumer = kafka.consumer({
        groupId: "tokenTransferDbUpdate",
      });
    
      await Consumer.connect();
    
      await Consumer.subscribe({
        topic: KAFKA_TOPICS.TOKENTRANSFERDBINSERT,
      });

      await Consumer.run({

        partitionsConsumedConcurrently:3,

        eachMessage: async ({
            message
        }) =>{

            if (!message.value) {
        console.log("Message has no value");
        return;
      }

            try {
                

            const data:TokenTransferDbEventSchema = JSON.parse(message.value?.toString())

            await UpdateHistoryOfHolder(data)



            } catch (error) {
                
            }



        }
      })




}

