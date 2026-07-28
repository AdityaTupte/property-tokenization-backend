import {z} from "zod"

export const create_property_systemSchema = z.object({
          system_id : z.bigint(),
          decimals : z.number().int().min(0).max(255),
          name : z.string(),
          symbol : z.string(),
          uri : z.string(),
          number_of_tokens : z.bigint(),
          safety_threshold : z.number().int().min(0).max(255),
          trustee_salary_threshold : z.number().int().min(0).max(255),
          arbitrator_salary_threshold : z.number().int().min(0).max(255),
          dividend_threshold : z.number().int().min(0).max(255),
          reinvestment_threshold : z.number().int().min(0).max(255),
          total_trustees : z.number().int().min(0).max(255),
          trustee_vote_threshold : z.number().int().min(0).max(255),
          total_arbitrar : z.number().int().min(0).max(255),
          arbitrar_vote_threshold : z.number().int().min(0).max(255),
});