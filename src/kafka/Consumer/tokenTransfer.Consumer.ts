import { da, el } from "zod/locales";
import type { InstructionDataInterface, TokenTransferInstructionInterface } from "../../types&interface/instructionData.Interface";
import { TransactionContext } from "../../utils/prisamTransactionClass";
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import { kafka } from "../kakfaClient";
import { number } from "zod";
import { AtaOfSourceAndDestinationWithMintsFunction, getTokenAccountOwnersFromDb } from "../../utils/AtaOfSourceAndDestinationWithMintsFunction.util";

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

        const data: TokenTransferInstructionInterface = JSON.parse(
          message.value.toString()
        );

        const AtaAddresses = AtaOfSourceAndDestinationWithMintsFunction(
          data.InnerInstructions,
          data.TransactionAccountskey
        )

        const accounts: { ataKey: string; mintKey: string }[] =
          AtaAddresses.flatMap((item) => {
            if (
              !item.sourceAta ||
              !item.mintAddress ||
              !item.destintationAta
            ) {
              return [];
            }

            return [
              {
                ataKey: item.sourceAta,
                mintKey: item.mintAddress,
              },
              {
                ataKey: item.destintationAta,
                mintKey: item.mintAddress,
              },
            ];
          });

        const owners = await getTokenAccountOwnersFromDb(accounts);

        



        // const DbCallForSolanaPubkey = await getTokenAccountOwnersFromDb(

        // )
            /* 
            
            check flat map optionjs this can helps use for inner instrcutions loop 

            */



        const tx = new TransactionContext();

        data.InnerInstructions.forEach((element) => {
          // TODO xcreate a fucntion for handlinfg the update 
          element,
            slot: data.slot,
              transactionAccountsKeys: data.TransactionAccountskey
        });


      } catch (error) {

      }


    },
  });
};
