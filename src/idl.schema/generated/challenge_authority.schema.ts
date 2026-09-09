import { z } from "zod";

export const challenge_authoritySchema = z.object({
    proposal_id: z.any().transform((val) => BigInt(val.toString())),
    property_system_id: z.any().transform((val) => BigInt(val.toString())),
    charges_hash: z.array(z.number().int().min(0).max(255)).length(32),
    evidence_hash: z.array(z.number().int().min(0).max(255)).length(32),
});