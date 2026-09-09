import { z } from "zod";

export const PropertySystemCreatedSchema = z.object({
    property_system: z.string(),
    creator: z.string(),
    governance_mint: z.string(),
    treasury: z.string(),
    reinvestment: z.string(),
    safety: z.string(),
    dividend: z.string(),
    safety_threshold: z.number().int().min(0).max(255),
    trustee_salary_threshold: z.number().int().min(0).max(255),
    arbitrator_salary_threshold: z.number().int().min(0).max(255),
    dividend_threshold: z.number().int().min(0).max(255),
    reinvestment_threshold: z.number().int().min(0).max(255),
    created_at: z.any().transform((val) => BigInt(val.toString())),
});