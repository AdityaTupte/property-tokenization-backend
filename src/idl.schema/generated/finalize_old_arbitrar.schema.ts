import {z} from "zod"

export const finalize_old_arbitrarSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          arbitrar : z.string(),
});