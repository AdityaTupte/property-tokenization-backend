import { address } from "@solana/kit";
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";
import { GenericPda } from "../../../utils/genericPda";
import type * as PdaTypes from "../../../types&interface/PdaTypes/programPdaTypes";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution&event.type";
import type { CompletedExecution } from "../../../types&interface/solanaLogParser.interface";
import { eventDecoder } from "../../../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { SubmitSnapshotForSellProposalSchema } from "../../../idl.schema/generated/SubmitSnapshotForSellProposal.schema";
import { prisma } from "../../../prismaclient";
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

    ctx.add(async (tx) => {
    tx.proposals.update({
      where: {
        proposal_key: proposalAddress.toString(),
      },
      data: {
        snapshot_submitted: true,
        status: "Active", 
      },
    });
  });
};




