import {z} from "zod"

export const remove_old_trustee_remove_proposalSchema = z.object({
          proposal_id : z.bigint(),
          proposal_key : z.string(),
          property_system_id : z.bigint(),
          trustee : z.string(),
});