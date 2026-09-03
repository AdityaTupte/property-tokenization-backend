import { address } from "@solana/kit";
import type { instructionsSchema, messageSchema } from "../../../helius/findProgramIndex";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handleAddArbitrator:InstructionHandler = async(
    message:messageSchema,
    instruction:instructionsSchema,
    ctx:TransactionContext,
    _BlockTime:number,
) => {

    const propertySystemAddress = address(message.accountKeys[instruction.accounts[1]!]!);

    const arbitrator_registry =  address(message.accountKeys[instruction.accounts[3]!]!);

    const newarbitrar =  address(message.accountKeys[instruction.accounts[4]!]!);


    
    const arbitratorRegistiyAvailable = await prisma.arbitrarRegistry.findFirst({
        where:{
            arbitrar_registry_pubkey :arbitrator_registry,
            property_system_key:{
                property_system_public_key:propertySystemAddress,
            }
        },    
    })

if(!arbitratorRegistiyAvailable) throw new ApiError(404,"arbitrarRegistry related to the property System Not found");



     ctx.add(async(tx) =>{
            
        await tx.arbitrarRegistry.update({
            where:{
                arbitrar_registry_pubkey :arbitrator_registry,
            },
            data:{
                current_number_of_arbitrar:{increment:1},
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