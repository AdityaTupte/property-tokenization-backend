import {z} from "zod"

export const token_transfer_vote_for_submit_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          proof : z.any(),
          voting_power : z.any().transform((val) => BigInt(val.toString())),
          yes_or_no : z.boolean(),
});