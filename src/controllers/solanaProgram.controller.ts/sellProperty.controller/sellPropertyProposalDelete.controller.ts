import { address } from "@solana/kit";
import type { instructionsSchema } from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/prisamTransactionClass";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution&event.type";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";
export const handleSellPropertyProposalDelete: InstructionHandler = async (
  TransactionAccountskey: string[],
  instruction: instructionsSchema,
  ctx: TransactionContext,
  BlockTime: number,
  _log: CompletedExecution
) => {
  const proposalAddress = address(
    TransactionAccountskey.at(instruction.accounts[1]!)!
  );

  const signer = address(
    TransactionAccountskey.at(instruction.accounts[0]!)!
  ).toString();

  ctx.add(async (tx) => {
    tx.proposals.update({
      where: {
        proposal_key: proposalAddress.toString(),
      },
      data: {
        status: "Deleted",
        deleted: {
          signer: signer,
          time: new Date(BlockTime * 1000),
        },
      },
    });
  });
};
