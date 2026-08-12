import { address } from "@solana/kit";
import type {
  Instructions,
  messageSchema,
} from "../../../helius/findProgramIndex";
import { GenericPda } from "../../../utils/genericPda";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution.type";
export const handleSellPropertyProposalSubmit: InstructionHandler = async (
  message: messageSchema,
  instruction: Instructions,
  ctx: TransactionContext,
  _BlockTime: number
) => {
  const proposalAddress = address(
    message.accountKeys[instruction.accounts[1]!]!
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

  
  ctx.add(async (tx) =>{

    tx.proposals.update({
        where:{
            proposal_key:proposalAddress.toString()
        },
        data:{
            start_time:new Date(ProposalAccount.startTime.toString()),
            end_time:new Date(ProposalAccount.endTime.toString()),
            snapshot_submitted:true,
            vote_threshold:ProposalAccount.voteThreshold.toNumber(),
            status:"Active"
        }
    })

  } )




};
