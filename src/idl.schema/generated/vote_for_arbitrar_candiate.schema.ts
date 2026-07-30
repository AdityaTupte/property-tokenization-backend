import {z} from "zod"

export const vote_for_arbitrar_candiateSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          candidate_key : z.string(),
          proof : z.any(),
          voting_power : z.any().transform((val) => BigInt(val.toString())),
});