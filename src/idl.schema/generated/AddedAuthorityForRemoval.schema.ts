import { z } from "zod";

export const AddedAuthorityForRemovalSchema = z.object({
    proposal_key: z.string(),
    property_system: z.string(),
    authority: z.string(),
    authority_type: z.any(),
});