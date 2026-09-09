import { z } from "zod";

export const state_proposal_approvalSchema = z.object({
    state_name: z.array(z.number().int().min(0).max(255)).length(32),
    country_name: z.array(z.number().int().min(0).max(255)).length(32),
});