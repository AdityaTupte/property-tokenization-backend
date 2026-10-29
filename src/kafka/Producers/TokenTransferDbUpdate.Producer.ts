import type { ProducerBatch } from "kafkajs";
import { producer } from "./producer";

 export const TokenTransferProducerDb = async (
    
    event : ProducerBatch 
    
) => {

    await producer.sendBatch(
        event
    )

    console.log("messsage produced");
};