import { z } from "zod";

export const ArbitrarVoteForLeaseSchema = z.object({
    lease_proposal: z.string(),
    arbitrar: z.string(),
});