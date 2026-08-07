import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";

import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";

export const handleExecuteCountryProposal = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext
) => {

    const proposal = address(message.accountKeys[instruction.accounts[0]!]!)

    const proposalAccount = await GenericPda("proposalCountryPda",proposal) as PdaTypes.countryProposalType

    const countryPdaAddress  = address(message.accountKeys[instruction.accounts[2]!]!)

    const countryPdaAccount = await  GenericPda("country",countryPdaAddress) as PdaTypes.countryPdaType

    const countryNameBuffer = Buffer.from(proposalAccount.countryName)


    ctx.add(async (tx) =>{

        await tx.countryProposal.update({
            where:{
                proposal_public_key:proposal.toString(),
            },
            data:{
                executed:true,
            }

        })

        await tx.countryPda.create({
            data:{
                proposal_public_key:proposal.toString(),
                country_public_key:countryPdaAddress.toString(),
                country_id:countryPdaAccount.countryId,
                country_bump:countryPdaAccount.bump,
                country_pda_threshold:countryPdaAccount.threshold,
                current_total_authority:0,
                total_authority:countryPdaAccount.totalAuthority,
                country_name:countryNameBuffer.toString()
            }
        })




    })



}