import { z } from "zod";

export const ResignationCreatedSchema = z.object({
    proposal: z.string(),
    authority: z.string(),
    authority_type: z.any(),
});