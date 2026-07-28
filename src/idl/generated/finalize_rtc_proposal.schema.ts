import {z} from "zod"

export const finalize_rtc_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_account : z.string(),
});