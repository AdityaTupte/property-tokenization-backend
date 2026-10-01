import type { instructionsSchema, messageSchema,metaSchema } from "../helius/findProgramIndex";
import type { TransactionContext } from "../utils/solanaDbHandler";
import type { CompletedExecution } from "./solanaLogParser.interface";

export type VotingDataType = {
    data: messageSchema,
    instruction: instructionsSchema,
    ctx: TransactionContext,
    BlockTime: number,
    meta: CompletedExecution
};