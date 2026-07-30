import {z} from "zod"

export const challenge_new_authority_of_removal_prposalSchema = z.object({
          proposal_key : z.string(),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          challenge_from_key : z.string(),
          challenge_to_key : z.string(),
          ranking : z.number().int().min(0).max(255),
});