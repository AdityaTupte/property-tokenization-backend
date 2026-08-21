import { address } from "@solana/kit";
import type { instructionsSchema, messageSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";

export const handleAddAuthorityForCountry:InstructionHandler = async(
    message:messageSchema,
    instruction:instructionsSchema,
    ctx:TransactionContext,
    _BlockTime:number
) => {


    const countryPdaAddress  = address(message.accountKeys[instruction.accounts[4]!]!)

   

    const countryAuthority = (address(message.accountKeys[instruction.accounts[2]!]!)).toString()

    
    const countryPdaDb =  prisma.countryPda.findUnique({
        where:{
            country_public_key:countryPdaAddress.toString(),
        },
    })

    if(!countryPdaDb) throw new ApiError(404,"Countey Pda for adding the authority not avaliable in db")

    ctx.add(async (tx) =>{

       tx.countryAuthorityReceipt.upsert({
        where:{
            public_key:countryPdaAddress.toString(),
        },
        create:{
            public_key:countryPdaAddress.toString(),
            signer:[`${countryAuthority}`]
        },
        update:{
            signer:{
                push:`${countryAuthority}`
            }
        }
       })

    })



}