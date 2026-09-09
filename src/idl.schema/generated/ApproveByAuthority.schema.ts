import { z } from "zod";

export const ApproveByAuthoritySchema = z.object({
    proposal: z.string(),
    authority: z.string(),
});