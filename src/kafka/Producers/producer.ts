import { kafka } from "../kakfaClient";

export const producer = kafka.producer({});

export const producerInit = async () => {
    
    await producer.connect();

}

export const instTxProducer = kafka.producer({
  transactionalId: 'Instruction-transaction-producer',
  maxInFlightRequests: 1,
  idempotent: true
})

 