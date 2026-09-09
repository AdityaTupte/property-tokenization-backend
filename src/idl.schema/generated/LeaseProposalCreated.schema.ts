import { z } from "zod";

export const LeaseProposalCreatedSchema = z.object({
    lease_proposal: z.string(),
    creator: z.string(),
    lessee: z.string(),
});