import {z} from "zod"

export const initialize_lease_proposalSchema = z.object({
          lease_id : z.any().transform((val) => BigInt(val.toString())),
          property_id : z.any().transform((val) => BigInt(val.toString())),
          state_pubkey : z.string(),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          rent : z.any().transform((val) => BigInt(val.toString())),
          security_deposit : z.any().transform((val) => BigInt(val.toString())),
          agreement_hash : z.any(),
          end_time_in_days : z.number().int(),
          late_payment_fee_per_day : z.any().transform((val) => BigInt(val.toString())),
          periodic_pay : z.any().transform((val) => BigInt(val.toString())),
});