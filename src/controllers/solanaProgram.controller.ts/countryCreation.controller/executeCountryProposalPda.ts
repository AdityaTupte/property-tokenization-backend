import { address } from "@solana/kit";
import type { instructionsSchema, messageSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { decoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { execute_country_propsalSchema } from "../../../idl.schema/generated/execute_country_propsal.schema";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";

export const handleExecuteCountryProposal:InstructionHandler = async(
    message:messageSchema,
    instruction:instructionsSchema,
    ctx:TransactionContext,
    BlockTime:number,
) => {

    const proposal = address(message.accountKeys[instruction.accounts[0]!]!)

    const bytes = Buffer.from(bs58.decode(instruction.data));
    
    const decodedData = decoder.decode(bytes)
    
    const argument = execute_country_propsalSchema.parse(decodedData?.data)


    const countryProposalDb = await prisma.countryProposal.findUnique({
        where:{
            proposal_public_key:proposal.toString(),
        },
        select:{
            country_name:true,
            country_id:true,
            country_pda_threshold:true,
            total_authority:true,
            approved:true,
        }
    })

    if(!countryProposalDb) throw new ApiError(400,"countryProposal not found")

    if(countryProposalDb.approved == false) throw new ApiError(409, "Country proposal is not approved")

    const countryPdaAddress  = address(message.accountKeys[instruction.accounts[2]!]!)

    

    ctx.add(async (tx) =>{

        await tx.countryProposal.update({
            where:{
                proposal_public_key:proposal.toString(),
            },
            data:{
                executed:true,
            }

        })

        await tx.countryPda.create({
            data:{
                proposal_public_key:proposal.toString(),
                country_public_key:countryPdaAddress.toString(),
                country_id:countryProposalDb.country_id,
                country_pda_threshold:countryProposalDb.country_pda_threshold,
                current_total_authority:0,
                total_authority:countryProposalDb.total_authority,
                country_name:countryProposalDb.country_name
            }
        })




    })



}