import { address } from "@solana/kit";
import type { instructionsSchema, messageSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { decoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { create_property_proposalSchema } from "../../../idl.schema/generated/create_property_proposal.schema";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";
// import { GenericPda } from "../../../utils/genericPda";


export const handleCreateProperty:InstructionHandler = async(
    message:messageSchema,
    instruction:instructionsSchema,
    ctx:TransactionContext,
    _BlockTime:number,
    log:CompletedExecution
) => {

    const PropertyProposalAddress  = address(message.accountKeys[instruction.accounts[4]!]!)

    const bytes = Buffer.from(bs58.decode(instruction.data))

    const decodedData = decoder.decode(bytes)

    const argument = create_property_proposalSchema.parse(decodedData)


    const stateAddress = address(message.accountKeys[instruction.accounts[1]!]!)

    const signer = address(message.accountKeys[instruction.accounts[2]!]!)

    const propertySystem_pukey = address(message.accountKeys[instruction.accounts[0]!]!)

  

    ctx.add(async (tx) =>{

        tx.property.create({
            data:{
                property_id:argument.property_id,
                property_system_pubkey:propertySystem_pukey.toString(),
                state_pubkey:stateAddress.toString(),
                legalDocURI:argument.legal_doc_hash,
                issued_by:signer.toString(),
                approved:false,
                executed:false,
                proposal_pubkey:PropertyProposalAddress.toString(),
            } 
            
        })


    })




}