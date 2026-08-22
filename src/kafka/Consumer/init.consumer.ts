import { kafkaInstructionconsumer } from "./InstructionConsumer";


export const InitConsumer = async () => {
 
    await Promise.all([
        kafkaInstructionconsumer(),
        // KafkaNotifyConsumer(),
    ]);


    
}