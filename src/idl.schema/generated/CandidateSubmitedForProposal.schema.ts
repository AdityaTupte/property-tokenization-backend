import { z } from "zod";

export const CandidateSubmitedForProposalSchema = z.object({
    proposal: z.string(),
    candidate: z.string(),
    authority_type: z.any(),
});