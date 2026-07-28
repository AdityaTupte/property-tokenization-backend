import {z} from "zod"

export const submit_arbitrar_candidateSchema = z.object({
          property_system_id : z.bigint(),
          proposal_id : z.bigint(),
});