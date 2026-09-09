import { address } from "@solana/kit";
import type { instructionsSchema, messageSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";
// import { GenericPda } from "../../../utils/genericPda";


export const handleExecutedLand:InstructionHandler = async(
    message:messageSchema,
    instruction:instructionsSchema,
    ctx:TransactionContext,
    BlockTime:number,
    log:CompletedExecution[]
) => {

    const PropertyProposalAddress  = address(message.accountKeys[instruction.accounts[1]!]!)

    // const PropertyProposalPda = await GenericPda("propertyProposal",PropertyProposalAddress) as PdaTypes.PropertyProposalType

    const PropertyAccountAddress  = address(message.accountKeys[instruction.accounts[4]!]!)

    // const PropertyAccountPda = await GenericPda("propertyAccount",PropertyAccountAddress) as PdaTypes.PropertyAccountType

    // const doc_hash = Buffer.from(PropertyProposalPda.legalDocHash).toString('hex')

    const PropertyProposalDb = await prisma.property.findUnique({
        where:{
          proposal_pubkey: PropertyProposalAddress.toString(),
        },
        select:{
            property_system_pubkey:true
        }
    })

    if(!PropertyProposalDb) throw new ApiError(409,"PropertyProposal Not Found")


    ctx.add(async (tx) =>{

        tx.property.update({

            where:{
                proposal_pubkey:PropertyProposalAddress.toString(),
            },
            data:{
                executed:true, 
                propertyKey:PropertyAccountAddress.toString(),

                history_of_owner:{
                    set:[`${PropertyProposalDb.property_system_pubkey}`]
                },
                issued_at:new Date(BlockTime),
            }

        })

        // tx.property.update({

        //     where:{

        //     }

        //     data:{
        //         property_id:PropertyProposalDb?.property_id,
        //         propertyKey:PropertyAccountAddress.toString(),
        //         // is_leased,
        //         // history_of_owner:{
        //         //     set:[`${PropertyAccountPda.propertySystem.toString}`]
        //         // },
        //         // country_pubkey:PropertyAccountPda.countryPubkey.toString(),
        //         issued_at:new Date(BlockTime),
        //     }
        // })
        
        // tx.propertyMetdata.create({
        //     data:{
        //         propertySystem:PropertyAccountAddress.toString(),
        //         legalDocURI:doc_hash,
        //         MetadataLastUpdated:new Date(BlockTime),
        //     }
        // })


    })




}