import {z} from "zod"

export const buy_proposal_arbitrar_voteSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          buyer_property_system_id : z.any().transform((val) => BigInt(val.toString())),
});