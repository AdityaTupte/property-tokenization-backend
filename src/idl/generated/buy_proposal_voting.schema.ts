import {z} from "zod"

export const buy_proposal_votingSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          proof : z.any(),
          voting_power : z.bigint(),
          yes_or_no : z.boolean(),
});