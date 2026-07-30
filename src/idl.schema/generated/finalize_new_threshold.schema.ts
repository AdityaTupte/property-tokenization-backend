import {z} from "zod"

export const finalize_new_thresholdSchema = z.object({
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          new_threshold_signer : z.string(),
});