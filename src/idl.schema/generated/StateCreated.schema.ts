import { z } from "zod";

export const StateCreatedSchema = z.object({
    proposal: z.string(),
    country: z.string(),
    creator: z.string(),
});