import instructionsSchema, { messageSchema } from "../schemaValidation/heliusWebhookDataSchema";
import z from "zod";
import { ApiError } from "../utils/ApiError";
import bs58 from "bs58";
import { InstructionRegistry } from "../idl.schema/generated/instructionRegistry";
import { solanaInstructionHandler } from "./instructionHandlerForSolanaProgram";
import type { TransactionContext } from "../utils/solanaDbHandler";
import { instructionProducer } from "../kafka/producer";
import type { InstructionNameAndData } from "../types&interface/instructionData.Interface";



export type messageSchema = z.infer<typeof messageSchema>;
export type instructionsSchema = z.infer<typeof instructionsSchema>;

export const FindProgramIdIndex = async (message: messageSchema,ctx:TransactionContext,BlockTime:number) => {
  const uniqueProgramIdIndex = [
    ...new Set(
      message.instructions.map((instruction) => instruction.programIdIndex)
    ),
  ];

  const programIndex = uniqueProgramIdIndex.find(
    (index: number) =>
      message.accountKeys.at(index) ==
      "BYtpqEouT7FFDUFjFeE2ecSDwf1VHNNHUkc2URswVZ4B"
  );

  if (!programIndex) {
    throw new ApiError(404, "Program ID not found in transaction");
  }

  const encodedData = message.instructions.filter(
    (element) => element.programIdIndex == programIndex
  );

  if (encodedData.length === 0) {
  throw new ApiError(404, "Program instruction not found in transaction");
}

  const event: InstructionNameAndData[] = []


  for (const element of encodedData) {
  const bytes = bs58.decode(element.data);

  const discriminator = Buffer
    .from(bytes.slice(0, 8))
    .toString("hex");

  const parser = InstructionRegistry.get(discriminator);

  if (!parser) {
    throw new ApiError(400, "Unknown instruction");
  }
  const name = parser.name
  const ele :instructionsSchema = element
  event.push({name:name,data:ele})
  

  // const decode =  solanaInstructionHandler(parser.name);


  // await decode(message, element,ctx,BlockTime);

}

await instructionProducer({transaction:message,InstructionNameAndData:event,blockTime:BlockTime});

  
};
