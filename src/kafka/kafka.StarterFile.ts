import { InitConsumer } from "./Consumer/init.consumer";
import { kafkaInit } from "./kafkaTopics";
import { producerInit } from "./Producers/producer";

    export const StartKafkaServer = async () => {
        await Promise.all([
                kafkaInit(),
                
                producerInit(),
                InitConsumer(),
            ]);  
    }