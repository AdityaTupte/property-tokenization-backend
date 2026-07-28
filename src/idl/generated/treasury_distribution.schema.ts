import {z} from "zod"

export const treasury_distributionSchema = z.object({
          property_system_id : z.bigint(),
});