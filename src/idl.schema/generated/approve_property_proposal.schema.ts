import { z } from "zod";

export const approve_property_proposalSchema = z.object({
    country_key: z.string(),
    state_name: z.array(z.number().int().min(0).max(255)).length(32),
    property_id: z.any().transform((val) => BigInt(val.toString())),
});