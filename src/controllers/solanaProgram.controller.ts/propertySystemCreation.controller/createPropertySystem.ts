import z from "zod";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { create_property_systemSchema } from "../../../idl.schema/generated/create_property_system.schema";
import { decoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { ApiError } from "../../../utils/ApiError";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";
import { propertySystemPda } from "../pda/propertySystem";
import { address } from "@solana/kit";
import { ConversionFunction } from "../miniConversionFunction";

type CreatePropertySystemType = z.infer<typeof create_property_systemSchema>;

export const handleCreatePropertySystem  = async (
  message:messageSchema,
  instruction :Instructions
) => {
  
  const pdakey = address(message.accountKeys.at(instruction.accounts[1]!)!);

  const propertySystemAccount = await propertySystemPda(pdakey);

  // const ConvertedPda = ConversionFunction(propertySystemAccount)

  // pro
  // console.log(ConvertedPda);
  
  
  //data db call 

};
