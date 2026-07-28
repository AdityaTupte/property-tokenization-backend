import {z} from "zod"

export const trustee_resignSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});