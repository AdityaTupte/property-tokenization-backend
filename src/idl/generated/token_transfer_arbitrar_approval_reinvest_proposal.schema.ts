import {z} from "zod"

export const token_transfer_arbitrar_approval_reinvest_proposalSchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
});