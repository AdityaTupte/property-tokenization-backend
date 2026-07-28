import {z} from "zod"

export const challenge_new_thresholdSchema = z.object({
          property_system_id : z.bigint(),
          proposal_id : z.bigint(),
          existing_new_threshold_signer : z.string(),
          challenge_new_threshold_signer : z.string(),
});