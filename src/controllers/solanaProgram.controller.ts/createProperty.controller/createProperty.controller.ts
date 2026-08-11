import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { GenericPda } from "../../../utils/genericPda";


export const handleCreateProperty:InstructionHandler = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext,
    _BlockTime:number
) => {

    const PropertyProposalAddress  = address(message.accountKeys[instruction.accounts[4]!]!)

    const PropertyProposalPda = await GenericPda("propertyProposal",PropertyProposalAddress) as PdaTypes.PropertyProposalType

    const stateAddress = address(message.accountKeys[instruction.accounts[1]!]!)

    const signer = address(message.accountKeys[instruction.accounts[2]!]!)

    const propertySystem_pukey = address(message.accountKeys[instruction.accounts[0]!]!)

    const doc_hash = Buffer.from(PropertyProposalPda.legalDocHash).toString('hex')

    ctx.add(async (tx) =>{

        tx.propertyProposal.create({
            data:{
                property_id:PropertyProposalPda.propertyId.toNumber(),
                property_system_pubkey:propertySystem_pukey.toString(),
                state_pubkey:stateAddress.toString(),
                legal_doc_hash:doc_hash,
                issued_by:signer.toString(),
                approved:PropertyProposalPda.approved,
                executed:PropertyProposalPda.executed,
                bump:PropertyProposalPda.bump,
                proposal_property_pubkey:PropertyProposalAddress
            } 
            
        })


    })




}