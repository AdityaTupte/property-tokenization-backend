import {z} from "zod"

export const finalize_old_trsuteeSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          trustee : z.string(),
});