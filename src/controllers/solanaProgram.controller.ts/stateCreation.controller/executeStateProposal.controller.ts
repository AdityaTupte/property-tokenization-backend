import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";

import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";

export const handleExecuteStateProposal:InstructionHandler = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext,
    BlockTime:number
) => {

    const proposal = address(message.accountKeys[instruction.accounts[0]!]!)

    const proposalAccount = await GenericPda("proposalCountryPda",proposal) as PdaTypes.StateProposalType

    const StatePdaAddress  = address(message.accountKeys[instruction.accounts[3]!]!)

    const StateyPdaAccount = await  GenericPda("state",StatePdaAddress) as PdaTypes.countryPdaType

    const StateNameBuffer = Buffer.from(proposalAccount.stateName)

    const cleanStateName = StateNameBuffer.toString().replace(/\0/g, '').trim();

    const CountryPdaAddress  = address(message.accountKeys[instruction.accounts[1]!]!)




    ctx.add(async (tx) =>{

        tx.statePda.create({
            data:{
                state_public_key:StatePdaAddress.toString(),
                proposal_public_key:proposal.toString(),
                current_total_authority:0,
                state_id:proposalAccount.stateId,
                state_name:cleanStateName,
                state_total_authorities:StateyPdaAccount.totalAuthority,
                state_authority_threshold:StateyPdaAccount.threshold,
                country_pubkey:CountryPdaAddress.toString(),
                state_bump:StateyPdaAccount.bump,
                state_created_time:new Date(BlockTime)
            }
        })

        tx.stateProposal.update({
            where:{
                proposal_public_key:proposal.toString(),
            },
            data:{
                executed:proposalAccount.executed
            }
        })
    })



}