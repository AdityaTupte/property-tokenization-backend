import { z } from "zod";

export const AddedNewAuthoritySchema = z.object({
    proposal: z.string(),
    candidate: z.string(),
    authority_type: z.any(),
    rank: z.number().int().min(0).max(255),
});