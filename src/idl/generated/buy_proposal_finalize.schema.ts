import {z} from "zod"

export const buy_proposal_finalizeSchema = z.object({
          proposal_id : z.bigint(),
          property_system_account : z.string(),
});