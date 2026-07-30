import {z} from "zod"

export const arbitrar_salary_claimSchema = z.object({
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
});