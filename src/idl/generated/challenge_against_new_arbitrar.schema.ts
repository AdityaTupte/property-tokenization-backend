import {z} from "zod"

export const challenge_against_new_arbitrarSchema = z.object({
          proposal_id : z.bigint(),
          challenge_from_key : z.string(),
          challenge_to_key : z.string(),
          ranking : z.number().int().min(0).max(255),
          property_system_id : z.bigint(),
});