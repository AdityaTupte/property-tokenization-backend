import {z} from "zod"

export const finalize_rtc_proposalSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_account : z.string(),
});