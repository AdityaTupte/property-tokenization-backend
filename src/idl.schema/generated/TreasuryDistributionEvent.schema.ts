import { z } from "zod";

export const TreasuryDistributionEventSchema = z.object({
    property_system: z.string(),
    time: z.any().transform((val) => BigInt(val.toString())),
});