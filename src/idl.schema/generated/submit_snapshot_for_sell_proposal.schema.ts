import {z} from "zod"

export const submit_snapshot_for_sell_proposalSchema = z.object({
          property_system_account : z.string(),
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          merkle_root : z.any(),
          closing_days_gap : z.number().int().min(0).max(255),
          transfer_deadline_days : z.number().int().min(0).max(255),
          vote_threshold : z.any().transform((val) => BigInt(val.toString())),
});