import { z } from "zod";

export const LeaseFinalizeSchema = z.object({
    lease_proposal: z.string(),
    lease_status: z.any(),
});