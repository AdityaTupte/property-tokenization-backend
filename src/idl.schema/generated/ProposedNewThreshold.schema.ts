import { z } from "zod";

export const ProposedNewThresholdSchema = z.object({
    proposal: z.string(),
    proposer: z.string(),
    proposed_revenue_threshold: z.string(),
});