import { z } from "zod";

export const LandAccountCreatedSchema = z.object({
    land_account: z.string(),
    state: z.string(),
    issued_by: z.string(),
    land_metadata: z.string(),
});