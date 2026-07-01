import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly admin: "admin";
    readonly CountryApprovalAuthority: "CountryApprovalAuthority";
    readonly ApproveCountryAuthorityReceipt: "ApproveCountryAuthorityReceipt";
    readonly CountryProposal: "CountryProposal";
    readonly CountryPda: "CountryPda";
    readonly CountryAuthorityReceipt: "CountryAuthorityReceipt";
    readonly ApproveStateAuthorityReceipt: "ApproveStateAuthorityReceipt";
    readonly StateProposal: "StateProposal";
    readonly StatePda: "StatePda";
    readonly StateAuthorityReceipt: "StateAuthorityReceipt";
    readonly PropertySystemAccount: "PropertySystemAccount";
    readonly DividendPda: "DividendPda";
    readonly TrusteeRegistry: "TrusteeRegistry";
    readonly ArbitrarRegistry: "ArbitrarRegistry";
    readonly Threshold: "Threshold";
    readonly Treasury: "Treasury";
    readonly Fund: "Fund";
    readonly CandiateProfile: "CandiateProfile";
    readonly AuthorityCandidate: "AuthorityCandidate";
    readonly PropertyProposal: "PropertyProposal";
    readonly PropertyAccount: "PropertyAccount";
    readonly SalaryClaim: "SalaryClaim";
    readonly PropertySellProposal: "PropertySellProposal";
    readonly PropertyBuyProposal: "PropertyBuyProposal";
    readonly Lease: "Lease";
    readonly ChallengeProposal: "ChallengeProposal";
    readonly RankCounter: "RankCounter";
    readonly Offenders: "Offenders";
    readonly VotingForProposal: "VotingForProposal";
    readonly VotingForCandiate: "VotingForCandiate";
    readonly Resignation: "Resignation";
    readonly RTChgProposal: "RTChgProposal";
    readonly NewThresholdProposal: "NewThresholdProposal";
    readonly TokenTransferProposal: "TokenTransferProposal";
    readonly Elect: "Elect";
    readonly Proposals: "Proposals";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly fullName: "fullName";
    readonly username: "username";
    readonly email: "email";
    readonly avatar: "avatar";
    readonly coverImage: "coverImage";
    readonly password: "password";
    readonly id: "id";
    readonly signer: "signer";
    readonly refreshToken: "refreshToken";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AdminScalarFieldEnum: {
    readonly user: "user";
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const CountryApprovalAuthorityScalarFieldEnum: {
    readonly id: "id";
    readonly authority: "authority";
    readonly threshold: "threshold";
    readonly bump: "bump";
    readonly created_time: "created_time";
    readonly last_modified: "last_modified";
};
export type CountryApprovalAuthorityScalarFieldEnum = (typeof CountryApprovalAuthorityScalarFieldEnum)[keyof typeof CountryApprovalAuthorityScalarFieldEnum];
export declare const ApproveCountryAuthorityReceiptScalarFieldEnum: {
    readonly id: "id";
    readonly proposal_key: "proposal_key";
    readonly approval_time: "approval_time";
    readonly signer: "signer";
    readonly bump: "bump";
};
export type ApproveCountryAuthorityReceiptScalarFieldEnum = (typeof ApproveCountryAuthorityReceiptScalarFieldEnum)[keyof typeof ApproveCountryAuthorityReceiptScalarFieldEnum];
export declare const CountryProposalScalarFieldEnum: {
    readonly proposal_public_key: "proposal_public_key";
    readonly total_authority: "total_authority";
    readonly country_id: "country_id";
    readonly country_pda_threshold: "country_pda_threshold";
    readonly country_name: "country_name";
    readonly approved: "approved";
    readonly executed: "executed";
    readonly proposal_bump: "proposal_bump";
    readonly proposal_created_time: "proposal_created_time";
};
export type CountryProposalScalarFieldEnum = (typeof CountryProposalScalarFieldEnum)[keyof typeof CountryProposalScalarFieldEnum];
export declare const CountryPdaScalarFieldEnum: {
    readonly proposal_public_key: "proposal_public_key";
    readonly country_public_key: "country_public_key";
    readonly current_total_authority: "current_total_authority";
    readonly country_id: "country_id";
    readonly country_name: "country_name";
    readonly country_pda_threshold: "country_pda_threshold";
    readonly total_authority: "total_authority";
    readonly country_bump: "country_bump";
};
export type CountryPdaScalarFieldEnum = (typeof CountryPdaScalarFieldEnum)[keyof typeof CountryPdaScalarFieldEnum];
export declare const CountryAuthorityReceiptScalarFieldEnum: {
    readonly public_key: "public_key";
    readonly country_created_time: "country_created_time";
    readonly bump: "bump";
    readonly signer: "signer";
};
export type CountryAuthorityReceiptScalarFieldEnum = (typeof CountryAuthorityReceiptScalarFieldEnum)[keyof typeof CountryAuthorityReceiptScalarFieldEnum];
export declare const ApproveStateAuthorityReceiptScalarFieldEnum: {
    readonly id: "id";
    readonly proposal_key: "proposal_key";
    readonly approval_time: "approval_time";
    readonly signer: "signer";
    readonly bump: "bump";
};
export type ApproveStateAuthorityReceiptScalarFieldEnum = (typeof ApproveStateAuthorityReceiptScalarFieldEnum)[keyof typeof ApproveStateAuthorityReceiptScalarFieldEnum];
export declare const StateProposalScalarFieldEnum: {
    readonly proposal_creator_id: "proposal_creator_id";
    readonly proposal_public_key: "proposal_public_key";
    readonly state_id: "state_id";
    readonly state_name: "state_name";
    readonly state_total_authorities: "state_total_authorities";
    readonly country_pubkey: "country_pubkey";
    readonly approved: "approved";
    readonly executed: "executed";
    readonly proposal_bump: "proposal_bump";
    readonly propsal_created_time: "propsal_created_time";
};
export type StateProposalScalarFieldEnum = (typeof StateProposalScalarFieldEnum)[keyof typeof StateProposalScalarFieldEnum];
export declare const StatePdaScalarFieldEnum: {
    readonly state_public_key: "state_public_key";
    readonly proposal_public_key: "proposal_public_key";
    readonly current_total_authority: "current_total_authority";
    readonly state_id: "state_id";
    readonly state_name: "state_name";
    readonly state_total_authorities: "state_total_authorities";
    readonly state_authority_threshold: "state_authority_threshold";
    readonly country_pubkey: "country_pubkey";
    readonly state_bump: "state_bump";
    readonly state_created_time: "state_created_time";
    readonly bump: "bump";
};
export type StatePdaScalarFieldEnum = (typeof StatePdaScalarFieldEnum)[keyof typeof StatePdaScalarFieldEnum];
export declare const StateAuthorityReceiptScalarFieldEnum: {
    readonly public_key: "public_key";
    readonly state_created_time: "state_created_time";
    readonly bump: "bump";
    readonly signer: "signer";
};
export type StateAuthorityReceiptScalarFieldEnum = (typeof StateAuthorityReceiptScalarFieldEnum)[keyof typeof StateAuthorityReceiptScalarFieldEnum];
export declare const PropertySystemAccountScalarFieldEnum: {
    readonly creator_pubky: "creator_pubky";
    readonly property_system_id: "property_system_id";
    readonly property_system_public_key: "property_system_public_key";
    readonly governance_mint: "governance_mint";
    readonly threshold: "threshold";
    readonly treasury: "treasury";
    readonly reinvestment: "reinvestment";
    readonly safety: "safety";
    readonly dividend: "dividend";
    readonly trustee_registry: "trustee_registry";
    readonly arbitrator_registry: "arbitrator_registry";
    readonly total_properties: "total_properties";
    readonly created_at: "created_at";
    readonly ready_for_listing: "ready_for_listing";
    readonly bump: "bump";
};
export type PropertySystemAccountScalarFieldEnum = (typeof PropertySystemAccountScalarFieldEnum)[keyof typeof PropertySystemAccountScalarFieldEnum];
export declare const DividendPdaScalarFieldEnum: {
    readonly dividend_pubkey: "dividend_pubkey";
    readonly dividen_per_token: "dividen_per_token";
    readonly last_updated_ts: "last_updated_ts";
    readonly bump: "bump";
};
export type DividendPdaScalarFieldEnum = (typeof DividendPdaScalarFieldEnum)[keyof typeof DividendPdaScalarFieldEnum];
export declare const TrusteeRegistryScalarFieldEnum: {
    readonly trustee_registry_pubkey: "trustee_registry_pubkey";
    readonly current_number_of_trustees: "current_number_of_trustees";
    readonly total_trustees: "total_trustees";
    readonly vote_threshold: "vote_threshold";
    readonly claim_deadline_ts: "claim_deadline_ts";
    readonly total_salary_allocated: "total_salary_allocated";
    readonly bump: "bump";
    readonly trustees: "trustees";
};
export type TrusteeRegistryScalarFieldEnum = (typeof TrusteeRegistryScalarFieldEnum)[keyof typeof TrusteeRegistryScalarFieldEnum];
export declare const ArbitrarRegistryScalarFieldEnum: {
    readonly arbitrar_registry_pubkey: "arbitrar_registry_pubkey";
    readonly current_number_of_arbitrar: "current_number_of_arbitrar";
    readonly total_arbitrar: "total_arbitrar";
    readonly vote_threshold: "vote_threshold";
    readonly claim_deadline_ts: "claim_deadline_ts";
    readonly total_salary_allocated: "total_salary_allocated";
    readonly bump: "bump";
    readonly arbitrar: "arbitrar";
};
export type ArbitrarRegistryScalarFieldEnum = (typeof ArbitrarRegistryScalarFieldEnum)[keyof typeof ArbitrarRegistryScalarFieldEnum];
export declare const ThresholdScalarFieldEnum: {
    readonly threshold_pub_key: "threshold_pub_key";
    readonly trustee_salary_threshold: "trustee_salary_threshold";
    readonly arbitrator_salary_threshold: "arbitrator_salary_threshold";
    readonly dividend_threshold: "dividend_threshold";
    readonly reinvestment_threshold: "reinvestment_threshold";
    readonly safety_threshold: "safety_threshold";
};
export type ThresholdScalarFieldEnum = (typeof ThresholdScalarFieldEnum)[keyof typeof ThresholdScalarFieldEnum];
export declare const TreasuryScalarFieldEnum: {
    readonly treasury_key: "treasury_key";
    readonly last_distribution: "last_distribution";
    readonly bump: "bump";
};
export type TreasuryScalarFieldEnum = (typeof TreasuryScalarFieldEnum)[keyof typeof TreasuryScalarFieldEnum];
export declare const FundScalarFieldEnum: {
    readonly id: "id";
    readonly property_system_pubkey: "property_system_pubkey";
    readonly fundtype: "fundtype";
    readonly used: "used";
};
export type FundScalarFieldEnum = (typeof FundScalarFieldEnum)[keyof typeof FundScalarFieldEnum];
export declare const CandiateProfileScalarFieldEnum: {
    readonly candidate: "candidate";
    readonly total_applied: "total_applied";
    readonly total_selected_as_trustee: "total_selected_as_trustee";
    readonly total_selected_as_arbitrar: "total_selected_as_arbitrar";
    readonly is_blacklisted: "is_blacklisted";
    readonly removal_count: "removal_count";
    readonly actions_history: "actions_history";
    readonly metadata_hash: "metadata_hash";
    readonly bump: "bump";
};
export type CandiateProfileScalarFieldEnum = (typeof CandiateProfileScalarFieldEnum)[keyof typeof CandiateProfileScalarFieldEnum];
export declare const AuthorityCandidateScalarFieldEnum: {
    readonly authority_candidate: "authority_candidate";
    readonly candidate: "candidate";
    readonly proposal: "proposal";
    readonly selected: "selected";
    readonly selected_time: "selected_time";
    readonly vote_gained: "vote_gained";
    readonly is_finalized: "is_finalized";
    readonly authority_type: "authority_type";
    readonly bump: "bump";
};
export type AuthorityCandidateScalarFieldEnum = (typeof AuthorityCandidateScalarFieldEnum)[keyof typeof AuthorityCandidateScalarFieldEnum];
export declare const PropertyProposalScalarFieldEnum: {
    readonly property_id: "property_id";
    readonly proposal_property_pubkey: "proposal_property_pubkey";
    readonly property_system_pubkey: "property_system_pubkey";
    readonly state_id: "state_id";
    readonly state_pubkey: "state_pubkey";
    readonly country_id: "country_id";
    readonly country_pubkey: "country_pubkey";
    readonly legal_doc_hash: "legal_doc_hash";
    readonly issued_by: "issued_by";
    readonly approval_count: "approval_count";
    readonly approved: "approved";
    readonly executed: "executed";
    readonly bump: "bump";
};
export type PropertyProposalScalarFieldEnum = (typeof PropertyProposalScalarFieldEnum)[keyof typeof PropertyProposalScalarFieldEnum];
export declare const PropertyAccountScalarFieldEnum: {
    readonly property_id: "property_id";
    readonly property_public_key: "property_public_key";
    readonly is_leased: "is_leased";
    readonly property_system: "property_system";
    readonly history_of_owner: "history_of_owner";
    readonly state_id: "state_id";
    readonly state_pubkey: "state_pubkey";
    readonly country_id: "country_id";
    readonly country_pubkey: "country_pubkey";
    readonly issued_at: "issued_at";
    readonly issued_by: "issued_by";
    readonly metadata: "metadata";
    readonly bump: "bump";
};
export type PropertyAccountScalarFieldEnum = (typeof PropertyAccountScalarFieldEnum)[keyof typeof PropertyAccountScalarFieldEnum];
export declare const SalaryClaimScalarFieldEnum: {
    readonly id: "id";
    readonly payer: "payer";
    readonly from: "from";
    readonly authority_type: "authority_type";
    readonly receipt: "receipt";
    readonly claim_time: "claim_time";
    readonly amount: "amount";
};
export type SalaryClaimScalarFieldEnum = (typeof SalaryClaimScalarFieldEnum)[keyof typeof SalaryClaimScalarFieldEnum];
export declare const PropertySellProposalScalarFieldEnum: {
    readonly proposal_id: "proposal_id";
    readonly proposal_key: "proposal_key";
    readonly property_account: "property_account";
    readonly sale_price: "sale_price";
    readonly deposit_account_pda: "deposit_account_pda";
    readonly transfer_deadline: "transfer_deadline";
};
export type PropertySellProposalScalarFieldEnum = (typeof PropertySellProposalScalarFieldEnum)[keyof typeof PropertySellProposalScalarFieldEnum];
export declare const PropertyBuyProposalScalarFieldEnum: {
    readonly id: "id";
    readonly proposal_id: "proposal_id";
    readonly proposal_key: "proposal_key";
    readonly buyer: "buyer";
    readonly buyer_wallet: "buyer_wallet";
    readonly sell_proposal: "sell_proposal";
    readonly property: "property";
    readonly sale_price: "sale_price";
    readonly payment_deadline: "payment_deadline";
};
export type PropertyBuyProposalScalarFieldEnum = (typeof PropertyBuyProposalScalarFieldEnum)[keyof typeof PropertyBuyProposalScalarFieldEnum];
export declare const LeaseScalarFieldEnum: {
    readonly property_system: "property_system";
    readonly lease_id: "lease_id";
    readonly is_arbitrar_approved: "is_arbitrar_approved";
    readonly arbitrar_approval_count: "arbitrar_approval_count";
    readonly initailized_at: "initailized_at";
    readonly property: "property";
    readonly lessee: "lessee";
    readonly periodic_pay: "periodic_pay";
    readonly late_payment_fee_per_day: "late_payment_fee_per_day";
    readonly status: "status";
    readonly rent_amount: "rent_amount";
    readonly security_deposit: "security_deposit";
    readonly last_payement: "last_payement";
    readonly agreemenbt_hash: "agreemenbt_hash";
    readonly lessee_acceptance_deadline: "lessee_acceptance_deadline";
    readonly lease_end_time: "lease_end_time";
    readonly neutral: "neutral";
    readonly bump: "bump";
};
export type LeaseScalarFieldEnum = (typeof LeaseScalarFieldEnum)[keyof typeof LeaseScalarFieldEnum];
export declare const ChallengeProposalScalarFieldEnum: {
    readonly creator: "creator";
    readonly proposal_id: "proposal_id";
    readonly proposal_key: "proposal_key";
    readonly trustee_offender_total_number: "trustee_offender_total_number";
    readonly arbitrar_offender_total_number: "arbitrar_offender_total_number";
    readonly required_vote_to_active: "required_vote_to_active";
    readonly charges_hash: "charges_hash";
    readonly evidence: "evidence";
    readonly guilty: "guilty";
    readonly result_time: "result_time";
    readonly index: "index";
};
export type ChallengeProposalScalarFieldEnum = (typeof ChallengeProposalScalarFieldEnum)[keyof typeof ChallengeProposalScalarFieldEnum];
export declare const RankCounterScalarFieldEnum: {
    readonly proposal_id: "proposal_id";
    readonly property_system: "property_system";
    readonly current_rank: "current_rank";
    readonly bump: "bump";
};
export type RankCounterScalarFieldEnum = (typeof RankCounterScalarFieldEnum)[keyof typeof RankCounterScalarFieldEnum];
export declare const OffendersScalarFieldEnum: {
    readonly id: "id";
    readonly offender_key: "offender_key";
    readonly proposal_key: "proposal_key";
    readonly authority_type: "authority_type";
    readonly is_finalized: "is_finalized";
    readonly bump: "bump";
};
export type OffendersScalarFieldEnum = (typeof OffendersScalarFieldEnum)[keyof typeof OffendersScalarFieldEnum];
export declare const VotingForProposalScalarFieldEnum: {
    readonly proposal_key: "proposal_key";
    readonly timestamp: "timestamp";
    readonly signer: "signer";
    readonly voting_power: "voting_power";
};
export type VotingForProposalScalarFieldEnum = (typeof VotingForProposalScalarFieldEnum)[keyof typeof VotingForProposalScalarFieldEnum];
export declare const VotingForCandiateScalarFieldEnum: {
    readonly proposal_key: "proposal_key";
    readonly timestamp: "timestamp";
    readonly signer: "signer";
    readonly to_whom: "to_whom";
};
export type VotingForCandiateScalarFieldEnum = (typeof VotingForCandiateScalarFieldEnum)[keyof typeof VotingForCandiateScalarFieldEnum];
export declare const ResignationScalarFieldEnum: {
    readonly id: "id";
    readonly authority: "authority";
    readonly proposal: "proposal";
    readonly property_system: "property_system";
    readonly authority_type: "authority_type";
    readonly time: "time";
    readonly status: "status";
    readonly bump: "bump";
};
export type ResignationScalarFieldEnum = (typeof ResignationScalarFieldEnum)[keyof typeof ResignationScalarFieldEnum];
export declare const RTChgProposalScalarFieldEnum: {
    readonly new_threshold: "new_threshold";
    readonly proposal_id: "proposal_id";
    readonly threshold_submission_deadline: "threshold_submission_deadline";
    readonly voting_for_threshold_deadline: "voting_for_threshold_deadline";
    readonly add_new_threshold_deadline: "add_new_threshold_deadline";
    readonly challenge_new_threshold_deadline: "challenge_new_threshold_deadline";
};
export type RTChgProposalScalarFieldEnum = (typeof RTChgProposalScalarFieldEnum)[keyof typeof RTChgProposalScalarFieldEnum];
export declare const NewThresholdProposalScalarFieldEnum: {
    readonly property_system: "property_system";
    readonly new_threshold: "new_threshold";
    readonly proposal: "proposal";
    readonly signer: "signer";
    readonly vote_gained: "vote_gained";
    readonly new_trustee_salary_threshold: "new_trustee_salary_threshold";
    readonly new_arbitrator_salary_threshold: "new_arbitrator_salary_threshold";
    readonly new_dividend_threshold: "new_dividend_threshold";
    readonly new_reinvestment_threshold: "new_reinvestment_threshold";
    readonly new_safety_threshold: "new_safety_threshold";
    readonly bump: "bump";
};
export type NewThresholdProposalScalarFieldEnum = (typeof NewThresholdProposalScalarFieldEnum)[keyof typeof NewThresholdProposalScalarFieldEnum];
export declare const TokenTransferProposalScalarFieldEnum: {
    readonly proposal_id: "proposal_id";
    readonly amount_required: "amount_required";
    readonly reason_hash: "reason_hash";
    readonly recepient_wallet: "recepient_wallet";
    readonly deadline: "deadline";
};
export type TokenTransferProposalScalarFieldEnum = (typeof TokenTransferProposalScalarFieldEnum)[keyof typeof TokenTransferProposalScalarFieldEnum];
export declare const ElectScalarFieldEnum: {
    readonly proposal_id: "proposal_id";
    readonly total_authority_to_resign: "total_authority_to_resign";
    readonly authority_type: "authority_type";
    readonly is_initialized: "is_initialized";
    readonly candidate_submission_deadline: "candidate_submission_deadline";
    readonly voting_for_authority_deadline: "voting_for_authority_deadline";
    readonly add_new_authority_deadline: "add_new_authority_deadline";
    readonly challenge_new_authority_deadline: "challenge_new_authority_deadline";
    readonly is_finalize: "is_finalize";
};
export type ElectScalarFieldEnum = (typeof ElectScalarFieldEnum)[keyof typeof ElectScalarFieldEnum];
export declare const ProposalsScalarFieldEnum: {
    readonly property_system: "property_system";
    readonly proposal_id: "proposal_id";
    readonly proposal_key: "proposal_key";
    readonly merkle_root: "merkle_root";
    readonly arbitrar_approvals: "arbitrar_approvals";
    readonly is_arbitrar_approved: "is_arbitrar_approved";
    readonly total_voting_power: "total_voting_power";
    readonly votes_for: "votes_for";
    readonly votes_against: "votes_against";
    readonly vote_threshold: "vote_threshold";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
    readonly status: "status";
    readonly snapshot_submitted: "snapshot_submitted";
    readonly proposal_type: "proposal_type";
    readonly slot: "slot";
    readonly bump: "bump";
    readonly created_at: "created_at";
};
export type ProposalsScalarFieldEnum = (typeof ProposalsScalarFieldEnum)[keyof typeof ProposalsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map