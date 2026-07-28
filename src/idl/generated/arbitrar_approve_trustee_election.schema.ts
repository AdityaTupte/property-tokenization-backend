import {z} from "zod"

export const arbitrar_approve_trustee_electionSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});