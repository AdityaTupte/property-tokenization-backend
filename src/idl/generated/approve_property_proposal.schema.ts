import {z} from "zod"

export const approve_property_proposalSchema = z.object({
          country_key : z.string(),
          state_name : z.any(),
          property_id : z.bigint(),
});