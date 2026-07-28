import {z} from "zod"

export const finalize_new_arbitrar_for_remove_proposalSchema = z.object({
          candidate_pubkey : z.string(),
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          proposal_key : z.string(),
});