import {z} from "zod"

export const create_candidate_profileSchema = z.object({
          metadata_hash : z.any(),
});