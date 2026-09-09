import { z } from "zod";

export const SubmitSnapshotForSellProposalSchema = z.object({
    proposal: z.string(),
    transfer_deadline_days: z.any().transform((val) => BigInt(val.toString())),
});