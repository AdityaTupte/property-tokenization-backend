import {z} from "zod"

export const token_transfer_create_use_safety_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          amount_required : z.bigint(),
          reason_hash : z.any(),
});