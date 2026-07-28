import {z} from "zod"

export const finalize_new_trusteeSchema = z.object({
          candidate_pubkey : z.string(),
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});