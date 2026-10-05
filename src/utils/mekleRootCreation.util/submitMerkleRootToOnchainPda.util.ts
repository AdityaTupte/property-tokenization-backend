
import { prisma } from "../../prismaclient";
import type { SnapshotRequestedType } from "../../Redis/RedisJobQueue/consumer/snapshotRequestedQueue.consumer";
import { NotFoundError } from "../errors/AppErrors/NotFoundError";
import { ConflictError } from "../errors/AppErrors/ConfictError";
import { ConnectToKMS } from "../../db/KmsConnection";
import { SolanaServiceForSignature } from "../../db/solanaConnection";
import type { SolanaTransactionDetail } from "../solanaService";
import { ProposalTypeSubmitFuctionHandler } from "./submitProposalHandler.util";





export const submitMerkleRootToOnchainPda = async (
    event:SnapshotRequestedType
) => {

    
    const merkleRoot = await prisma.merkleRoot.findFirst({
        where:{
            AND:{
            slot:event.slot.toString(),
            mint:event.mint
            }
        },
        select:{
            merkleRoot:true,

        }
    })


     if(!merkleRoot){

        throw new NotFoundError("merkle Root not found in database at this slot ",event.slot.toString())

    }


   const proposalData = await prisma.proposals.findFirst({
    where:{
        proposal_key:event.proposal_key
    },
    select:{
        deleted:true,
    }
    })
    
    if(!proposalData){

        throw new NotFoundError("proposal key not found in database",event.proposal_key)

    }

    if(proposalData?.deleted) throw new ConflictError("proposal is deleted")

    const handler =  await ProposalTypeSubmitFuctionHandler(event.proposalTypeIndex);

    const instruction = await handler(event.proposal_key)  

    const txDetails :SolanaTransactionDetail  = await SolanaServiceForSignature.addInstructionToTransaction(ConnectToKMS.getAuthority(),instruction);

    const signature = await  ConnectToKMS.SignAndVerify(txDetails.message);

    const tx =  await SolanaServiceForSignature.addSignatureAndExecuteTransaction(txDetails.transaction,ConnectToKMS.getAuthority(),signature,txDetails)

    await prisma.proposals.update({
        where:{
            proposal_key:event.proposal_key,
        },
        data:{
            proposalTxSignature:tx
        }
    })


}