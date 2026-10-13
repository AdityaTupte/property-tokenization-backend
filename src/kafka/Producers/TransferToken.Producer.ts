import type { InstructionDataInterface } from "../../types&interface/instructionData.Interface";
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import { producer } from "./producer";

export const TokenTransferProducer = async (
    data: Pick<InstructionDataInterface,"TransactionAccountskey" | "InstructionNameAndData" | "blockTime">
) => {

    await producer.send({
        topic: KAFKA_TOPICS.TOKENTRANSFER,
        messages: [
            {
                value: JSON.stringify(data),
            },
        ],
    });

    console.log("messsage produced");
};