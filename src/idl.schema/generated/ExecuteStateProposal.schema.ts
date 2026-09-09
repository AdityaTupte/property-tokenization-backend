import { z } from "zod";

export const ExecuteStateProposalSchema = z.object({
    proposal: z.string(),
    state: z.string(),
});