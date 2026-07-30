import {z} from "zod"

export const revenue_proposal_submit_snapshotSchema = z.object({
          property_system_account : z.string(),
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          merkle_root : z.any(),
          closing_days_gap : z.number().int().min(0).max(255),
          threshold_submission_deadline_days : z.number().int().min(0).max(255),
          voting_for_threshold_deadline_days : z.number().int().min(0).max(255),
          add_new_threshold_deadline_days : z.number().int().min(0).max(255),
          challenge_new_threshold_deadline_days : z.number().int().min(0).max(255),
          vote_threshold : z.any().transform((val) => BigInt(val.toString())),
});