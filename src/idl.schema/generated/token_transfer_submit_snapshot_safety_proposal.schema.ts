import {z} from "zod"

export const token_transfer_submit_snapshot_safety_proposalSchema = z.object({
          property_system_account : z.string(),
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          merkle_root : z.any(),
          closing_days_gap : z.number().int().min(0).max(255),
          deadline_days : z.number().int().min(0).max(255),
          vote_threshold : z.any().transform((val) => BigInt(val.toString())),
});