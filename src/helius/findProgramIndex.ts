import instructionsSchema, { messageSchema } from "../schemaValidation/heliusWebhookDataSchema";
import z from "zod";
import { ApiError } from "../utils/ApiError";
import bs58 from "bs58";
import { InstructionRegistry } from "../idl.schema/generated/instructionRegistry";
import { parse } from "node:path";
import { solanaInstructionHandler } from "./instructionHandlerForSolanaProgram";

export type messageSchema = z.infer<typeof messageSchema>;
export type Instructions = z.infer<typeof instructionsSchema>;

export const FindProgramIdIndex = (message: messageSchema) => {
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


  encodedData.forEach((element :Instructions) => {
    
    const  bytes = bs58.decode(element.data);

    const discriminator = Buffer
                              .from(bytes.slice(0,8))
                              .toString("hex");

    const parser = InstructionRegistry.get(discriminator);
    
    if (!parser) {
    throw new Error("Unknown instruction");
}
    const decode = solanaInstructionHandler(parser.name);


    decode(message,element);

  });
  
};
