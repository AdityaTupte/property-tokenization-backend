import { HeliusWebhookSchema } from "../schemaValidation/heliusWebhookDataSchema";
import { ApiResponse } from "../utils/ApiResponse";
import asyncHandler from "../utils/AsyncHandler";
import type { Request, Response } from "express";
import { ApiError } from "../utils/errors/ApiError";
import type { instructionsSchema } from "./findProgramIndex";
import { TokenTransferProducer } from "../kafka/Producers/TransferToken.Producer";

import {  tokenTransfereventDecoder } from "../idl.schema/SolanaProgramHelper/anchorIdlHelper";

import { decodeExecuteInstruction } from "../utils/tokenTransferHookInstrcution.util";
import { EXECUTE_DISCRIMINATOR, TRANSFER_HOOK_PROGRAM_ID } from "../constant";
import { combineInnerInstructionsWithEvents } from "../utils/solanaTokenTransferParser.util";
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

   const combineInnerInstructionWithEvents = combineInnerInstructionsWithEvents(
      webhookSchema.data,
      "AHecjWfQz5pmfdcYNLkP34S3FLeCz1SNNkS6xxCC8qSv",
      tokenTransfereventDecoder,   
    )

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

 const programData =  combineInnerInstructionWithEvents.filter(
    (ix) =>{

      if( ix.name == "TransferHook" &&  ix.data.discriminator == EXECUTE_DISCRIMINATOR){
        return true
      }

    }
  ).map(
    (ix) =>{

      return ix.data.event?.data!


    }
  )

  if(programData.length != matchingInnerInstructions.length){
    throw new ApiError(401,"length of programData does not match with matchingInnerInstructions length ")
  }
 

    await TokenTransferProducer({
      InnerInstructions:matchingInnerInstructions,
      slot:webhookSchema.data.transaction.slot,
      TransactionAccountskey:transaction.message.accountKeys,
      programData:programData,
      signature:webhookSchema.data.signature,
      blocktime:webhookSchema.data.transaction.blockTime,
    });

    return res.status(200).json(
      new ApiResponse(200, {
        message: "instruction Parse SuccessFully",
      })
    );


  }
);
