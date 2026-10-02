import { kafka } from "../kakfaClient";
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import type { InstructionDataInterface } from "../../types&interface/instructionData.Interface";
import { VotesForProposalCache } from "../../Redis/RedisCache/votingForProposal.Cache";

import { eventDecoder } from "../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { VoteForProposalSchema } from "../../idl.schema/generated/VoteForProposal.schema";
export const kafkaVotingForProposalConsumerForRedisCache = async function () {
  const Consumer = kafka.consumer({
    groupId: "VotingForProposalConsumer",
  });

  await Consumer.connect();

  await Consumer.subscribe({
    topic: KAFKA_TOPICS.VOTINGFORPROPOSAL,
    // fromBeginning: true,
  });

  await Consumer.run({
    autoCommit: true,

    eachMessage: async ({ topic, heartbeat, message, partition, pause }) => {
      if (!message.value) {
        throw new Error("Message has no value");
      }

      try {
        const data: InstructionDataInterface = JSON.parse(
          message.value.toString()
        );

         const decodedEvent = eventDecoder.decode(data.log[0]?.events[0]?.raw!);
          // TODO:Change the Eveent in thge solanm proge VoteForProposalSchema
         const decodedData =VoteForProposalSchema.parse(decodedEvent?.data);

         await VotesForProposalCache.hsetnx(
            decodedData.proposal, {
          voterAddress:decodedData.voter,
          votingPower:decodedData.voting_power,
          Vote:decodedData.for_against,
         })
         
        // create redis stream for db update
        // const proposalKey = data.data.accountKeys[data.instruction.accounts[2]!]!.toString();
        // TODO: IMPLEMNET Redis Cache System
      } catch (error) {
        console.error("❌ Error processing Kafka message:", error);
      }
    },
  });
};

export const kafkaVotingForProposalConsumerDBOperations = async function () {
  const Consumer = kafka.consumer({
    groupId: "VotingForProposalConsumerDBOperations",
  });

  await Consumer.connect();

  await Consumer.subscribe({
    topic: KAFKA_TOPICS.VOTINGFORPROPOSAL,
    // fromBeginning: true,
  });

  await Consumer.run({
    autoCommit: true,
    eachMessage: async ({ topic,  heartbeat, message, partition, pause }) => {
      if (!message.value) {
        throw new Error("Message has no value");
      }

      try {
        const data: InstructionDataInterface = JSON.parse(
          message.value.toString()
        );

        const decodedEvent = eventDecoder.decode(data.log[0]?.events[0]?.raw!);

        const decodedData =VoteForProposalSchema.parse(decodedEvent?.data);

        
        
        // TODO: IMPLEMENT DB Operations
      } catch (error) {
        console.error("❌ Error processing Kafka message:", error);
      }
    },
  });
};
