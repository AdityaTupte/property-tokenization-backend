import {z} from "zod"

export const add_new_authority_for_arbitrar_remove_proposalSchema = z.object({
          proposal_key : z.string(),
          candidate_key : z.string(),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          ranking : z.number().int().min(0).max(255),
});