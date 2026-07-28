import {z} from "zod"

export const pay_rentSchema = z.object({
          property_system : z.string(),
          lease_id : z.bigint(),
          lease_property : z.string(),
});