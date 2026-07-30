import {z} from "zod"

export const add_arbitratorSchema = z.object({
          system_id : z.any().transform((val) => BigInt(val.toString())),
});