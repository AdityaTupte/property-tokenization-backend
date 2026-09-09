import { z } from "zod";

export const CountryProposalCreatedSchema = z.object({
    proposal_key: z.string(),
});