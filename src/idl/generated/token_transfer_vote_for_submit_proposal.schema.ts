import {z} from "zod"

export const token_transfer_vote_for_submit_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          proof : z.any(),
          voting_power : z.bigint(),
          yes_or_no : z.boolean(),
});