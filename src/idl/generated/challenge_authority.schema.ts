import {z} from "zod"

export const challenge_authoritySchema = z.object({
          proposal_id : z.bigint(),
          property_system_id : z.bigint(),
          charges_hash : z.any(),
          evidence_hash : z.any(),
});