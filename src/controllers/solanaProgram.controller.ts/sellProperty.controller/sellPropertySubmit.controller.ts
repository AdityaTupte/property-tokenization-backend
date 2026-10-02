import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";

import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution&event.type";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";
export const handleSellPropertyProposalSubmit: InstructionHandler = async (
  TransactionAccountskey: string[], 
  instruction: instructionsSchema,
  ctx: TransactionContext,
  _BlockTime: number,
  log:CompletedExecution
) => {
  const proposalAddress = address(
    TransactionAccountskey.at(instruction.accounts[1]!)!
  );
// 

  ctx.add(async (tx) => {
    tx.proposals.update({
      where: {
        proposal_key: proposalAddress.toString(),
      },
      data: {
        start_time: new Date(ProposalAccount.startTime.toString()),
        end_time: new Date(ProposalAccount.endTime.toString()),
        snapshot_submitted: true,
        vote_threshold: ProposalAccount.voteThreshold.toNumber(),
        status: "Active",
      },
    });
  });
};




