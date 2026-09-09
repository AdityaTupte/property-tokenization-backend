import { z } from "zod";

export const AuthorityToApproveCountryCreatedSchema = z.object({
    authority_account: z.string(),
});