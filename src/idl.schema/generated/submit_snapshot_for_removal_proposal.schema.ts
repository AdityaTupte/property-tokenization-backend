import {z} from "zod"

export const submit_snapshot_for_removal_proposalSchema = z.object({
          challenge_proposal_key : z.string(),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          merkle_root : z.any(),
});