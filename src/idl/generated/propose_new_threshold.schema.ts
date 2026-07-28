import {z} from "zod"

export const propose_new_thresholdSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          proof : z.any(),
          voting_power : z.bigint(),
          new_trustee_salary_threshold : z.number().int().min(0).max(255),
          new_arbitrator_salary_threshold : z.number().int().min(0).max(255),
          new_dividend_threshold : z.number().int().min(0).max(255),
          new_reinvestment_threshold : z.number().int().min(0).max(255),
          new_safety_threshold : z.number().int().min(0).max(255),
});