import { z } from "zod";

export const LeaseAcceptedByLesseSchema = z.object({
    lease_proposal: z.string(),
    lesse: z.string(),
});