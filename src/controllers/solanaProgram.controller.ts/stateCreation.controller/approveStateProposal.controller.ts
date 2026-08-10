import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";

import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handleApproveStateProposal:InstructionHandler = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext,
    _BlockTime:number
) => {

    const proposal = address(message.accountKeys[instruction.accounts[0]!]!)

    const proposalAccount : PdaTypes.countryProposalType = await GenericPda("proposalCountryPda",proposal) as PdaTypes.countryProposalType

   const StateProposalApprovedFieldDb = await prisma.stateProposal.findUnique({
    where:{
        proposal_public_key:proposal.toString(),
   },
   select:{
    approved:true,
   }
})
    if(!StateProposalApprovedFieldDb) throw new ApiError(404,"State Proposal Not Found")

    const NotChanged = StateProposalApprovedFieldDb.approved === proposalAccount.approved

    const signer  =  address(message.accountKeys[instruction.accounts[2]!]!)

    const receiptAddress  =  address(message.accountKeys[instruction.accounts[4]!]!)

    const receiptAccount= await GenericPda("stateProposalAprroveReceipt",receiptAddress) as PdaTypes.approveStateAuthorityReceiptType


    ctx.add(async (tx) => {


        tx.stateProposal.update({
            where:{
                proposal_public_key:proposal.toString()
            },

            data:{
                approved: NotChanged?undefined:proposalAccount.approved
            }
        })


        tx.approveStateAuthorityReceipt.create({
            data:{
                signer:signer,
                bump:receiptAccount.bump,
                proposal_key:proposal.toString(),
                // approval_time:
            }
        })


    })


}