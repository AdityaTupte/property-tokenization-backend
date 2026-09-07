import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";
// import { GenericPda } from "../../../utils/genericPda";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
import { prisma } from "../../../prismaclient";
import { ApiError } from "../../../utils/ApiError";
export const handleSellPropertyProposalArbitratorVote: InstructionHandler = async (
  message: messageSchema,
  instruction: instructionsSchema,
  ctx: TransactionContext,
  _BlockTime: number
) => {
  const proposalAddress = address(
    message.accountKeys[instruction.accounts[2]!]!
  );

  const arbitrarRegistryAddress = address(
    message.accountKeys[instruction.accounts[4]!]!
  );

  // const ProposalAccountPda = (await GenericPda(
  //   "propertySellProposal",
  //   proposalAddress
  // )) as any;

  // const ProposalAccount: PdaTypes.propertySellProposalType = {
  //   ...ProposalAccountPda,
  //   status: ProposalAccountPda.status as unknown as PdaTypes.StatusVariant,
  //   proposalType:
  //     ProposalAccountPda.proposalType as unknown as PdaTypes.ProposalVariant,
  // };

  const signer = address(
    message.accountKeys[instruction.accounts[0]!]!.toString()
  );


  const ProposalDb = await prisma.proposals.findUnique({
  where:{
    proposal_key:proposalAddress.toString()
  },
  select:{
   arbitrar_approvals:true,

  }
  })

  const arbitrarDb = await prisma.arbitrarRegistry.findFirst({
    where:{
      arbitrar_registry_pubkey:arbitrarRegistryAddress.toString()
    },
    select:{
      vote_threshold:true,
    }
  })
 
  if(!arbitrarDb) throw new ApiError(409,"arbitrarRgistry not available") ;

  let ArbitrarApproved:boolean ;
  if (arbitrarDb.vote_threshold == (ProposalDb?.arbitrar_approvals?.length ?? 0) + 1){

    ArbitrarApproved = true,


  }
  
  ctx.add(async (tx) =>{

    tx.proposals.update({
        where:{
            proposal_key:proposalAddress.toString()
        },
        data:{
            arbitrar_approvals:{
                push:[`${signer}`]
            },
            is_arbitrar_approved:ArbitrarApproved?true:undefined,
            status:ArbitrarApproved?"Approved":undefined,
            slot:ArbitrarApproved?ProposalAccount.slot.toNumber():undefined,
        }
    })

  } )
  
  

  //TODO create merkleRoot function and update
  // TODO vote threshold update here and Total Voting Power
  //TODO Autocall the submit fuction 

};
