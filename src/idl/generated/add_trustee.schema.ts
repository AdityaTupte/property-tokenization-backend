import {z} from "zod"

export const add_trusteeSchema = z.object({
          system_id : z.bigint(),
});