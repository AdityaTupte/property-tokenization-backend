import { messageSchema } from "../schemaValidation/heliusWebhookDataSchema";
import z from "zod";
import { ApiError } from "../utils/ApiError";
import bs58 from "bs58";
import { InstructionRegistry } from "../idl/generated/instructionRegistry";
import { parse } from "node:path";

type Instructions = z.infer<typeof messageSchema>;

export const FindProgramIdIndex = (message: Instructions) => {
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


  encodedData.forEach(element => {
    
    const  bytes = bs58.decode(element.data);

    const discriminator = Buffer
                              .from(bytes.slice(0,8))
                              .toString("hex");

    const parser = InstructionRegistry.get(discriminator);
    
    if (!parser) {
    throw new Error("Unknown instruction");
}
      console.log(parser.name);
      

    // const args = bytes.slice(8);


  });
  
};
