import { z } from "zod";

export const SnapshotRequestedSchema = z.object({
    proposal_id: z.any().transform((val) => BigInt(val.toString())),
    proposal_key: z.string(),
    mint: z.string(),
    slot: z.any().transform((val) => BigInt(val.toString())),
});