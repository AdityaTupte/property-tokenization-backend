import {z} from "zod"

export const submit_arbitrar_candidateSchema = z.object({
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          proposal_id : z.any().transform((val) => BigInt(val.toString())),
});