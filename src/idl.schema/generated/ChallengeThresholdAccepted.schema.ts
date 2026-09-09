import { z } from "zod";

export const ChallengeThresholdAcceptedSchema = z.object({
    proposal: z.string(),
    new_threshold: z.string(),
});