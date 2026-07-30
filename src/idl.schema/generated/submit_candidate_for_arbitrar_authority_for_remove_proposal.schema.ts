import {z} from "zod"

export const submit_candidate_for_arbitrar_authority_for_remove_proposalSchema = z.object({
          proposal_key : z.string(),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
});