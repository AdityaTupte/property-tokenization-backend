import {z} from "zod"

export const change_to_the_new_thresholdSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          new_threshold_signer : z.string(),
});