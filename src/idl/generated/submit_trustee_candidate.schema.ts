import {z} from "zod"

export const submit_trustee_candidateSchema = z.object({
          property_system_id : z.bigint(),
          proposal_id : z.bigint(),
});