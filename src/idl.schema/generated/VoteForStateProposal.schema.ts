import { z } from "zod";

export const VoteForStateProposalSchema = z.object({
    proposal: z.string(),
    authority: z.string(),
});