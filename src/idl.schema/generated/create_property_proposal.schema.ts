import { z } from "zod";

export const create_property_proposalSchema = z.object({
    country_key: z.string(),
    state_name: z.array(z.number().int().min(0).max(255)).length(32),
    property_id: z.any().transform((val) => BigInt(val.toString())),
    property_system_id: z.any().transform((val) => BigInt(val.toString())),
    legal_doc_hash: z.array(z.number().int().min(0).max(255)).length(32),
});