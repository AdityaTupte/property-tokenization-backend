import {z} from "zod"

export const finalize_arbitrar_candidate_profile_for_challenge_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          candidate_key : z.string(),
});