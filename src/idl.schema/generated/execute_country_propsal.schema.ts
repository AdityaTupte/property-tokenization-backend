import { z } from "zod";

export const execute_country_propsalSchema = z.object({
    country_name: z.array(z.number().int().min(0).max(255)).length(32),
});