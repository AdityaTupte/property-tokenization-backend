import { z } from "zod";

export const CandidateProfileCreatedSchema = z.object({
    candidate_key: z.string(),
});