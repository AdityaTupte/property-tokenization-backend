import {z} from "zod"

export const arbitrar_approval_for_leaseSchema = z.object({
          lease_id : z.bigint(),
          property : z.string(),
          property_system_id : z.bigint(),
});