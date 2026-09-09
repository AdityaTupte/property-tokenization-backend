import { z } from "zod";

export const SubmitSnapshotForRemoveAuthoritySchema = z.object({
    proposal_key: z.string(),
    candidate_submision_deadline: z.any().transform((val) => BigInt(val.toString())),
    voting_for_authority_deadline: z.any().transform((val) => BigInt(val.toString())),
    add_new_authority_deadline: z.any().transform((val) => BigInt(val.toString())),
    challenge_new_authority_deadline: z.any().transform((val) => BigInt(val.toString())),
});