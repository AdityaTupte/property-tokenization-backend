import { z } from "zod";

export const VotedForNewThresholdSchema = z.object({
    proposal: z.string(),
    new_threshold: z.string(),
    voter: z.string(),
});