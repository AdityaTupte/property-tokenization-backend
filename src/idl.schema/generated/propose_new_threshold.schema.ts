import {z} from "zod"

export const propose_new_thresholdSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          proof : z.any(),
          voting_power : z.any().transform((val) => BigInt(val.toString())),
          new_trustee_salary_threshold : z.number().int().min(0).max(255),
          new_arbitrator_salary_threshold : z.number().int().min(0).max(255),
          new_dividend_threshold : z.number().int().min(0).max(255),
          new_reinvestment_threshold : z.number().int().min(0).max(255),
          new_safety_threshold : z.number().int().min(0).max(255),
});