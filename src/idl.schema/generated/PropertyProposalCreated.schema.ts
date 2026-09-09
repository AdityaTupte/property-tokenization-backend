import { z } from "zod";

export const PropertyProposalCreatedSchema = z.object({
    proposal_key: z.string(),
    created_by: z.string(),
    property_system: z.string(),
});