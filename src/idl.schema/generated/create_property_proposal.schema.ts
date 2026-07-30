import {z} from "zod"

export const create_property_proposalSchema = z.object({
          country_key : z.string(),
          state_name : z.any(),
          property_id : z.any().transform((val) => BigInt(val.toString())),
          property_system_id : z.any().transform((val) => BigInt(val.toString())),
          legal_doc_hash : z.any(),
});