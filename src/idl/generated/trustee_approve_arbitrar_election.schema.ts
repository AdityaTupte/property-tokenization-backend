import {z} from "zod"

export const trustee_approve_arbitrar_electionSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});