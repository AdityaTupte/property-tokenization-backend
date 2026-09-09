import { z } from "zod";

export const TokenTransferExecutedSchema = z.object({
    proposal: z.string(),
    property_system: z.string(),
    credited_account: z.string(),
    amount: z.any().transform((val) => BigInt(val.toString())),
    proposal_type: z.any(),
});