import { z } from "zod";

export const ChallengeProposalCreatedSchema = z.object({
    proposal_id: z.any().transform((val) => BigInt(val.toString())),
    proposal_key: z.string(),
    property_system: z.string(),
});