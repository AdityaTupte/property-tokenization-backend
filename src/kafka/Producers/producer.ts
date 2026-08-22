import { kafka } from "../kakfaClient";

export const producer = kafka.producer();

export const producerInit = async () => {
    
    await producer.connect();

}

 