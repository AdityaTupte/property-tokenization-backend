import {z} from "zod"

export const approve_countrySchema = z.object({
          country_name : z.any(),
});