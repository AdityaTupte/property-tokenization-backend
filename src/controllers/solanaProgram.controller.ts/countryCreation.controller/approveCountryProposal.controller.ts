import { address } from "@solana/kit";
import type { instructionsSchema, messageSchema } from "../../../helius/findProgramIndex";

import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handleApproveCountryProposal:InstructionHandler = async(
    message:messageSchema,
    instruction:instructionsSchema,
    ctx:TransactionContext,
    _BlockTime:number,
) => {

    const proposal = address(message.accountKeys[instruction.accounts[0]!]!)

    // const proposalAccount : PdaTypes.countryProposalType = await GenericPda("proposalCountryPda",proposal) as PdaTypes.countryProposalType

   const CountryProposalApprovedFieldDb = await prisma.countryProposal.findUnique({
    where:{
        proposal_public_key:proposal.toString(),
   },
   select:{
    approved:true,
   }
})
    if(!CountryProposalApprovedFieldDb) throw new ApiError(404,"Country Proposal Not Found")

    const NotChanged = CountryProposalApprovedFieldDb.approved === proposalAccount.approved

    const signer  =  address(message.accountKeys[instruction.accounts[3]!]!)

    const receiptAddress  =  address(message.accountKeys[instruction.accounts[2]!]!)

    const receiptAccount= await GenericPda("approveCountryAuthorityReceipt",receiptAddress) as PdaTypes.approveCountryAuthorityReceiptType


    ctx.add( async(tx) =>{

        await tx.countryProposal.update({

            where:{
                proposal_public_key:proposal.toString(),
            },

             data:{   
                approved:NotChanged?undefined:proposalAccount.approved,
        }
    })

        await tx.approveCountryAuthorityReceipt.create({
            data:{
                proposal_key:proposal.toString(),
                signer:signer.toString(),
                bump:receiptAccount.bump,
            }
        })


    })



}