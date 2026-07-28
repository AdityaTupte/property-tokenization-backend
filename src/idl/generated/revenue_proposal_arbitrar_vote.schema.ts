import {z} from "zod"

export const revenue_proposal_arbitrar_voteSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});