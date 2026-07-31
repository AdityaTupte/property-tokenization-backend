

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