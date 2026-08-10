import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";

import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handleStateProposal:InstructionHandler = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext,
    BlockTime:number
) => {


    const proposalAddress = address(message.accountKeys[instruction.accounts[3]!]!);

    const country =  address(message.accountKeys[instruction.accounts[0]!]!);

    const signer =  address(message.accountKeys[instruction.accounts[1]!]!);


    const ProposalAccount = await GenericPda("stateProposalPda",proposalAddress) as PdaTypes.StateProposalType

    const CountryAccount = await GenericPda("country",country) as PdaTypes.countryPdaType

    const StateBuffer = Buffer.from(ProposalAccount.stateName)
    
    const stateName = StateBuffer.toString().replace(/\0/g, '').trim();


    ctx.add( async(tx)=>{

        tx.stateProposal.create({

            data:{
                proposal_public_key:signer.toString(),
                state_id:ProposalAccount.stateId,
                state_name:stateName,
                approved:ProposalAccount.approved,
                executed:ProposalAccount.executed,
                country_pubkey:country.toString(),
                proposal_bump:ProposalAccount.bump,
                state_total_authorities:ProposalAccount.stateTotalAuthorities,
                propsal_created_time: new Date(BlockTime)
            }
            
        })
    } )

    
    
    
   
}