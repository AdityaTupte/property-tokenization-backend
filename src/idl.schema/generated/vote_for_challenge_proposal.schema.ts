import {z} from "zod"

export const vote_for_challenge_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          proof : z.any(),
          voting_power : z.any().transform((val) => BigInt(val.toString())),
});