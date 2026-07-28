import {z} from "zod"

export const adjust_ranksSchema = z.object({
          proposal_id : z.bigint(),
          property_system : z.string(),
          candidate_key1 : z.string(),
          candidate_key2 : z.string(),
          ranking1 : z.number().int().min(0).max(255),
          ranking2 : z.number().int().min(0).max(255),
});