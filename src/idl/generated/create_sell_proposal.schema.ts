import {z} from "zod"

export const create_sell_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_id : z.bigint(),
          property_system_id : z.bigint(),
          state_pubkey : z.string(),
          sale_price : z.bigint(),
});