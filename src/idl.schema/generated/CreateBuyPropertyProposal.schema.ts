import { z } from "zod";

export const CreateBuyPropertyProposalSchema = z.object({
    proposal_id: z.any().transform((val) => BigInt(val.toString())),
    buyer: z.string(),
    buyer_proposal: z.string(),
    seller: z.string(),
    seller_proposal: z.string(),
    property: z.string(),
    amount: z.any().transform((val) => BigInt(val.toString())),
});