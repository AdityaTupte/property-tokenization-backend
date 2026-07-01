import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model admin
 *
 */
export type admin = Prisma.adminModel;
/**
 * Model CountryApprovalAuthority
 *
 */
export type CountryApprovalAuthority = Prisma.CountryApprovalAuthorityModel;
/**
 * Model ApproveCountryAuthorityReceipt
 *
 */
export type ApproveCountryAuthorityReceipt = Prisma.ApproveCountryAuthorityReceiptModel;
/**
 * Model CountryProposal
 *
 */
export type CountryProposal = Prisma.CountryProposalModel;
/**
 * Model CountryPda
 *
 */
export type CountryPda = Prisma.CountryPdaModel;
/**
 * Model CountryAuthorityReceipt
 *
 */
export type CountryAuthorityReceipt = Prisma.CountryAuthorityReceiptModel;
/**
 * Model ApproveStateAuthorityReceipt
 *
 */
export type ApproveStateAuthorityReceipt = Prisma.ApproveStateAuthorityReceiptModel;
/**
 * Model StateProposal
 *
 */
export type StateProposal = Prisma.StateProposalModel;
/**
 * Model StatePda
 *
 */
export type StatePda = Prisma.StatePdaModel;
/**
 * Model StateAuthorityReceipt
 *
 */
export type StateAuthorityReceipt = Prisma.StateAuthorityReceiptModel;
/**
 * Model PropertySystemAccount
 *
 */
export type PropertySystemAccount = Prisma.PropertySystemAccountModel;
/**
 * Model DividendPda
 *
 */
export type DividendPda = Prisma.DividendPdaModel;
/**
 * Model TrusteeRegistry
 *
 */
export type TrusteeRegistry = Prisma.TrusteeRegistryModel;
/**
 * Model ArbitrarRegistry
 *
 */
export type ArbitrarRegistry = Prisma.ArbitrarRegistryModel;
/**
 * Model Threshold
 *
 */
export type Threshold = Prisma.ThresholdModel;
/**
 * Model Treasury
 *
 */
export type Treasury = Prisma.TreasuryModel;
/**
 * Model Fund
 *
 */
export type Fund = Prisma.FundModel;
/**
 * Model CandiateProfile
 *
 */
export type CandiateProfile = Prisma.CandiateProfileModel;
/**
 * Model AuthorityCandidate
 *
 */
export type AuthorityCandidate = Prisma.AuthorityCandidateModel;
/**
 * Model PropertyProposal
 *
 */
export type PropertyProposal = Prisma.PropertyProposalModel;
/**
 * Model PropertyAccount
 *
 */
export type PropertyAccount = Prisma.PropertyAccountModel;
/**
 * Model SalaryClaim
 *
 */
export type SalaryClaim = Prisma.SalaryClaimModel;
/**
 * Model PropertySellProposal
 *
 */
export type PropertySellProposal = Prisma.PropertySellProposalModel;
/**
 * Model PropertyBuyProposal
 *
 */
export type PropertyBuyProposal = Prisma.PropertyBuyProposalModel;
/**
 * Model Lease
 *
 */
export type Lease = Prisma.LeaseModel;
/**
 * Model ChallengeProposal
 *
 */
export type ChallengeProposal = Prisma.ChallengeProposalModel;
/**
 * Model RankCounter
 *
 */
export type RankCounter = Prisma.RankCounterModel;
/**
 * Model Offenders
 *
 */
export type Offenders = Prisma.OffendersModel;
/**
 * Model VotingForProposal
 *
 */
export type VotingForProposal = Prisma.VotingForProposalModel;
/**
 * Model VotingForCandiate
 *
 */
export type VotingForCandiate = Prisma.VotingForCandiateModel;
/**
 * Model Resignation
 *
 */
export type Resignation = Prisma.ResignationModel;
/**
 * Model RTChgProposal
 *
 */
export type RTChgProposal = Prisma.RTChgProposalModel;
/**
 * Model NewThresholdProposal
 *
 */
export type NewThresholdProposal = Prisma.NewThresholdProposalModel;
/**
 * Model TokenTransferProposal
 *
 */
export type TokenTransferProposal = Prisma.TokenTransferProposalModel;
/**
 * Model Elect
 *
 */
export type Elect = Prisma.ElectModel;
/**
 * Model Proposals
 *
 */
export type Proposals = Prisma.ProposalsModel;
//# sourceMappingURL=client.d.ts.map