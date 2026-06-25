import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: any;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: any;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: any;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map