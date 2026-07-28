import {z} from "zod"

export const add_arbitrar_for_removalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});