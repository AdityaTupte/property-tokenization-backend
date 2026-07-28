import {z} from "zod"

export const finalize_leaseSchema = z.object({
          property_system : z.string(),
          lease_id : z.bigint(),
          property_id : z.bigint(),
          state_pubkey : z.string(),
          send_security_deposit_to_lessee : z.bigint(),
});