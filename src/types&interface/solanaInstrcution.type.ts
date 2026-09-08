import type { instructionsSchema, messageSchema,metaSchema } from "../helius/findProgramIndex";
import type { TransactionContext } from "../utils/solanaDbHandler";

export type InstructionHandler = (data: messageSchema, instruction :instructionsSchema , ctx :TransactionContext,BlockTime:number,meta:metaSchema) => unknown;