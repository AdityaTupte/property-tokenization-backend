import {z} from "zod"

export const initialize_lease_proposalSchema = z.object({
          lease_id : z.bigint(),
          property_id : z.bigint(),
          state_pubkey : z.string(),
          property_system_id : z.bigint(),
          rent : z.bigint(),
          security_deposit : z.bigint(),
          agreement_hash : z.any(),
          end_time_in_days : z.number().int(),
          late_payment_fee_per_day : z.bigint(),
          periodic_pay : z.bigint(),
});