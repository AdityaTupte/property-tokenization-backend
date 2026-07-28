import {z} from "zod"

export const finalize_new_thresholdSchema = z.object({
          property_system_id : z.bigint(),
          proposal_id : z.bigint(),
          new_threshold_signer : z.string(),
});