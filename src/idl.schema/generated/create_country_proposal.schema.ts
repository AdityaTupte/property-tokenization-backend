import { z } from "zod";

export const create_country_proposalSchema = z.object({
    country_name: z.array(z.number().int().min(0).max(255)).length(32),
    country_id: z.number().int().min(0).max(65535),
    total_authority: z.number().int().min(0).max(255),
    country_pda_threshold: z.number().int().min(0).max(255),
});