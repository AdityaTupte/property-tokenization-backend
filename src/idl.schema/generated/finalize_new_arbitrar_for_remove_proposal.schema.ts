import {z} from "zod"

export const finalize_new_arbitrar_for_remove_proposalSchema = z.object({
          candidate_pubkey : z.string(),
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          proposal_key : z.string(),
});