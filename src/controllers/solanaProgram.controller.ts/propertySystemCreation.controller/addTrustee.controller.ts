import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handleAddTrustee:InstructionHandler = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext
) => {

    const propertySystemAddress = address(message.accountKeys[instruction.accounts[1]!]!);

    const trustee_registry =  address(message.accountKeys[instruction.accounts[2]!]!);

    const newTrustee =  address(message.accountKeys[instruction.accounts[3]!]!);

     const trusteeRegistryaccount = await GenericPda(
        "trusteeRegistry",
        trustee_registry
      ) as PdaTypes.trusteeRegistryType
    
    
    const trusteeRegistiyAvailable = await prisma.trusteeRegistry.findFirst({
        where:{
            trustee_registry_pubkey :trustee_registry,
            property_system_key:{
                property_system_public_key:propertySystemAddress,
            }
        },    
    })

if(!trusteeRegistiyAvailable) throw new ApiError(404,"trusteeRegistry related to the property System Not found");


    let hasTrusteeCountChanged = (trusteeRegistiyAvailable.current_number_of_trustees === trusteeRegistryaccount.currentNumberOfTrustees )

    let hasTotalSalaryAllocatedChanged = (trusteeRegistiyAvailable.total_salary_allocated === BigInt(trusteeRegistryaccount.totalSalaryAllocated.toString()))

    let hasVoteThresholdChanged = (trusteeRegistiyAvailable.vote_threshold === trusteeRegistryaccount.voteThreshold)
    
    let hasClaimDeadlineChanged = false ;

    if(trusteeRegistryaccount.claimDeadlineTs.toNumber() !== 0){
    
   hasClaimDeadlineChanged  = (trusteeRegistiyAvailable.claim_deadline_ts ===new Date(trusteeRegistryaccount.claimDeadlineTs.toNumber() * 1000))

}

     ctx.add(async(tx) =>{
            
        await tx.trusteeRegistry.update({
            where:{
                trustee_registry_pubkey :trustee_registry,
            },
            data:{
                current_number_of_trustees:hasTrusteeCountChanged? trusteeRegistryaccount.currentNumberOfTrustees:undefined,
                total_salary_allocated:hasTotalSalaryAllocatedChanged?BigInt(trusteeRegistryaccount.totalSalaryAllocated.toString()):undefined,
                claim_deadline_ts: trusteeRegistryaccount.claimDeadlineTs.toNumber() !== 0
            ? new Date(trusteeRegistryaccount.claimDeadlineTs.toNumber() * 1000)
            : null,
                vote_threshold:hasVoteThresholdChanged?trusteeRegistryaccount.voteThreshold:undefined,
            }
        })
        

        await tx.trustees.create({
            data:{
                public_key:newTrustee,
                trustee_registry_pubkey:trustee_registry,
            }
        })


     })
}