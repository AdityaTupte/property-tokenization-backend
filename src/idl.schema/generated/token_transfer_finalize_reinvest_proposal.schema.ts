import {z} from "zod"

export const token_transfer_finalize_reinvest_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system : z.string(),
});