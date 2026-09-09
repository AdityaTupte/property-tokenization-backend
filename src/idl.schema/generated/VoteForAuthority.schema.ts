import { z } from "zod";

export const VoteForAuthoritySchema = z.object({
    proposal: z.string(),
    voter: z.string(),
    candidate: z.string(),
});