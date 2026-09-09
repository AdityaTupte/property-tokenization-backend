import { z } from "zod";

export const add_country_authoritySchema = z.object({
    country_name: z.array(z.number().int().min(0).max(255)).length(32),
});