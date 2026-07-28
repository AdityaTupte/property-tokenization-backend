import {z} from "zod"

export const finalize_new_arbitrarSchema = z.object({
          candidate_pubkey : z.string(),
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});