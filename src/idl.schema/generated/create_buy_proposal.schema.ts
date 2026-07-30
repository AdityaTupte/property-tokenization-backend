import {z} from "zod"

export const create_buy_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          buyer_property_system_id : z.any().transform((val) => BigInt(val.toString())),
          seller_property_system_account : z.string(),
          seller_proposal_id : z.any().transform((val) => BigInt(val.toString())),
          state_pubkey : z.string(),
          property_id : z.any().transform((val) => BigInt(val.toString())),
});