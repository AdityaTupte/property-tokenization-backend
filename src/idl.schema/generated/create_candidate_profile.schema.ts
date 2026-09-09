import { z } from "zod";

export const create_candidate_profileSchema = z.object({
    metadata_hash: z.array(z.number().int().min(0).max(255)).length(32),
});