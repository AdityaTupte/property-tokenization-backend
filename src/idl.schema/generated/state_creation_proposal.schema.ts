import { z } from "zod";

export const state_creation_proposalSchema = z.object({
    state_name: z.array(z.number().int().min(0).max(255)).length(32),
    country_name: z.array(z.number().int().min(0).max(255)).length(32),
    state_id: z.number().int().min(0).max(65535),
    state_total_authorities: z.number().int().min(0).max(255),
    state_authority_threshold: z.number().int().min(0).max(255),
});