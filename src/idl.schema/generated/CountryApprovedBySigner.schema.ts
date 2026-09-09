import { z } from "zod";

export const CountryApprovedBySignerSchema = z.object({
    proposal: z.string(),
    authority: z.string(),
});