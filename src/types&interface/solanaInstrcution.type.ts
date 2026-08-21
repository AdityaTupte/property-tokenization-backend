import type { instructionsSchema, messageSchema } from "../helius/findProgramIndex";
import type { TransactionContext } from "../utils/solanaDbHandler";

export type InstructionHandler = (data: messageSchema, instruction :instructionsSchema , ctx :TransactionContext,BlockTime:number) => unknown;