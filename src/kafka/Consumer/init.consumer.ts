import { kafkaInstructionconsumer } from "./InstructionConsumer";
import { kafkaVotingForProposalConsumerForRedisCache } from "./VotingForProposal.Consumer";


export const InitConsumer = async () => {
 
    await Promise.all([
        kafkaInstructionconsumer(),
        kafkaVotingForProposalConsumerForRedisCache(),
        // KafkaNotifyConsumer(),
    ]);


    
}