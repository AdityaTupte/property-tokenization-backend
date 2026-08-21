import type { messageSchema,} from "../helius/findProgramIndex";
import type { InstructionDataInterface, InstructionNameAndData } from "../types&interface/instructionData.Interface";
import { producer } from "./kafkaserver";

export const instructionProducer = async (
   data :InstructionDataInterface
) => {
  

  await producer.send({
    topic: "Instruction",
    messages: [{ value: JSON.stringify(data) }],
  });
};
