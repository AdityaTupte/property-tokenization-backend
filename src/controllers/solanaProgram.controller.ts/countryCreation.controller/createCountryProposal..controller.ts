import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";

import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handleCreateCountryProposal:InstructionHandler = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext,
    BlockTime:number,
) => {

    const proposal = address(message.accountKeys[instruction.accounts[1]!]!)

    const proposalAccount  = await GenericPda("proposalCountryPda",proposal) as PdaTypes.countryProposalType 

    const countryBuffer =  Buffer.from(proposalAccount.countryName)

    const cleanCountryName = countryBuffer.toString().replace(/\0/g, '').trim();
        

    ctx.add( async(tx) =>{

        await tx.countryProposal.create({

            data:{
                proposal_public_key:proposal.toString(),
                total_authority:proposalAccount.totalAuthority,
                country_id:proposalAccount.countryId,
                country_pda_threshold:proposalAccount.countryPdaThreshold,
                approved:proposalAccount.approved,
                executed:proposalAccount.executed,
                proposal_bump:proposalAccount.bump,
                country_name:cleanCountryName,
                proposal_created_time:new Date(BlockTime)
            }

        })


    })



}