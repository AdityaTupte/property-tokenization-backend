import {z} from "zod"

export const finalize_old_trsuteeSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          trustee : z.string(),
});