import {z} from "zod"

export const add_new_arbitrarSchema = z.object({
          candidate_key : z.string(),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          ranking : z.number().int().min(0).max(255),
});