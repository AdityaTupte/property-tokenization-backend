import {z} from "zod"

export const change_to_the_new_thresholdSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          new_threshold_signer : z.string(),
});