import {z} from "zod"

export const add_state_auhtoritySchema = z.object({
          country_name : z.any(),
          state_name : z.any(),
});