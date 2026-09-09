import { z } from "zod";

export const CreateProposalForTokenTransferSchema = z.object({
    proposal: z.string(),
    property_system: z.string(),
    amount: z.any().transform((val) => BigInt(val.toString())),
    proposal_type: z.any(),
});