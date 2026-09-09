import { z } from "zod";

export const SubmitForTokenTransferSchema = z.object({
    proposal: z.string(),
    end_time: z.any().transform((val) => BigInt(val.toString())),
    proposal_type: z.any(),
});