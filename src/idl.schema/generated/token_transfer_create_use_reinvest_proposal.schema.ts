import {z} from "zod"

export const token_transfer_create_use_reinvest_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          amount_required : z.any().transform((val) => BigInt(val.toString())),
          reason_hash : z.any(),
});