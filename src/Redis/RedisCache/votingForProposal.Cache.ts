import { RedisConnection } from "../RedisConnection";


interface VotesForProposalCacheInterface {
    voterAddress: string;
    votingPower: number;
    Vote:boolean;
}


 export const VotesForProposalCache =  {
  hsetnx: async (proposalKey: string, data: VotesForProposalCacheInterface) => {
    await RedisConnection.hsetnx(`ProposalPublicKey:${proposalKey}`,data.voterAddress,JSON.stringify(data));

    await RedisConnection.incrby(`ProposalPublicKey:${proposalKey}`,data.votingPower);

  },
    
//   TODO CREATE OTHER FUNCTIONS FOR RETRIVAL
}




