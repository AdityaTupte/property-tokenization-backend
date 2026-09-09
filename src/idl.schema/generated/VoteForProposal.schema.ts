import { z } from "zod";

export const VoteForProposalSchema = z.object({
    proposal: z.string(),
    voter: z.string(),
    for_against: z.boolean(),
});