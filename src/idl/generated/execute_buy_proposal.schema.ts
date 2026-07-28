import {z} from "zod"

export const execute_buy_proposalSchema = z.object({
          proposal_id : z.bigint(),
          buyer_property_system_id : z.bigint(),
          seller_property_system_account_id : z.bigint(),
          seller_proposal_id : z.bigint(),
          state_pubkey : z.string(),
          property_id : z.bigint(),
});