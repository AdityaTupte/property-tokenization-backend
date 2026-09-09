import { z } from "zod";

export const NewThresholdAdoptedSchema = z.object({
    proposal: z.string(),
    new_threshold: z.string(),
    property_system: z.string(),
});