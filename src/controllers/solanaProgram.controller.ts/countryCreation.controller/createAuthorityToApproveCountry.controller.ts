import { address } from "@solana/kit";
import type { instructionsSchema, messageSchema } from "../../../helius/findProgramIndex";
import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { decoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { create_approve_country_authoritySchema } from "../../../idl.schema/generated/create_approve_country_authority.schema";
export const handlerCreateAuthorityToApproveCountry:InstructionHandler = async(
    message:messageSchema,
    instruction:instructionsSchema,
    ctx:TransactionContext,
    _BlockTime:number,
) => {

    const AuthorityToApproveCountryAddress = address(message.accountKeys[instruction.accounts[1]!]!)

    const Account  = await GenericPda("approveCountryAuthority",AuthorityToApproveCountryAddress) as PdaTypes.CountryApproveAuthorityType 

    const bytes = Buffer.from(bs58.decode(instruction.data));
      
    const decodedData = decoder.decode(bytes)
    
    const argument = create_approve_country_authoritySchema.parse(decodedData); 

    const authoritiesStringArray = argument.authority.map((ele:any) => ele.toString());


    ctx.add( async(tx) =>{

        await tx.countryApprovalAuthority.upsert({

            where:{
                id:1
            },

           create:{
                id:1,
                authority:authoritiesStringArray,
                threshold:Account.threshold,    
           },

           update:{
                authority:authoritiesStringArray
           }
        })


    })



}