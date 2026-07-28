import {z} from "zod"

export const submit_snapshot_for_removal_proposalSchema = z.object({
          challenge_proposal_key : z.string(),
          property_system_id : z.bigint(),
          merkle_root : z.any(),
});