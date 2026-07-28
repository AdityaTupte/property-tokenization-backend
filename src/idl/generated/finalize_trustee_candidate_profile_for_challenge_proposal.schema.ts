import {z} from "zod"

export const finalize_trustee_candidate_profile_for_challenge_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          candidate_key : z.string(),
});