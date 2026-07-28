import {z} from "zod"

export const state_proposal_executeSchema = z.object({
          state_name : z.any(),
          country_name : z.any(),
});