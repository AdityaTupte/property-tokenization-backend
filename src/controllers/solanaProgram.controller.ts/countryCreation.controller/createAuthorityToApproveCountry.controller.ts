import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";
import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
export const handlerCreateAuthorityToApproveCountry = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext
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