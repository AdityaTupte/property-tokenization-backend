import {z} from "zod"

export const challenge_new_thresholdSchema = z.object({
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          existing_new_threshold_signer : z.string(),
          challenge_new_threshold_signer : z.string(),
});