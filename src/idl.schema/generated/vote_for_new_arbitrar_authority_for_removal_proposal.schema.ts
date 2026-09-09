import { z } from "zod";

export const vote_for_new_arbitrar_authority_for_removal_proposalSchema = z.object({
    proposal_key: z.string(),
    property_system_id: z.any().transform((val) => BigInt(val.toString())),
    candidate_key: z.string(),
    proof: z.array(z.array(z.number().int().min(0).max(255)).length(32)),
    voting_power: z.any().transform((val) => BigInt(val.toString())),
});