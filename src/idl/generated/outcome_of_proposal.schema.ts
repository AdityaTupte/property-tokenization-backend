import {z} from "zod"

export const outcome_of_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          outcome : z.any(),
});