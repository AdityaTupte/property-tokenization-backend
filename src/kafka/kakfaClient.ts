import { Kafka} from "kafkajs";

export const kafka = new Kafka({
    clientId: "my-backend",
    brokers: ["localhost:9092"],
})
