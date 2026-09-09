import { z } from "zod";

export const AuthorityAddedForPropertySystemSchema = z.object({
    property_system: z.string(),
    authority: z.string(),
    authority_type: z.any(),
});