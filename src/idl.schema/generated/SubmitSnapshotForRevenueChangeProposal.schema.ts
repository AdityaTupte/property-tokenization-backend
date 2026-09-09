import { z } from "zod";

export const SubmitSnapshotForRevenueChangeProposalSchema = z.object({
    proposal_key: z.string(),
    threshold_submission_deadline_days: z.any().transform((val) => BigInt(val.toString())),
    voting_for_threshold_deadline: z.any().transform((val) => BigInt(val.toString())),
    add_new_threshold_deadline: z.any().transform((val) => BigInt(val.toString())),
    challenge_new_threshold_deadline: z.any().transform((val) => BigInt(val.toString())),
});