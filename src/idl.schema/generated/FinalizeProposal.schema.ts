import { z } from "zod";

export const FinalizeProposalSchema = z.object({
    proposal: z.string(),
    proposal_status: z.any(),
});