import {z} from "zod"

export const pay_rentSchema = z.object({
          property_system : z.string(),
          lease_id : z.any().transform((val) => BigInt(val.toString())),
          lease_property : z.string(),
});