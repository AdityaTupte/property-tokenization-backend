import type { Instructions, messageSchema } from "../helius/findProgramIndex";
import type { TransactionContext } from "../utils/solanaDbHandler";

export type InstructionHandler = (data: messageSchema, instruction :Instructions , ctx :TransactionContext) => unknown;