import {z} from "zod"

export const delete_sellSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});