import {z} from "zod"

export const state_creation_proposalSchema = z.object({
          state_name : z.any(),
          country_name : z.any(),
          state_id : z.number().int(),
          state_total_authorities : z.number().int().min(0).max(255),
          state_authority_threshold : z.number().int().min(0).max(255),
});