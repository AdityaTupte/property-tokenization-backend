import { z } from "zod";

export const DeleteProposalSchema = z.object({
    proposal: z.string(),
    deleted_by: z.string(),
});