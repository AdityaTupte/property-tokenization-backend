import { z } from "zod";

export const add_state_auhtoritySchema = z.object({
    country_name: z.array(z.number().int().min(0).max(255)).length(32),
    state_name: z.array(z.number().int().min(0).max(255)).length(32),
});