import { z } from "zod";

export const ResignationOfAuthoritySchema = z.object({
    proposal: z.string(),
    authority: z.string(),
});