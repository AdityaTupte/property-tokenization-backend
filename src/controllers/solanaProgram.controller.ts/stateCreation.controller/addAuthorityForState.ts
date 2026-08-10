import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";

export const handleAddAuthorityForState:InstructionHandler = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext,
    _BlockTime:number
) => {


    const StatePdaAddress  = address(message.accountKeys[instruction.accounts[4]!]!)

    const StateAuthority = (address(message.accountKeys[instruction.accounts[2]!]!)).toString()

    
    const StatePdaDb =  prisma.statePda.findUnique({
        where:{
            state_public_key:StatePdaAddress.toString(),
        },
    })

    if(!StatePdaDb) throw new ApiError(404,"Countey Pda for adding the authority not avaliable in db")

    ctx.add(async (tx) =>{

       tx.stateAuthorityReceipt.upsert({
        where:{
            public_key:StatePdaAddress.toString(),
        },
        create:{
            public_key:StatePdaAddress.toString(),
            signer:[`${StateAuthority}`],
        },
        update:{
            signer:{
                push:`${StateAuthority}`
            }
        }
       })

    })



}