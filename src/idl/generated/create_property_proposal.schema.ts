import {z} from "zod"

export const create_property_proposalSchema = z.object({
          country_key : z.string(),
          state_name : z.any(),
          property_id : z.bigint(),
          property_system_id : z.bigint(),
          legal_doc_hash : z.any(),
});