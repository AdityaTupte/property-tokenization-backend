import {z} from "zod"

export const add_country_authoritySchema = z.object({
          country_name : z.any(),
});