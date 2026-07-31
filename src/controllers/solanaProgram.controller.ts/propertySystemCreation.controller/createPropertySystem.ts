import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";
import { propertySystemPda } from "../pda/propertySystem";
import { address } from "@solana/kit";

import * as anchor from "@coral-xyz/anchor"
import type { propertySystemAccountType } from "../../../types&interface/PdaTypes/propertySystem";
import type { PropertySystemAccount } from "../../../generated/prisma/client";
import { ConversionFunction } from "../miniConversionFunction";


export const handleCreatePropertySystem  = async (
  message:messageSchema,
  instruction :Instructions
) => {
  
  const pdakey = address(message.accountKeys.at(instruction.accounts[1]!)!);

  const propertySystemAccount   = await propertySystemPda(pdakey);



console.log(propertySystemAccount);
  
  

};
