import { z } from "zod";

export const buy_proposal_votingSchema = z.object({
    proposal_id: z.any().transform((val) => BigInt(val.toString())),
    property_system_id: z.any().transform((val) => BigInt(val.toString())),
    proof: z.array(z.array(z.number().int().min(0).max(255)).length(32)),
    voting_power: z.any().transform((val) => BigInt(val.toString())),
    yes_or_no: z.boolean(),
});