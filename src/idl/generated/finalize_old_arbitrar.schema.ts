import {z} from "zod"

export const finalize_old_arbitrarSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          arbitrar : z.string(),
});