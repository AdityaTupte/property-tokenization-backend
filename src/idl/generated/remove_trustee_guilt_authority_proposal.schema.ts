import {z} from "zod"

export const remove_trustee_guilt_authority_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});