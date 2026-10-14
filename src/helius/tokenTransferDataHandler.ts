import { HeliusWebhookSchema } from "../schemaValidation/heliusWebhookDataSchema";
import { ApiResponse } from "../utils/ApiResponse";
import asyncHandler from "../utils/AsyncHandler";
import type { Request,Response } from "express";
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
      throw new ApiError(400, "check your json schema",webhookSchema.error.issues);
    }





const transaction =
  webhookSchema.data.transaction.transaction;

const innerInstructionGroups =
  webhookSchema.data.transaction.meta.innerInstructions ?? [];

const matchingInnerInstructions = innerInstructionGroups.flatMap((group) => {
  return group.instructions.flatMap((ix) => {
    if (!ix.data) return [];

    // Resolve the instruction's program ID.
    const programId =
      transaction.message.accountKeys[ix.programIdIndex];

    if (programId !== TRANSFER_HOOK_PROGRAM_ID) {
      return [];
    }

    let discriminator: string;

    try {
      discriminator = decodeExecuteInstruction(ix.data);
    } catch {
      return [];
    }

    if (discriminator !== EXECUTE_DISCRIMINATOR) {
      return [];
    }

    return [
      {
        outerInstructionIndex: group.index,
        innerInstruction: ix,
      },
    ];
  });
});




//  const arr = webhookSchema.data.transaction.meta.innerInstructions?.filter( 
//         (element) =>{

//           if(element.instructions[0]?.data != undefined) {    

//           const discriminator = decodeExecuteInstruction(element.instructions[0]?.data);

//             if (
//                 webhookSchema.data.transaction.
//                 transaction.message.
//                 accountKeys[element.instructions[0]?.programIdIndex!]        
//                 ==
//                 "AHecjWfQz5pmfdcYNLkP34S3FLeCz1SNNkS6xxCC8qSv"

//                 && 

//                 discriminator == "692565c54bfb661a"

//             ){

//                 return webhookSchema.data.transaction.transaction.message.instructions[element.index]


//             }

//           }
//         }
//     )

  //   const TokenTransferInstructions: InstructionNameAndData[] = (arr ?? [])
  //     .map((ele) => {
  //   const instruction =
  //     webhookSchema.data.transaction.transaction.message
  //       .instructions[ele.index];

  //   if (!instruction) return undefined;
  // const ix = ele.instructions[0]?.data;


  //   return {
  //     name: "TransferToken",
  //     data: instruction,
  //   };
  // })
  // .filter(
  //   (
  //     instruction
  //   ): instruction is InstructionNameAndData =>
  //     instruction !== undefined
  // );



  const OtherInstructionOfTokenTransferExtension : instructionsSchema[]  = webhookSchema.data.transaction.transaction.message.instructions.filter(
        (element) =>{

      webhookSchema.data.transaction.
                transaction.message.
                accountKeys[element.programIdIndex]        
                ===
                "AHecjWfQz5pmfdcYNLkP34S3FLeCz1SNNkS6xxCC8qSv"
       
        }
  )
  

    // if( TokenTransferInstructions.length >= 1 ){

        


    //    await TokenTransferProducer(
    //        { 
    //         TransactionAccountskey:webhookSchema.data.transaction.transaction.message.accountKeys,
    //         blockTime:webhookSchema.data.transaction.blockTime,
    //         InstructionNameAndData:TokenTransferInstructions,        
    //     }

    //     )
        
    //     // kafak for token

    // }
    
    // if( OtherInstructionOfTokenTransferExtension.length >= 1 ){

    //     // kafak for OtherInstructionOfTokenTransferExtension

    // }


    return res.status(200).json(
      new ApiResponse(200, {
        message: "instruction Parse SuccessFully",
      })
    );
  }
);
