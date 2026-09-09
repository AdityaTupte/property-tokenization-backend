import { z } from "zod";

export const CountryCreatedSchema = z.object({
    proposal: z.string(),
    country: z.string(),
});