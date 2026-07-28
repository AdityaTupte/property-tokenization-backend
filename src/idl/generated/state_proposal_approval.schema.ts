import {z} from "zod"

export const state_proposal_approvalSchema = z.object({
          state_name : z.any(),
          country_name : z.any(),
});