import {z} from "zod"

export const vote_for_trustee_candiateSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          candidate_key : z.string(),
          proof : z.any(),
          voting_power : z.bigint(),
});