import {z} from "zod"

export const add_new_arbitrarSchema = z.object({
          candidate_key : z.string(),
          property_system_id : z.bigint(),
          proposal_id : z.bigint(),
          ranking : z.number().int().min(0).max(255),
});