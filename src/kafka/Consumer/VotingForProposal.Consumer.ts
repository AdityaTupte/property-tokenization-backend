import { kafka } from "../kakfaClient"
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import type { InstructionDataInterface } from "../../types&interface/instructionData.Interface";
import { VotesForProposalCache } from "../../Redis/RedisCache/votingForProposal.Cache";
import type { InstructionHandler } from "../../types&interface/solanaInstrcution&event.type";
import type { VotingDataType } from "../../types&interface/VotingDataType";

export const kafkaVotingForProposalConsumerForRedisCache = async function () {

     const Consumer = kafka.consumer({
       groupId:"VotingForProposalConsumer",
     })

     await Consumer.connect()

     await Consumer.subscribe({
         topic: KAFKA_TOPICS.VOTINGFORPROPOSAL,
         // fromBeginning: true,
     })

     await Consumer.run({
         autoCommit: true,  
        
         eachMessage: async ({
             topic,
             heartbeat,
             message,
             partition,
             pause,
         }) => {

                if (!message.value) {

                    throw new Error("Message has no value");

                }


                try {
                    
                    const data:VotingDataType = JSON.parse(message.value.toString());
                    

                    // TODO : IMPLEMENT FUCtion to give the proposalKey from the instruction data using instrcution name 
                    
                    // create redis stream for db update

                    // const proposalKey = data.data.accountKeys[data.instruction.accounts[2]!]!.toString();


                    
                    // TODO: IMPLEMNET Redis Cache System

         }
         catch (error) {
 
                 console.error(
                     "❌ Error processing Kafka message:",
                     error
                 );
             }
        }
        })

    }


export const kafkaVotingForProposalConsumerDBOperations = async function () {

        const Consumer = kafka.consumer({ 
            groupId:"VotingForProposalConsumerDBOperations",

         })

         await Consumer.connect()

         await Consumer.subscribe({
             topic: KAFKA_TOPICS.VOTINGFORPROPOSAL,
             // fromBeginning: true,
         })

            await Consumer.run({

                autoCommit: true,
                eachMessage: async ({
                    topic,
                    heartbeat, 
                    message,
                    partition,
                    pause,
                }) => {

                    if (!message.value) {

                        throw new Error("Message has no value");
                    }

                    try {

                        const data: InstructionDataInterface = JSON.parse(message.value.toString());

                        // TODO: IMPLEMENT DB Operations

                    }
                    
                    catch (error) {

                        console.error(
                            "❌ Error processing Kafka message:",
                            error
                        );
                    }

                }
            })


}