import { BN } from "bn.js";
import { program } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { prisma } from "../../../prismaclient";

import { NotFoundError } from "../../../utils/errors/AppErrors/NotFoundError";


import {
  PublicKey,
  TransactionInstruction,  
} from "@solana/web3.js";



export const SubmitSellProposalSolanaFuctionHandler = async (
    proposalKey:string , 
) : Promise<TransactionInstruction> =>{


    const proposalData = await prisma.propertySellProposal.findFirst({
        where:{
            proposal_key:proposalKey,
        },
        select:{
            transfer_deadline:true,
            proposal_id:true,
            proposal:{
                select:{
                    GapBetweenDays:true,
                    property_system:true,
                    merkle_root:true,
                    vote_threshold:true
                }
            }
        }
    })


    if(!proposalData?.transfer_deadline){

        throw new NotFoundError(proposalKey,"proposal data not found");

    }

    

    const now = new Date();

    const diffMs = proposalData.transfer_deadline.getTime() - now.getTime();

    const transfer_deadline_in_days = Math.floor(
    diffMs / (1000 * 60 * 60 * 24)
    );

   


    const tx =  program.methods.submitSnapshotForSellProposal(
        new PublicKey(proposalData?.proposal.property_system),
        new BN(proposalData.proposal_id),
        Array.from(proposalData.proposal?.merkle_root!),
        proposalData.proposal.GapBetweenDays?,
        transfer_deadline_in_days,
        new BN( proposalData.proposal.vote_threshold!)
        ).instruction();

    return tx;


}