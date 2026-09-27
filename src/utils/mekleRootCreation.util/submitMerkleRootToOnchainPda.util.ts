
import { prisma } from "../../prismaclient";
import type { SnapshotRequestedType } from "../../Redis/consumer/snapshotRequestedQueue.consumer";

import {
  PublicKey,
  
} from "@solana/web3.js";
import { program } from "../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { BN } from "bn.js";
import { NotFoundError } from "../errors/AppErrors/NotFoundError";
import { ConflictError } from "../errors/AppErrors/ConfictError";
export const submitMerkleRootToOnchainPda = async (
    event:SnapshotRequestedType
) => {
    
   

    const proposalData = await prisma.proposals.findFirst({
    where:{
        proposal_key:event.proposal_key
    },
    select:{
        deleted:true,
        property_system:true,
    }
    })
    
    if(!proposalData){

        throw new NotFoundError("proposal key not found in database",event.proposal_key)

    }

    if(proposalData?.deleted == true) throw new ConflictError("proposal is deleted")

    
    const merkleRoot = await prisma.merkleRoot.findFirst({
        where:{
            slot:event.slot.toString(),
            mint:event.mint
        }
    })


     if(!merkleRoot){

        throw new NotFoundError("merkle Root not found in database at this slot ",event.slot.toString())

    }
  

    const tx = await program.methods.submitSnapshotForSellProposal(
      new PublicKey(proposalData!.property_system),
      new BN(event.proposal_id),
      Array.from(Buffer.from(merkleRoot!.merkleRoot, "hex")),
      2,
      20,
      new BN(500)
    ).instruction();

    



}