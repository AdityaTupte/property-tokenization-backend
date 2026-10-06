import type {
  instructionsSchema,
  messageSchema,
  metaSchema,
} from "../helius/findProgramIndex";
import type { TransactionContext } from "../utils/prisamTransactionClass";
import type { CompletedExecution } from "./solanaLogParser.interface";

export type InstructionHandler = (
  TransactionAccountskey: string[],
  instruction: instructionsSchema,
  ctx: TransactionContext,
  BlockTime: number,
  meta: CompletedExecution
) => unknown;

export type Eventahandler = (data: CompletedExecution) => unknown;
