import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.admin`: Exposes CRUD operations for the **admin** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Admins
      * const admins = await prisma.admin.findMany()
      * ```
      */
    get admin(): Prisma.adminDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.countryApprovalAuthority`: Exposes CRUD operations for the **CountryApprovalAuthority** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CountryApprovalAuthorities
      * const countryApprovalAuthorities = await prisma.countryApprovalAuthority.findMany()
      * ```
      */
    get countryApprovalAuthority(): Prisma.CountryApprovalAuthorityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.approveCountryAuthorityReceipt`: Exposes CRUD operations for the **ApproveCountryAuthorityReceipt** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ApproveCountryAuthorityReceipts
      * const approveCountryAuthorityReceipts = await prisma.approveCountryAuthorityReceipt.findMany()
      * ```
      */
    get approveCountryAuthorityReceipt(): Prisma.ApproveCountryAuthorityReceiptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.countryProposal`: Exposes CRUD operations for the **CountryProposal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CountryProposals
      * const countryProposals = await prisma.countryProposal.findMany()
      * ```
      */
    get countryProposal(): Prisma.CountryProposalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.countryPda`: Exposes CRUD operations for the **CountryPda** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CountryPdas
      * const countryPdas = await prisma.countryPda.findMany()
      * ```
      */
    get countryPda(): Prisma.CountryPdaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.countryAuthorityReceipt`: Exposes CRUD operations for the **CountryAuthorityReceipt** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CountryAuthorityReceipts
      * const countryAuthorityReceipts = await prisma.countryAuthorityReceipt.findMany()
      * ```
      */
    get countryAuthorityReceipt(): Prisma.CountryAuthorityReceiptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.approveStateAuthorityReceipt`: Exposes CRUD operations for the **ApproveStateAuthorityReceipt** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ApproveStateAuthorityReceipts
      * const approveStateAuthorityReceipts = await prisma.approveStateAuthorityReceipt.findMany()
      * ```
      */
    get approveStateAuthorityReceipt(): Prisma.ApproveStateAuthorityReceiptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.stateProposal`: Exposes CRUD operations for the **StateProposal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StateProposals
      * const stateProposals = await prisma.stateProposal.findMany()
      * ```
      */
    get stateProposal(): Prisma.StateProposalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.statePda`: Exposes CRUD operations for the **StatePda** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StatePdas
      * const statePdas = await prisma.statePda.findMany()
      * ```
      */
    get statePda(): Prisma.StatePdaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.stateAuthorityReceipt`: Exposes CRUD operations for the **StateAuthorityReceipt** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StateAuthorityReceipts
      * const stateAuthorityReceipts = await prisma.stateAuthorityReceipt.findMany()
      * ```
      */
    get stateAuthorityReceipt(): Prisma.StateAuthorityReceiptDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.propertySystemAccount`: Exposes CRUD operations for the **PropertySystemAccount** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PropertySystemAccounts
      * const propertySystemAccounts = await prisma.propertySystemAccount.findMany()
      * ```
      */
    get propertySystemAccount(): Prisma.PropertySystemAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.dividendPda`: Exposes CRUD operations for the **DividendPda** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DividendPdas
      * const dividendPdas = await prisma.dividendPda.findMany()
      * ```
      */
    get dividendPda(): Prisma.DividendPdaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.trusteeRegistry`: Exposes CRUD operations for the **TrusteeRegistry** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TrusteeRegistries
      * const trusteeRegistries = await prisma.trusteeRegistry.findMany()
      * ```
      */
    get trusteeRegistry(): Prisma.TrusteeRegistryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.arbitrarRegistry`: Exposes CRUD operations for the **ArbitrarRegistry** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ArbitrarRegistries
      * const arbitrarRegistries = await prisma.arbitrarRegistry.findMany()
      * ```
      */
    get arbitrarRegistry(): Prisma.ArbitrarRegistryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.threshold`: Exposes CRUD operations for the **Threshold** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Thresholds
      * const thresholds = await prisma.threshold.findMany()
      * ```
      */
    get threshold(): Prisma.ThresholdDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.treasury`: Exposes CRUD operations for the **Treasury** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Treasuries
      * const treasuries = await prisma.treasury.findMany()
      * ```
      */
    get treasury(): Prisma.TreasuryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.fund`: Exposes CRUD operations for the **Fund** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Funds
      * const funds = await prisma.fund.findMany()
      * ```
      */
    get fund(): Prisma.FundDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.candiateProfile`: Exposes CRUD operations for the **CandiateProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CandiateProfiles
      * const candiateProfiles = await prisma.candiateProfile.findMany()
      * ```
      */
    get candiateProfile(): Prisma.CandiateProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.authorityCandidate`: Exposes CRUD operations for the **AuthorityCandidate** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuthorityCandidates
      * const authorityCandidates = await prisma.authorityCandidate.findMany()
      * ```
      */
    get authorityCandidate(): Prisma.AuthorityCandidateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.propertyProposal`: Exposes CRUD operations for the **PropertyProposal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PropertyProposals
      * const propertyProposals = await prisma.propertyProposal.findMany()
      * ```
      */
    get propertyProposal(): Prisma.PropertyProposalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.propertyAccount`: Exposes CRUD operations for the **PropertyAccount** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PropertyAccounts
      * const propertyAccounts = await prisma.propertyAccount.findMany()
      * ```
      */
    get propertyAccount(): Prisma.PropertyAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.salaryClaim`: Exposes CRUD operations for the **SalaryClaim** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SalaryClaims
      * const salaryClaims = await prisma.salaryClaim.findMany()
      * ```
      */
    get salaryClaim(): Prisma.SalaryClaimDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.propertySellProposal`: Exposes CRUD operations for the **PropertySellProposal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PropertySellProposals
      * const propertySellProposals = await prisma.propertySellProposal.findMany()
      * ```
      */
    get propertySellProposal(): Prisma.PropertySellProposalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.propertyBuyProposal`: Exposes CRUD operations for the **PropertyBuyProposal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PropertyBuyProposals
      * const propertyBuyProposals = await prisma.propertyBuyProposal.findMany()
      * ```
      */
    get propertyBuyProposal(): Prisma.PropertyBuyProposalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lease`: Exposes CRUD operations for the **Lease** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Leases
      * const leases = await prisma.lease.findMany()
      * ```
      */
    get lease(): Prisma.LeaseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.challengeProposal`: Exposes CRUD operations for the **ChallengeProposal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ChallengeProposals
      * const challengeProposals = await prisma.challengeProposal.findMany()
      * ```
      */
    get challengeProposal(): Prisma.ChallengeProposalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rankCounter`: Exposes CRUD operations for the **RankCounter** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RankCounters
      * const rankCounters = await prisma.rankCounter.findMany()
      * ```
      */
    get rankCounter(): Prisma.RankCounterDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.offenders`: Exposes CRUD operations for the **Offenders** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Offenders
      * const offenders = await prisma.offenders.findMany()
      * ```
      */
    get offenders(): Prisma.OffendersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.votingForProposal`: Exposes CRUD operations for the **VotingForProposal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VotingForProposals
      * const votingForProposals = await prisma.votingForProposal.findMany()
      * ```
      */
    get votingForProposal(): Prisma.VotingForProposalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.votingForCandiate`: Exposes CRUD operations for the **VotingForCandiate** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more VotingForCandiates
      * const votingForCandiates = await prisma.votingForCandiate.findMany()
      * ```
      */
    get votingForCandiate(): Prisma.VotingForCandiateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.resignation`: Exposes CRUD operations for the **Resignation** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Resignations
      * const resignations = await prisma.resignation.findMany()
      * ```
      */
    get resignation(): Prisma.ResignationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rTChgProposal`: Exposes CRUD operations for the **RTChgProposal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RTChgProposals
      * const rTChgProposals = await prisma.rTChgProposal.findMany()
      * ```
      */
    get rTChgProposal(): Prisma.RTChgProposalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.newThresholdProposal`: Exposes CRUD operations for the **NewThresholdProposal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more NewThresholdProposals
      * const newThresholdProposals = await prisma.newThresholdProposal.findMany()
      * ```
      */
    get newThresholdProposal(): Prisma.NewThresholdProposalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tokenTransferProposal`: Exposes CRUD operations for the **TokenTransferProposal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TokenTransferProposals
      * const tokenTransferProposals = await prisma.tokenTransferProposal.findMany()
      * ```
      */
    get tokenTransferProposal(): Prisma.TokenTransferProposalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.elect`: Exposes CRUD operations for the **Elect** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Elects
      * const elects = await prisma.elect.findMany()
      * ```
      */
    get elect(): Prisma.ElectDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.proposals`: Exposes CRUD operations for the **Proposals** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Proposals
      * const proposals = await prisma.proposals.findMany()
      * ```
      */
    get proposals(): Prisma.ProposalsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map