import {z} from "zod"

export const buy_proposal_arbitrar_voteSchema = z.object({
          proposal_id : z.bigint(),
          buyer_property_system_id : z.bigint(),
});