import { z } from "zod";

export const SnapshotRequestedForAuthoritySchema = z.object({
    proposal_id: z.any().transform((val) => BigInt(val.toString())),
    proposal_type: z.any(),
    proposal_key: z.string(),
    mint: z.string(),
    slot: z.any().transform((val) => BigInt(val.toString())),
});