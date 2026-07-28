import {z} from "zod"

export const vote_for_new_thresholdSchema = z.object({
          new_threshold_creator : z.string(),
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          proof : z.any(),
          voting_power : z.bigint(),
});