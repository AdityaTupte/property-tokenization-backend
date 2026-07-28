import {z} from "zod"

export const submit_snaphot_for_voting_on_challenge_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          merkle_root : z.any(),
});