import {z} from "zod"

export const terminate_leaseSchema = z.object({
          property_system : z.string(),
          lease_id : z.any().transform((val) => BigInt(val.toString())),
          property_id : z.any().transform((val) => BigInt(val.toString())),
          state_pubkey : z.string(),
          send_security_deposit_to_lessee : z.any().transform((val) => BigInt(val.toString())),
});