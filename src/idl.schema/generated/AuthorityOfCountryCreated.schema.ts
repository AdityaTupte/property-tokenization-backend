import { z } from "zod";

export const AuthorityOfCountryCreatedSchema = z.object({
    country: z.string(),
    authority: z.string(),
});