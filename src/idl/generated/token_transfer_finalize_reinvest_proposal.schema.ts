import {z} from "zod"

export const token_transfer_finalize_reinvest_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system : z.string(),
});