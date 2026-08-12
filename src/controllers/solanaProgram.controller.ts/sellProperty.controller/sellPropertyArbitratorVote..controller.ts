import { address } from "@solana/kit";
import type {
  Instructions,
  messageSchema,
} from "../../../helius/findProgramIndex";
import { GenericPda } from "../../../utils/genericPda";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handleSellPropertyProposalArbitratorVote: InstructionHandler = async (
  message: messageSchema,
  instruction: Instructions,
  ctx: TransactionContext,
  _BlockTime: number
) => {
  const proposalAddress = address(
    message.accountKeys[instruction.accounts[2]!]!
  );

  const ProposalAccountPda = (await GenericPda(
    "propertySellProposal",
    proposalAddress
  )) as any;

  const ProposalAccount: PdaTypes.propertySellProposalType = {
    ...ProposalAccountPda,
    status: ProposalAccountPda.status as unknown as PdaTypes.StatusVariant,
    proposalType:
      ProposalAccountPda.proposalType as unknown as PdaTypes.ProposalVariant,
  };

  const signer = address(
    message.accountKeys[instruction.accounts[0]!]!.toString()
  );

  let isApproved ;
  if( ProposalAccount.isArbitrarApproved == true ) isApproved == true;
  
  ctx.add(async (tx) =>{

    tx.proposals.update({
        where:{
            proposal_key:proposalAddress.toString()
        },
        data:{
            arbitrar_approvals:{
                push:[`${signer}`]
            },
            is_arbitrar_approved:isApproved?true:undefined,
            status:isApproved?"Approved":undefined,
            slot:isApproved?ProposalAccount.slot.toNumber():undefined,
        }
    })

  } )

  

  //TODO create merkleRoot function and update
  // TODO vote threshold update here and Total Voting Power
  //TODO Autocall the submit fuction 

};
