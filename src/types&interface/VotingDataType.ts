import type { instructionsSchema, messageSchema,metaSchema } from "../helius/findProgramIndex";
import type { VoteForProposalSchema } from "../idl.schema/generated/VoteForProposal.schema";
import type { TransactionContext } from "../utils/solanaDbHandler";
import type { CompletedExecution } from "./solanaLogParser.interface";

export type VotingProposalDataType = {
    data: messageSchema,
    instruction: instructionsSchema,
    ctx: TransactionContext,
    BlockTime: number,
    meta: CompletedExecution
};



export type VoteForProposalSchemaType  = z.infer<typeof VoteForProposalSchema> ;