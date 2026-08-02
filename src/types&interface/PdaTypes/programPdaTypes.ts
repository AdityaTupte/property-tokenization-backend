

import * as anchor from "@coral-xyz/anchor"
export type  propertySystemAccountType = {
 propertySystemId: anchor.BN;
    governanceMint: anchor.web3.PublicKey;
    treasury: anchor.web3.PublicKey;
    trusteeRegistry: anchor.web3.PublicKey;
    arbitratorRegistry: anchor.web3.PublicKey;
    totalProperties: anchor.BN;
    totalTokenSupply: anchor.BN;
    createdAt: anchor.BN;
    creator: anchor.web3.PublicKey;
    readyForListing: boolean;
    bump: number;
}

export type thresholdType = { 
    trusteeSalaryThreshold:number;
    arbitratorSalaryThreshold: number;
    dividendThreshold: number;
    reinvestmentThreshold: number;
    safetyThreshold: number;
    bump: number
}

export type dividendType = {
 propertySystem: anchor.web3.PublicKey;
 dividendPerToken: anchor.BN;
 lastUpdatedTs: anchor.BN;
 bump: number;
}

export type treasuryType = {
 propertySystemAccout: anchor.web3.PublicKey;
 lastDistributionTs: anchor.BN;
 bump: number;
}

export type safetyType =  {
 propertySystem: anchor.web3.PublicKey;
 safetyFundUsed: anchor.BN;
 bump: number;
}

export type ReinvestmentType =  {
 propertySystem: anchor.web3.PublicKey;
 reinvestementUsed: anchor.BN;
 bump: number;
}


export type trusteeRegistry ={

   
 propertySystemAccount: anchor.web3.PublicKey;
 currentNumberOfTrustees: number;
 totalTrustees: number;
 voteThreshold: number;
 claimDeadlineTs: anchor.BN;
 totalSalaryAllocated: anchor.BN;
 bump: number;
}


export type arbitratorRegistry = {

  
 propertySystemAccount: anchor.web3.PublicKey;
 currentNumberOfArbitrators: number;
 totalArbitrators: number;
 voteThreshold: number;
 claimDeadlineTs: anchor.BN;
 totalSalaryAllocated: anchor.BN;
 bump: number;


}


