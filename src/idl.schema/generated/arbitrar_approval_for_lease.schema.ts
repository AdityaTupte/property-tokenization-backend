import {z} from "zod"

export const arbitrar_approval_for_leaseSchema = z.object({
          lease_id : z.any().transform((val) => BigInt(val.toString())),
          property : z.string(),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
});