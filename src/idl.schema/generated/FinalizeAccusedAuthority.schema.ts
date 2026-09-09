import { z } from "zod";

export const FinalizeAccusedAuthoritySchema = z.object({
    proposal_key: z.string(),
    authority: z.string(),
    authority_type: z.any(),
    outcoome: z.any(),
});