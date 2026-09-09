import { z } from "zod";

export const RentPaidSchema = z.object({
    lease_proposal: z.string(),
});