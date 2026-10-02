
import type {
  instructionsSchema,
  messageSchema,
} from "../../../helius/findProgramIndex";
import type { TransactionContext } from "../../../utils/solanaDbHandler";
import type { InstructionHandler } from "../../../types&interface/solanaInstrcution&event.type";
export const handleSellPropertyProposalVoting: InstructionHandler = async (
  TransactionAccountskey: string[],
  instruction: instructionsSchema,
  ctx: TransactionContext,
  BlockTime: number
) => {
  // TODO update the redis




};
