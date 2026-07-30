import {z} from "zod"

export const submit_snapshot_for_authoritySchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system : z.string(),
          candidate_submission_deadline : z.number().int().min(0).max(255),
          voting_for_authority_deadline : z.number().int().min(0).max(255),
          add_new_authority_deadline : z.number().int().min(0).max(255),
          challenge_new_authority_deadline : z.number().int().min(0).max(255),
          merkle_root : z.any(),
});