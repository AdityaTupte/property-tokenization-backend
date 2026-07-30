import {z} from "zod"

export const create_sell_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          state_pubkey : z.string(),
          sale_price : z.any().transform((val) => BigInt(val.toString())),
});