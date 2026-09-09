import { z } from "zod";

export const AddedStateAuthoritySchema = z.object({
    state: z.string(),
    authority: z.string(),
});