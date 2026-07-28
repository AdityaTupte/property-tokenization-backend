import {z} from "zod"

export const create_approve_country_authoritySchema = z.object({
          threshold : z.number().int().min(0).max(255),
          authority : z.any(),
});