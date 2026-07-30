import {z} from "zod"

export const arbitrar_approve_trustee_electionSchema = z.object({
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
});