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
export const tokenTransferDataHandler = asyncHandler(
  async (req: Request, res: Response) => {

   
    

    const webhookSchema = HeliusWebhookSchema.safeParse(req.body);

  
    if (!webhookSchema.success) {
      throw new ApiError(400, "check your json schema",webhookSchema.error.issues);
    }

  //  const signature = await prisma.signature.findFirst({
  //       where: {
  //         signature: webhookSchema.data.signature,
  //       },
  //     });
  
  //     if (signature)
  //       throw new ApiError(
  //         400,
  //         "Since the signature is already provided, signature parsing is not required."
  //       );

 const arr = webhookSchema.data.transaction.meta.innerInstructions?.filter( 
        (element) =>{

            if (
                webhookSchema.data.transaction.
                transaction.message.
                accountKeys[element.instructions[0]?.programIdIndex!]        
                ==
                "AHecjWfQz5pmfdcYNLkP34S3FLeCz1SNNkS6xxCC8qSv"
            ){

                return webhookSchema.data.transaction.transaction.message.instructions[element.index]


            }
        }
    )

    const TokenTransferInstructions: InstructionNameAndData[] = (arr ?? [])
      .map((ele) => {
    const instruction =
      webhookSchema.data.transaction.transaction.message
        .instructions[ele.index];

    if (!instruction) return undefined;
  const ix = ele.instructions[0]?.data;


// const discriminator = instructionData.subarray(0, 8);
// const matchedInstruction = (idl as any).instructions.find(
//   (ix: any) =>
//     Buffer.from(ix.discriminator).equals(discriminator)
// );

// console.log("Matched instruction:", matchedInstruction?.name);

   console.log("DATA OF TOKEN TRANSFER =>>>>>>>>>>>>>",data);

    return {
      name: "TransferToken",
      data: instruction,
    };
  })
  .filter(
    (
      instruction
    ): instruction is InstructionNameAndData =>
      instruction !== undefined
  );

console.log("sfdahi");


    const OtherInstructionOfTokenTransferExtension : instructionsSchema[]  = webhookSchema.data.transaction.transaction.message.instructions.filter(
        (element) =>{

      webhookSchema.data.transaction.
                transaction.message.
                accountKeys[element.programIdIndex]        
                ===
                "AHecjWfQz5pmfdcYNLkP34S3FLeCz1SNNkS6xxCC8qSv"
       
        }
    )
  

if(TokenTransferInstructions.length <  1 && OtherInstructionOfTokenTransferExtension.length < 1 ){

    throw new ApiError(400,"no any instrcution found")

}


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
