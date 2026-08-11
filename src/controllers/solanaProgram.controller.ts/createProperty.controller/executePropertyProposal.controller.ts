import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { GenericPda } from "../../../utils/genericPda";


export const handleExecutedLand:InstructionHandler = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext,
    BlockTime:number
) => {

    const PropertyProposalAddress  = address(message.accountKeys[instruction.accounts[1]!]!)

    const PropertyProposalPda = await GenericPda("propertyProposal",PropertyProposalAddress) as PdaTypes.PropertyProposalType

    const PropertyAccountAddress  = address(message.accountKeys[instruction.accounts[4]!]!)

    const PropertyAccountPda = await GenericPda("propertyAccount",PropertyAccountAddress) as PdaTypes.PropertyAccountType

    const doc_hash = Buffer.from(PropertyProposalPda.legalDocHash).toString('hex')



    ctx.add(async (tx) =>{

        tx.propertyProposal.update({

            where:{
                proposal_property_pubkey:PropertyProposalAddress.toString(),
            },
            data:{
                executed:true, 
            }

        })

        tx.propertyAccount.create({
            data:{
                property_id:PropertyAccountPda.propertyId.toNumber(),
                property_public_key:PropertyAccountAddress.toString(),
                is_leased:PropertyAccountPda.isLeased,
                property_system:PropertyAccountPda.propertySystem.toString(),
                history_of_owner:{
                    set:[`${PropertyAccountPda.propertySystem.toString}`]
                },
                state_pubkey:PropertyAccountPda.statePubkey.toString(),
                country_pubkey:PropertyAccountPda.countryPubkey.toString(),
                issued_at:new Date(PropertyAccountPda.issuedAt.toNumber()),
                issued_by:PropertyAccountPda.issuedBy.toString(),
                metadata:PropertyAccountPda.metadata.toString(),
                bump:PropertyAccountPda.bump
            }
        })
        
        tx.propertyMetdata.create({
            data:{
                propertySystem:PropertyAccountAddress.toString(),
                legalDocURI:doc_hash,
                MetadataLastUpdated:new Date(BlockTime),
            }
        })


    })




}