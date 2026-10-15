import { HeliusWebhookSchema } from "../schemaValidation/heliusWebhookDataSchema";
import { ApiResponse } from "../utils/ApiResponse";
import asyncHandler from "../utils/AsyncHandler";
import type { Request, Response } from "express";
import { ApiError } from "../utils/errors/ApiError";
import { prisma } from "../prismaclient";
import type { instructionsSchema } from "./findProgramIndex";
import { TokenTransferProducer } from "../kafka/Producers/TransferToken.Producer";
import type { InstructionNameAndData } from "../types&interface/instructionData.Interface";
import { tokenTransferDecoder } from "../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { base64, bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import idl from "../idl.schema/SolanaProgramHelper/transfer_hook.json";
import { decodeExecuteInstruction } from "../utils/tokenTransferHookInstrcution.util";
import { EXECUTE_DISCRIMINATOR, TRANSFER_HOOK_PROGRAM_ID } from "../constant";
export const tokenTransferDataHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const webhookSchema = HeliusWebhookSchema.safeParse(req.body);

    if (!webhookSchema.success) {
      throw new ApiError(
        400,
        "check your json schema",
        webhookSchema.error.issues
      );
    }

    const transaction = webhookSchema.data.transaction.transaction;

    const innerInstructionGroups =
      webhookSchema.data.transaction.meta.innerInstructions ?? [];

const matchingInnerInstructions: instructionsSchema[] =
  innerInstructionGroups.flatMap((group) =>
    group.instructions.filter((ix) => {
      if (!ix.data) return false;

      const programId =
        transaction.message.accountKeys[ix.programIdIndex];

      if (programId !== TRANSFER_HOOK_PROGRAM_ID) {
        return false;
      }

      try {
        return (
          decodeExecuteInstruction(ix.data) ===
          EXECUTE_DISCRIMINATOR
        );
      } catch {
        return false;
      }
    })
  );




    await TokenTransferProducer({
      InnerInstructions:matchingInnerInstructions,
      slot:webhookSchema.data.transaction.slot,
      TransactionAccountskey:transaction.message.accountKeys
    });

    return res.status(200).json(
      new ApiResponse(200, {
        message: "instruction Parse SuccessFully",
      })
    );
  }
);
