import { z } from "zod";

export const BuyPropertyProposalArbitrarVoteSchema = z.object({
    proposal_key: z.string(),
    property_system: z.string(),
    voter: z.string(),
});