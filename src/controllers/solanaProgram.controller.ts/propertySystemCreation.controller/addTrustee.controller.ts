import { address } from "@solana/kit";
import type { Instructions, messageSchema } from "../../../helius/findProgramIndex";
import { prisma } from "../../../prismaclient";
import { error } from "node:console";
import { ApiError } from "../../../utils/ApiError";
import { GenericPda } from "../../../utils/genericPda";

import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
export const handleAddTrustee = async(
    message:messageSchema,
    instruction:Instructions
) => {


    const propertySystemAddress = address(message.accountKeys[instruction.accounts[1]!]!);

    const authority =  address(message.accountKeys[instruction.accounts[0]!]!);

    const trustee_registry =  address(message.accountKeys[instruction.accounts[2]!]!);

    const newTrustee =  address(message.accountKeys[instruction.accounts[3]!]!);

     const trusteeRegistryaccount:PdaTypes.trusteeRegistry  = await GenericPda(
        "trusteeRegistry",
        trustee_registry
      ) as PdaTypes.trusteeRegistry
    

    // check that the trusteeRegistry is created or not 
    // if not throw error 
    // add to the trustee table
    
    const trusteeRegistiyAvailable = await prisma.trusteeRegistry.findFirst({
        where:{
            trustee_registry_pubkey :trustee_registry,
            property_system_key:{
                property_system_public_key:propertySystemAddress,
            }
        },    
    })

if(!trusteeRegistiyAvailable) throw new ApiError(404,"trusteeRegistry realted to the property System Not found");

     await prisma.$transaction(async(tx) =>{

        await tx.trusteeRegistry.update({
            where:{
                trustee_registry_pubkey :trustee_registry,
            },
            data:{
                current_number_of_trustees:trusteeRegistiyAvailable.current_number_of_trustees,
                total_salary_allocated:trusteeRegistiyAvailable.total_salary_allocated,
                claim_deadline_ts:trusteeRegistiyAvailable.claim_deadline_ts,
                vote_threshold:trusteeRegistiyAvailable.vote_threshold,
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