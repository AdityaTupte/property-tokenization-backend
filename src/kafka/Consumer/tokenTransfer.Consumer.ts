import type { InstructionDataInterface } from "../../types&interface/instructionData.Interface";
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import { kafka } from "../kakfaClient";

export const tokenTransferKafkaConsumer = async () => {
  const Consumer = kafka.consumer({
    groupId: "tokenTransferDbUpdate",
  });

  await Consumer.connect();

  await Consumer.subscribe({
    topic: KAFKA_TOPICS.TOKENTRANSFER,
  });

  Consumer.run({
    autoCommit: true,

    eachMessage: async ({ topic, message }) => {
      if (!message.value) {
        console.log("Message has no value");
        return;
      }

      try {

        const data :
         Pick<InstructionDataInterface,
                "TransactionAccountskey" | 
                "InstructionNameAndData" | 
                "blockTime"
            >

                = JSON.parse(
          message.value.toString()
        );

        data.InstructionNameAndData.forEach((element) => {
            // TODO xcreate a fucntion for handlinfg the update 
            element.data

        });        


      } catch (error) {
        
      }


    },
  });
};
