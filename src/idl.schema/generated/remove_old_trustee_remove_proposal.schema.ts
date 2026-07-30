import {z} from "zod"

export const remove_old_trustee_remove_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          proposal_key : z.string(),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          trustee : z.string(),
});