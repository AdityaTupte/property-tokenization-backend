

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


export type trusteeRegistryType ={

   
 propertySystemAccount: anchor.web3.PublicKey;
 currentNumberOfTrustees: number;
 totalTrustees: number;
 voteThreshold: number;
 claimDeadlineTs: anchor.BN;
 totalSalaryAllocated: anchor.BN;
 bump: number;
}


export type arbitratorRegistryType = {

  
 propertySystemAccount: anchor.web3.PublicKey;
 currentNumberOfArbitrators: number;
 totalArbitrators: number;
 voteThreshold: number;
 claimDeadlineTs: anchor.BN;
 totalSalaryAllocated: anchor.BN;
 bump: number;


}

export type  CountryApproveAuthorityType = {
 authority: anchor.web3.PublicKey[];
 threshold: number;
 bump: number;
}


export type countryProposalType  = {
 countryId: number;
 countryName: number[];
 countryPdaThreshold: number;
 approvals: number;
 approved: boolean;
 executed: boolean;
 totalAuthority: number;
 bump: number;
}


export type approveCountryAuthorityReceiptType = {
 countryProposal: anchor.web3.PublicKey;
 bump: number;
}


export type countryPdaType = {
 countryId: number;
 countryName: number[];
 threshold: number;
 totalAuthority: number;
 bump: number;
}



export type StateProposalType =  {
 stateId: number;
 stateName: number[];
 stateTotalAuthorities: number;
 stateAuthorityThreshold: number;
 countryId: number;
 countryPubkey: anchor.web3.PublicKey;
 approval: number;
 approved: boolean;
 executed: boolean;
 bump: number;
}


export type approveStateAuthorityReceiptType = {
 proposal: anchor.web3.PublicKey;
 bump: number;
}



export type StatePdaType = {
 stateId: number;
 stateName: number[];
 countryId: number;
 countryPubkey:  anchor.web3.PublicKey;
 totalAuthorities: number;
 threshold: number;
 bump: number;
}

