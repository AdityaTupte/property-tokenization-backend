import { z } from "zod";

export const CreateSellPropertyProposalSchema = z.object({
    proposal_id: z.any().transform((val) => BigInt(val.toString())),
    seller: z.string(),
    seller_proposal: z.string(),
    property: z.string(),
    amount: z.any().transform((val) => BigInt(val.toString())),
});