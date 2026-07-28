import {z} from "zod"

export const add_trustee_offenderSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});