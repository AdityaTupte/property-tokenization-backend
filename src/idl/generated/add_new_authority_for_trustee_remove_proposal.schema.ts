import {z} from "zod"

export const add_new_authority_for_trustee_remove_proposalSchema = z.object({
          proposal_key : z.string(),
          candidate_key : z.string(),
          property_system_id : z.bigint(),
          proposal_id : z.bigint(),
          ranking : z.number().int().min(0).max(255),
});