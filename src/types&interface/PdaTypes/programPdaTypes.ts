

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

export type PropertyProposalType =  {
 propertyId: anchor.BN;
 propertySystemPubkey: anchor.web3.PublicKey;
 stateId: number;
 statePubkey: anchor.web3.PublicKey;
 countryId: number;
 countryPubkey: anchor.web3.PublicKey;
 legalDocHash: number[];
 issuedBy: anchor.web3.PublicKey;
 approvalCount: number;
 approved: boolean;
 executed: boolean;
 bump: number;
}



export type PropertyAccountType =   {
 propertyId: anchor.BN;
 isLeased: boolean;
 propertySystem: anchor.web3.PublicKey;
 stateId: number;
 statePubkey: anchor.web3.PublicKey;
 countryId: number;
 countryPubkey: anchor.web3.PublicKey;
 issuedAt: anchor.BN;
 issuedBy: anchor.web3.PublicKey;
 metadata: anchor.web3.PublicKey;
 bump: number;
}

export type StatusVariant = 
  | { draft: Record<string, never> }
  | { active: Record<string, never> }
  | { passed: Record<string, never> }
  | { failed: Record<string, never> }
  | { rejected: Record<string, never> }
  | { executed: Record<string, never> }
  | { pending: Record<string, never> }
  | { approved: Record<string, never> };


  export type ProposalVariant = 
  | { SELLPROPERTY: Record<string, never> }
  | { BUYPROPERTY: Record<string, never> }
  | { USESAFETY: Record<string, never> }
  | { USEREINVESTMENT: Record<string, never> }
  | { REVENUETHRESHOLDCHANGE: Record<string, never> }
  | { CHALLLENGEAUTHORITY: Record<string, never> }
  | { REMOVEAUTHORITY: Record<string, never> }
  | { PROPOSEREMOVEPROPOSAL: Record<string, never> };



export type propertySellProposalType = {
 proposalId: anchor.BN;
 propertyAccount: anchor.web3.PublicKey;
 salePrice: anchor.BN;
 propertySystemAccount: anchor.web3.PublicKey;
 depositAccountPda: anchor.web3.PublicKey;
 merkleRoot: number[];
 arbitrarApprovalsCount: number;
 isArbitrarApproved: boolean;
 totalVotingPower: anchor.BN;
 votesFor: anchor.BN;
 votesAgainst: anchor.BN;
 voteThreshold: anchor.BN;
 startTime: anchor.BN;
 endTime: anchor.BN;
 transferDeadline: anchor.BN;
 status:StatusVariant;
 snapshotSubmitted: boolean;
 proposalType:ProposalVariant,
 slot: anchor.BN;
 bump: number;
}



