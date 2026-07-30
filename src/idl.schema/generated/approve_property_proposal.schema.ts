import {z} from "zod"

export const approve_property_proposalSchema = z.object({
          country_key : z.string(),
          state_name : z.any(),
          property_id : z.any().transform((val) => BigInt(val.toString())),
});