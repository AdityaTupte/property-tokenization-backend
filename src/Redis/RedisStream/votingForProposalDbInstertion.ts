import { RedisConnectionForStream } from "../RedisConnection";

import type { VoteForProposalSchemaType } from "../../types&interface/VotingDataType";
const VOTING_FOR_PROPOSAL_DB_STREAM = "VotingForProposalDBInsertion";




// export const addVotingForProposalDbInsertionToStream = async (
//   data: VoteForProposalSchemaType
// ) => {

//   await RedisConnectionForStream.xadd(
//     VOTING_FOR_PROPOSAL_DB_STREAM,
//     "*",
//     "proposalKey",
//     data.proposalKey,
//     "voterAddress",
//     data.voterAddress,
//     "votingPower",
//     data.votingPower.toString()
//   );
// };


// TODO Create class for redis stream and implement 