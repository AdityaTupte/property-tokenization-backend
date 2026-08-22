import type { InstructionDataInterface } from "../../types&interface/instructionData.Interface";
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import { producer } from "./producer";

export const instructionProducer = async (
    data: InstructionDataInterface
) => {

    await producer.send({
        topic: KAFKA_TOPICS.INSTRUCTION,
        messages: [
            {
                value: JSON.stringify(data),
            },
        ],
    });

    console.log("messsage produced");
};