import { address } from "@solana/kit";
import type { instructionsSchema, messageSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { GenericPda } from "../../../utils/genericPda";
import { tr } from "zod/locales";


export const handleApproveLand:InstructionHandler = async(
    message:messageSchema,
    instruction:instructionsSchema,
    ctx:TransactionContext,
    _BlockTime:number
) => {

    const PropertyProposalAddress  = address(message.accountKeys[instruction.accounts[1]!]!)

    const PropertyProposalPda = await GenericPda("propertyProposal",PropertyProposalAddress) as PdaTypes.PropertyProposalType

    const signer = address(message.accountKeys[instruction.accounts[2]!]!).toString()


    const isApproved =  PropertyProposalPda.approved === true



    ctx.add(async (tx) =>{

        tx.propertyProposal.update({
            where:{
                proposal_property_pubkey:PropertyProposalAddress.toString(),
            },
            data:{
                approval_count:{
                    push:`${signer}`
                },
                approved:isApproved?true:undefined
            }
            
        })


    })




}