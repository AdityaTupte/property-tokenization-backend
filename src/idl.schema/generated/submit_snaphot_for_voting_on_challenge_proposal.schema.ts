import {z} from "zod"

export const submit_snaphot_for_voting_on_challenge_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          merkle_root : z.any(),
});