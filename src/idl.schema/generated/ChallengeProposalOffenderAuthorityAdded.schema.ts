import { z } from "zod";

export const ChallengeProposalOffenderAuthorityAddedSchema = z.object({
    proposal_key: z.string(),
    authority: z.string(),
    authority_type: z.any(),
});