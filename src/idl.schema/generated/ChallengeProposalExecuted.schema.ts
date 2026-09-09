import { z } from "zod";

export const ChallengeProposalExecutedSchema = z.object({
    proposal_key: z.string(),
    outcoome: z.any(),
});