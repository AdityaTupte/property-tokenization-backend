import { z } from "zod";

export const RemoveGuiltyAuthoritySchema = z.object({
    challenge_proposal_key: z.string(),
    removal_guilty_authority_proposal: z.string(),
    authority_type: z.any(),
});