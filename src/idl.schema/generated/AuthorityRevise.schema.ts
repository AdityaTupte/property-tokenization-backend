import { z } from "zod";

export const AuthorityReviseSchema = z.object({
    proposal_key: z.string(),
    new_authority: z.string(),
    old_authority: z.string(),
});