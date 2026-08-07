import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
export const handleAddArbitrator = async(
    message:messageSchema,
    instruction:Instructions,
    ctx:TransactionContext
) => {

    const propertySystemAddress = address(message.accountKeys[instruction.accounts[1]!]!);

    const arbitrator_registry =  address(message.accountKeys[instruction.accounts[3]!]!);

    const newarbitrar =  address(message.accountKeys[instruction.accounts[4]!]!);

     const arbitratorRegistryaccount = await GenericPda(
        "arbitratorRegistry",
        arbitrator_registry
      ) as PdaTypes.arbitratorRegistryType
    
    
    const arbitratorRegistiyAvailable = await prisma.arbitrarRegistry.findFirst({
        where:{
            arbitrar_registry_pubkey :arbitrator_registry,
            property_system_key:{
                property_system_public_key:propertySystemAddress,
            }
        },    
    })

if(!arbitratorRegistiyAvailable) throw new ApiError(404,"arbitrarRegistry related to the property System Not found");


    let hasarbitratorCountChanged = (arbitratorRegistiyAvailable.current_number_of_arbitrar === arbitratorRegistryaccount.currentNumberOfArbitrators )

    let hasTotalSalaryAllocatedChanged = (arbitratorRegistiyAvailable.total_salary_allocated === BigInt(arbitratorRegistryaccount.totalSalaryAllocated.toString()))

    let hasVoteThresholdChanged = (arbitratorRegistiyAvailable.vote_threshold === arbitratorRegistryaccount.voteThreshold)
    
    let hasClaimDeadlineChanged = false ;

    if(arbitratorRegistryaccount.claimDeadlineTs.toNumber() !== 0){
    
   hasClaimDeadlineChanged  = (arbitratorRegistiyAvailable.claim_deadline_ts ===new Date(arbitratorRegistryaccount.claimDeadlineTs.toNumber() * 1000))

}

     ctx.add(async(tx) =>{
            
        await tx.arbitrarRegistry.update({
            where:{
                arbitrar_registry_pubkey :arbitrator_registry,
            },
            data:{
                current_number_of_arbitrar:hasarbitratorCountChanged? arbitratorRegistryaccount.currentNumberOfArbitrators:undefined,
                total_salary_allocated:hasTotalSalaryAllocatedChanged?BigInt(arbitratorRegistryaccount.totalSalaryAllocated.toString()):undefined,
                claim_deadline_ts: arbitratorRegistryaccount.claimDeadlineTs.toNumber() !== 0
            ? new Date(arbitratorRegistryaccount.claimDeadlineTs.toNumber() * 1000)
            : null,
                vote_threshold:hasVoteThresholdChanged?arbitratorRegistryaccount.voteThreshold:undefined,
            }
        })
        

        await tx.arbitrar.create({
            data:{
                public_key:newarbitrar,
                arbitrar_registry_pubkey:arbitrator_registry,
            }
        })


     })
}