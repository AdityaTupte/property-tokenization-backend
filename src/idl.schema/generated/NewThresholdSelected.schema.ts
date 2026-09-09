import { z } from "zod";

export const NewThresholdSelectedSchema = z.object({
    proposal: z.string(),
    new_threshold: z.string(),
});