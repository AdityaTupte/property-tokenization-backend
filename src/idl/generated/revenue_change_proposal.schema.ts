import {z} from "zod"

export const revenue_change_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});