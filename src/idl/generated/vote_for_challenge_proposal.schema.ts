import {z} from "zod"

export const vote_for_challenge_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          proof : z.any(),
          voting_power : z.bigint(),
});