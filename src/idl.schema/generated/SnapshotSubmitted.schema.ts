import { z } from "zod";

export const SnapshotSubmittedSchema = z.object({
    proposal_id: z.any().transform((val) => BigInt(val.toString())),
    proposal_type: z.any(),
    proposal_key: z.string(),
});