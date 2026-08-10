import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";
import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handlerCreateAuthorityToApproveCountry:InstructionHandler = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext,
    _BlockTime:number,
) => {

    const AuthorityToApproveCountryAddress = address(message.accountKeys[instruction.accounts[1]!]!)

    const Account  = await GenericPda("approveCountryAuthority",AuthorityToApproveCountryAddress) as PdaTypes.CountryApproveAuthorityType 


    const authoritiesStringArray = Account.authority.map(pubKey => pubKey.toString());


    ctx.add( async(tx) =>{

        await tx.countryApprovalAuthority.upsert({

            where:{
                id:1
            },

           create:{
                id:1,
                authority:authoritiesStringArray,
                bump:Account.bump,
                threshold:Account.threshold,    
           },

           update:{
                authority:authoritiesStringArray
           }
        })


    })



}