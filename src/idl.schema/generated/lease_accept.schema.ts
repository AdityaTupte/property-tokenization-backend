import {z} from "zod"

export const lease_acceptSchema = z.object({
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          lease_id : z.any().transform((val) => BigInt(val.toString())),
});