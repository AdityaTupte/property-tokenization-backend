import {z} from "zod"

export const create_country_proposalSchema = z.object({
          country_name : z.any(),
          country_id : z.number().int(),
          total_authority : z.number().int().min(0).max(255),
          country_pda_threshold : z.number().int().min(0).max(255),
});