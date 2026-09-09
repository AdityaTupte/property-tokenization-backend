import { z } from "zod";

export const FinalizeAuthoritySchema = z.object({
    proposal: z.string(),
    property_system: z.string(),
    authority: z.string(),
    authority_type: z.any(),
});