import {z} from "zod"

export const remove_old_arbitrar_remove_proposalSchema = z.object({
          proposal_id : z.bigint(),
          proposal_key : z.string(),
          property_system_id : z.bigint(),
          arbitrar : z.string(),
});