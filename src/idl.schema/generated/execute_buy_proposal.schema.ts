import {z} from "zod"

export const execute_buy_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          buyer_property_system_id : z.any().transform((val) => BigInt(val.toString())),
          seller_property_system_account_id : z.any().transform((val) => BigInt(val.toString())),
          seller_proposal_id : z.any().transform((val) => BigInt(val.toString())),
          state_pubkey : z.string(),
          property_id : z.any().transform((val) => BigInt(val.toString())),
});