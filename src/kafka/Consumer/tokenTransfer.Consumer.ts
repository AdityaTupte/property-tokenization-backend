import { da, el } from "zod/locales";
import type {
  InstructionDataInterface,
  TokenTransferDbEventSchema,
  TokenTransferInstructionInterface,
} from "../../types&interface/instructionData.Interface";
import { TransactionContext } from "../../utils/prisamTransactionClass";
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import { kafka } from "../kakfaClient";
import { number } from "zod";
import {
  AtaOfSourceAndDestinationWithMintsFunction,
  getTokenAccountOwnersFromDb,
} from "../../utils/AtaOfSourceAndDestinationWithMintsFunction.util";
import { getOwnerFromHeliusRpc } from "../../helius/getOwnerFromHeliusRpc";
import { address } from "@solana/kit";
import { TokenTransferProducerDb } from "../Producers/TokenTransferDbUpdate.Producer";
import type { ProducerBatch } from "kafkajs";

export const tokenTransferKafkaConsumer = async () => {
  const Consumer = kafka.consumer({
    groupId: "tokenTransfer",
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
        );

        const accounts: { ataKey: string; mintKey: string }[] =
          AtaAddresses.flatMap((item) => {
            if (!item.sourceAta || !item.mintAddress || !item.destintationAta) {
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

        const ataWithoutOwners = owners
          .filter(({ owner }) => !owner)
          .map(({ ataKey }) => address(ataKey));

        let heliusRpcCallData = new Map<string, string>();

        if (ataWithoutOwners.length > 0) {
          heliusRpcCallData = await getOwnerFromHeliusRpc(ataWithoutOwners);

          owners.forEach((element) => {
            if (!element.owner) {
              const owner = heliusRpcCallData.get(element.ataKey);

              if (owner) {
                element.owner = owner;
              }
            }
          });
        }

        const ownersMap = new Map<string, string | null>(
          owners.map(({ ataKey, owner }) => [ataKey, owner])
        );

        const Eventdata :TokenTransferDbEventSchema[] = [] ;
        
        for (let index = 0; index < data.InnerInstructions.length; index++) {
          const sourceAccountIndex = data.InnerInstructions[index]?.accounts[0];
          const sourceAta =
            sourceAccountIndex === undefined
              ? undefined
              : data.TransactionAccountskey[sourceAccountIndex];

          const recieverAccountIndex = data.InnerInstructions[index]?.accounts[0];
          const ReceiverAta =
            recieverAccountIndex === undefined
              ? undefined
              : data.TransactionAccountskey[recieverAccountIndex];

          const mintAccountIndex = data.InnerInstructions[index]?.accounts[0];
          const mintPubkey = 
            mintAccountIndex === undefined
              ? undefined
              : data.TransactionAccountskey[mintAccountIndex];

         

          Eventdata.push({
            sourceOwner:
              sourceAta === undefined ? undefined : ownersMap.get(sourceAta),
            sourceAta : sourceAta,
            mint:
            mintPubkey === undefined ? undefined : mintPubkey,
            recieverOwner:
              ReceiverAta === undefined ? undefined : ownersMap.get(ReceiverAta),
            recieverAta : ReceiverAta,
            programEventData : data.programData![index],
            slot:data.slot,
          })
          
        }

        const topicMessages: NonNullable<ProducerBatch["topicMessages"]> = [];
        const kafkaBatchEvent: ProducerBatch = { topicMessages };

        for (let index = 0; index < Eventdata.length; index++) {
          topicMessages.push({
            topic: KAFKA_TOPICS.TOKENTRANSFERDBINSERT,
            messages: [
              {
                value: JSON.stringify(Eventdata[index]),
              },
            ],
          });
        }

        await TokenTransferProducerDb(kafkaBatchEvent);


       
        // data.InnerInstructions.forEach((element) => {
        //   // TODO xcreate a fucntion for handlinfg the update
        //   element,
        //     slot: data.slot,
        //       transactionAccountsKeys: data.TransactionAccountskey
        // });
      } catch (error) {}
    },
  });
};
