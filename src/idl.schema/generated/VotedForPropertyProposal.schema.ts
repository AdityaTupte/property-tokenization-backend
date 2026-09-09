import { z } from "zod";

export const VotedForPropertyProposalSchema = z.object({
    proposal_key: z.string(),
    authority: z.string(),
});