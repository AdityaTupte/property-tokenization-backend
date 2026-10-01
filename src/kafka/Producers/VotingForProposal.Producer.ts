import type { messageSchema } from "../../helius/findProgramIndex";
import type { InstructionNameAndData } from "../../types&interface/instructionData.Interface";
import type { CompletedExecution } from "../../types&interface/solanaLogParser.interface";
import type { TransactionContext } from "../../utils/solanaDbHandler";
import { KAFKA_TOPICS } from "../kafka.TopicsNames";
import { producer } from "./producer";

export const VotingForProposalInstructionProducer = async (
      message: messageSchema,
      InstructionNameAndData: InstructionNameAndData,
      ctx: TransactionContext,
      BlockTime: number,
      meta: CompletedExecution
) => {

    await producer.send({
        topic: KAFKA_TOPICS.VOTINGFORPROPOSAL,
        messages: [
            {
                value: JSON.stringify({message, InstructionNameAndData, ctx, BlockTime, meta}),
            },
        ],
    });

    console.log("messsage produced");
};