import { messageSchema } from "../schemaValidation/heliusWebhookDataSchema";
import z from "zod";
import { ApiError } from "../utils/ApiError";
type Instructions = z.infer<typeof messageSchema>;
export const FindProgramIdIndex = (message: Instructions) => {
  const uniqurProgramIdIndex = [
    ...new Set(
      message.instructions.map((instruction) => instruction.programIdIndex)
    ),
  ];

  const programIndex = [0, 20, 1].filter(
    (index: number) =>
      message.accountKeys.at(index) ==
      "BYtpqEouT7FFDUFjFeE2ecSDwf1VHNNHUkc2URswVZ4B"
  );

  if (programIndex.length === 0) {
    throw new ApiError(404, "Program ID not found in transaction");
  }

  console.log("programIndex :", programIndex);
};
