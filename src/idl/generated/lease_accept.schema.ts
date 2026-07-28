import {z} from "zod"

export const lease_acceptSchema = z.object({
          property_system_id : z.bigint(),
          lease_id : z.bigint(),
});