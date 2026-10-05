import { z } from "zod";

export const SubmitSnapshotForSellProposalSchema = z.object({
    proposal: z.string(),
    voting_starts_at: z.any().transform((val) => BigInt(val.toString())),
});