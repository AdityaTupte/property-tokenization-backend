import { z } from "zod";

export const RevenueChangeProposalCreatedSchema = z.object({
    proposal_id: z.any().transform((val) => BigInt(val.toString())),
    proposal_key: z.string(),
    property_system: z.string(),
    trustee: z.string(),
});