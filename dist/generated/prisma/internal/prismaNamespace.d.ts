import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "admin" | "countryApprovalAuthority" | "approveCountryAuthorityReceipt" | "countryProposal" | "countryPda" | "countryAuthorityReceipt" | "approveStateAuthorityReceipt" | "stateProposal" | "statePda" | "stateAuthorityReceipt" | "propertySystemAccount" | "dividendPda" | "trusteeRegistry" | "arbitrarRegistry" | "threshold" | "treasury" | "fund" | "candiateProfile" | "authorityCandidate" | "propertyProposal" | "propertyAccount" | "salaryClaim" | "propertySellProposal" | "propertyBuyProposal" | "lease" | "challengeProposal" | "rankCounter" | "offenders" | "votingForProposal" | "votingForCandiate" | "resignation" | "rTChgProposal" | "newThresholdProposal" | "tokenTransferProposal" | "elect" | "proposals";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        admin: {
            payload: Prisma.$adminPayload<ExtArgs>;
            fields: Prisma.adminFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.adminFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                findFirst: {
                    args: Prisma.adminFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                findMany: {
                    args: Prisma.adminFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>[];
                };
                create: {
                    args: Prisma.adminCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                createMany: {
                    args: Prisma.adminCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>[];
                };
                delete: {
                    args: Prisma.adminDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                update: {
                    args: Prisma.adminUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                deleteMany: {
                    args: Prisma.adminDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.adminUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>[];
                };
                upsert: {
                    args: Prisma.adminUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                aggregate: {
                    args: Prisma.AdminAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdmin>;
                };
                groupBy: {
                    args: Prisma.adminGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminGroupByOutputType>[];
                };
                count: {
                    args: Prisma.adminCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminCountAggregateOutputType> | number;
                };
            };
        };
        CountryApprovalAuthority: {
            payload: Prisma.$CountryApprovalAuthorityPayload<ExtArgs>;
            fields: Prisma.CountryApprovalAuthorityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CountryApprovalAuthorityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CountryApprovalAuthorityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload>;
                };
                findFirst: {
                    args: Prisma.CountryApprovalAuthorityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CountryApprovalAuthorityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload>;
                };
                findMany: {
                    args: Prisma.CountryApprovalAuthorityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload>[];
                };
                create: {
                    args: Prisma.CountryApprovalAuthorityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload>;
                };
                createMany: {
                    args: Prisma.CountryApprovalAuthorityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CountryApprovalAuthorityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload>[];
                };
                delete: {
                    args: Prisma.CountryApprovalAuthorityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload>;
                };
                update: {
                    args: Prisma.CountryApprovalAuthorityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload>;
                };
                deleteMany: {
                    args: Prisma.CountryApprovalAuthorityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CountryApprovalAuthorityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CountryApprovalAuthorityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload>[];
                };
                upsert: {
                    args: Prisma.CountryApprovalAuthorityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryApprovalAuthorityPayload>;
                };
                aggregate: {
                    args: Prisma.CountryApprovalAuthorityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCountryApprovalAuthority>;
                };
                groupBy: {
                    args: Prisma.CountryApprovalAuthorityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryApprovalAuthorityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CountryApprovalAuthorityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryApprovalAuthorityCountAggregateOutputType> | number;
                };
            };
        };
        ApproveCountryAuthorityReceipt: {
            payload: Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>;
            fields: Prisma.ApproveCountryAuthorityReceiptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ApproveCountryAuthorityReceiptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ApproveCountryAuthorityReceiptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload>;
                };
                findFirst: {
                    args: Prisma.ApproveCountryAuthorityReceiptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ApproveCountryAuthorityReceiptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload>;
                };
                findMany: {
                    args: Prisma.ApproveCountryAuthorityReceiptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload>[];
                };
                create: {
                    args: Prisma.ApproveCountryAuthorityReceiptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload>;
                };
                createMany: {
                    args: Prisma.ApproveCountryAuthorityReceiptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ApproveCountryAuthorityReceiptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload>[];
                };
                delete: {
                    args: Prisma.ApproveCountryAuthorityReceiptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload>;
                };
                update: {
                    args: Prisma.ApproveCountryAuthorityReceiptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload>;
                };
                deleteMany: {
                    args: Prisma.ApproveCountryAuthorityReceiptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ApproveCountryAuthorityReceiptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ApproveCountryAuthorityReceiptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload>[];
                };
                upsert: {
                    args: Prisma.ApproveCountryAuthorityReceiptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveCountryAuthorityReceiptPayload>;
                };
                aggregate: {
                    args: Prisma.ApproveCountryAuthorityReceiptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApproveCountryAuthorityReceipt>;
                };
                groupBy: {
                    args: Prisma.ApproveCountryAuthorityReceiptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApproveCountryAuthorityReceiptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ApproveCountryAuthorityReceiptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApproveCountryAuthorityReceiptCountAggregateOutputType> | number;
                };
            };
        };
        CountryProposal: {
            payload: Prisma.$CountryProposalPayload<ExtArgs>;
            fields: Prisma.CountryProposalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CountryProposalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CountryProposalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload>;
                };
                findFirst: {
                    args: Prisma.CountryProposalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CountryProposalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload>;
                };
                findMany: {
                    args: Prisma.CountryProposalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload>[];
                };
                create: {
                    args: Prisma.CountryProposalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload>;
                };
                createMany: {
                    args: Prisma.CountryProposalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CountryProposalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload>[];
                };
                delete: {
                    args: Prisma.CountryProposalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload>;
                };
                update: {
                    args: Prisma.CountryProposalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload>;
                };
                deleteMany: {
                    args: Prisma.CountryProposalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CountryProposalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CountryProposalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload>[];
                };
                upsert: {
                    args: Prisma.CountryProposalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryProposalPayload>;
                };
                aggregate: {
                    args: Prisma.CountryProposalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCountryProposal>;
                };
                groupBy: {
                    args: Prisma.CountryProposalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryProposalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CountryProposalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryProposalCountAggregateOutputType> | number;
                };
            };
        };
        CountryPda: {
            payload: Prisma.$CountryPdaPayload<ExtArgs>;
            fields: Prisma.CountryPdaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CountryPdaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CountryPdaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload>;
                };
                findFirst: {
                    args: Prisma.CountryPdaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CountryPdaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload>;
                };
                findMany: {
                    args: Prisma.CountryPdaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload>[];
                };
                create: {
                    args: Prisma.CountryPdaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload>;
                };
                createMany: {
                    args: Prisma.CountryPdaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CountryPdaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload>[];
                };
                delete: {
                    args: Prisma.CountryPdaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload>;
                };
                update: {
                    args: Prisma.CountryPdaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload>;
                };
                deleteMany: {
                    args: Prisma.CountryPdaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CountryPdaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CountryPdaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload>[];
                };
                upsert: {
                    args: Prisma.CountryPdaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryPdaPayload>;
                };
                aggregate: {
                    args: Prisma.CountryPdaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCountryPda>;
                };
                groupBy: {
                    args: Prisma.CountryPdaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryPdaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CountryPdaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryPdaCountAggregateOutputType> | number;
                };
            };
        };
        CountryAuthorityReceipt: {
            payload: Prisma.$CountryAuthorityReceiptPayload<ExtArgs>;
            fields: Prisma.CountryAuthorityReceiptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CountryAuthorityReceiptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CountryAuthorityReceiptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload>;
                };
                findFirst: {
                    args: Prisma.CountryAuthorityReceiptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CountryAuthorityReceiptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload>;
                };
                findMany: {
                    args: Prisma.CountryAuthorityReceiptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload>[];
                };
                create: {
                    args: Prisma.CountryAuthorityReceiptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload>;
                };
                createMany: {
                    args: Prisma.CountryAuthorityReceiptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CountryAuthorityReceiptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload>[];
                };
                delete: {
                    args: Prisma.CountryAuthorityReceiptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload>;
                };
                update: {
                    args: Prisma.CountryAuthorityReceiptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload>;
                };
                deleteMany: {
                    args: Prisma.CountryAuthorityReceiptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CountryAuthorityReceiptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CountryAuthorityReceiptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload>[];
                };
                upsert: {
                    args: Prisma.CountryAuthorityReceiptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CountryAuthorityReceiptPayload>;
                };
                aggregate: {
                    args: Prisma.CountryAuthorityReceiptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCountryAuthorityReceipt>;
                };
                groupBy: {
                    args: Prisma.CountryAuthorityReceiptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryAuthorityReceiptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CountryAuthorityReceiptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CountryAuthorityReceiptCountAggregateOutputType> | number;
                };
            };
        };
        ApproveStateAuthorityReceipt: {
            payload: Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>;
            fields: Prisma.ApproveStateAuthorityReceiptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ApproveStateAuthorityReceiptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ApproveStateAuthorityReceiptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload>;
                };
                findFirst: {
                    args: Prisma.ApproveStateAuthorityReceiptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ApproveStateAuthorityReceiptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload>;
                };
                findMany: {
                    args: Prisma.ApproveStateAuthorityReceiptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload>[];
                };
                create: {
                    args: Prisma.ApproveStateAuthorityReceiptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload>;
                };
                createMany: {
                    args: Prisma.ApproveStateAuthorityReceiptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ApproveStateAuthorityReceiptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload>[];
                };
                delete: {
                    args: Prisma.ApproveStateAuthorityReceiptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload>;
                };
                update: {
                    args: Prisma.ApproveStateAuthorityReceiptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload>;
                };
                deleteMany: {
                    args: Prisma.ApproveStateAuthorityReceiptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ApproveStateAuthorityReceiptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ApproveStateAuthorityReceiptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload>[];
                };
                upsert: {
                    args: Prisma.ApproveStateAuthorityReceiptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ApproveStateAuthorityReceiptPayload>;
                };
                aggregate: {
                    args: Prisma.ApproveStateAuthorityReceiptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateApproveStateAuthorityReceipt>;
                };
                groupBy: {
                    args: Prisma.ApproveStateAuthorityReceiptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApproveStateAuthorityReceiptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ApproveStateAuthorityReceiptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ApproveStateAuthorityReceiptCountAggregateOutputType> | number;
                };
            };
        };
        StateProposal: {
            payload: Prisma.$StateProposalPayload<ExtArgs>;
            fields: Prisma.StateProposalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StateProposalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StateProposalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload>;
                };
                findFirst: {
                    args: Prisma.StateProposalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StateProposalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload>;
                };
                findMany: {
                    args: Prisma.StateProposalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload>[];
                };
                create: {
                    args: Prisma.StateProposalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload>;
                };
                createMany: {
                    args: Prisma.StateProposalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StateProposalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload>[];
                };
                delete: {
                    args: Prisma.StateProposalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload>;
                };
                update: {
                    args: Prisma.StateProposalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload>;
                };
                deleteMany: {
                    args: Prisma.StateProposalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StateProposalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StateProposalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload>[];
                };
                upsert: {
                    args: Prisma.StateProposalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateProposalPayload>;
                };
                aggregate: {
                    args: Prisma.StateProposalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStateProposal>;
                };
                groupBy: {
                    args: Prisma.StateProposalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StateProposalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StateProposalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StateProposalCountAggregateOutputType> | number;
                };
            };
        };
        StatePda: {
            payload: Prisma.$StatePdaPayload<ExtArgs>;
            fields: Prisma.StatePdaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StatePdaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StatePdaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload>;
                };
                findFirst: {
                    args: Prisma.StatePdaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StatePdaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload>;
                };
                findMany: {
                    args: Prisma.StatePdaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload>[];
                };
                create: {
                    args: Prisma.StatePdaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload>;
                };
                createMany: {
                    args: Prisma.StatePdaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StatePdaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload>[];
                };
                delete: {
                    args: Prisma.StatePdaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload>;
                };
                update: {
                    args: Prisma.StatePdaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload>;
                };
                deleteMany: {
                    args: Prisma.StatePdaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StatePdaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StatePdaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload>[];
                };
                upsert: {
                    args: Prisma.StatePdaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePdaPayload>;
                };
                aggregate: {
                    args: Prisma.StatePdaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStatePda>;
                };
                groupBy: {
                    args: Prisma.StatePdaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatePdaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StatePdaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatePdaCountAggregateOutputType> | number;
                };
            };
        };
        StateAuthorityReceipt: {
            payload: Prisma.$StateAuthorityReceiptPayload<ExtArgs>;
            fields: Prisma.StateAuthorityReceiptFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StateAuthorityReceiptFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StateAuthorityReceiptFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload>;
                };
                findFirst: {
                    args: Prisma.StateAuthorityReceiptFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StateAuthorityReceiptFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload>;
                };
                findMany: {
                    args: Prisma.StateAuthorityReceiptFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload>[];
                };
                create: {
                    args: Prisma.StateAuthorityReceiptCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload>;
                };
                createMany: {
                    args: Prisma.StateAuthorityReceiptCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StateAuthorityReceiptCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload>[];
                };
                delete: {
                    args: Prisma.StateAuthorityReceiptDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload>;
                };
                update: {
                    args: Prisma.StateAuthorityReceiptUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload>;
                };
                deleteMany: {
                    args: Prisma.StateAuthorityReceiptDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StateAuthorityReceiptUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StateAuthorityReceiptUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload>[];
                };
                upsert: {
                    args: Prisma.StateAuthorityReceiptUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StateAuthorityReceiptPayload>;
                };
                aggregate: {
                    args: Prisma.StateAuthorityReceiptAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStateAuthorityReceipt>;
                };
                groupBy: {
                    args: Prisma.StateAuthorityReceiptGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StateAuthorityReceiptGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StateAuthorityReceiptCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StateAuthorityReceiptCountAggregateOutputType> | number;
                };
            };
        };
        PropertySystemAccount: {
            payload: Prisma.$PropertySystemAccountPayload<ExtArgs>;
            fields: Prisma.PropertySystemAccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PropertySystemAccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PropertySystemAccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload>;
                };
                findFirst: {
                    args: Prisma.PropertySystemAccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PropertySystemAccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload>;
                };
                findMany: {
                    args: Prisma.PropertySystemAccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload>[];
                };
                create: {
                    args: Prisma.PropertySystemAccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload>;
                };
                createMany: {
                    args: Prisma.PropertySystemAccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PropertySystemAccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload>[];
                };
                delete: {
                    args: Prisma.PropertySystemAccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload>;
                };
                update: {
                    args: Prisma.PropertySystemAccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload>;
                };
                deleteMany: {
                    args: Prisma.PropertySystemAccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PropertySystemAccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PropertySystemAccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload>[];
                };
                upsert: {
                    args: Prisma.PropertySystemAccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySystemAccountPayload>;
                };
                aggregate: {
                    args: Prisma.PropertySystemAccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePropertySystemAccount>;
                };
                groupBy: {
                    args: Prisma.PropertySystemAccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertySystemAccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PropertySystemAccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertySystemAccountCountAggregateOutputType> | number;
                };
            };
        };
        DividendPda: {
            payload: Prisma.$DividendPdaPayload<ExtArgs>;
            fields: Prisma.DividendPdaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DividendPdaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DividendPdaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload>;
                };
                findFirst: {
                    args: Prisma.DividendPdaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DividendPdaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload>;
                };
                findMany: {
                    args: Prisma.DividendPdaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload>[];
                };
                create: {
                    args: Prisma.DividendPdaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload>;
                };
                createMany: {
                    args: Prisma.DividendPdaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DividendPdaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload>[];
                };
                delete: {
                    args: Prisma.DividendPdaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload>;
                };
                update: {
                    args: Prisma.DividendPdaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload>;
                };
                deleteMany: {
                    args: Prisma.DividendPdaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DividendPdaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DividendPdaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload>[];
                };
                upsert: {
                    args: Prisma.DividendPdaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DividendPdaPayload>;
                };
                aggregate: {
                    args: Prisma.DividendPdaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDividendPda>;
                };
                groupBy: {
                    args: Prisma.DividendPdaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DividendPdaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DividendPdaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DividendPdaCountAggregateOutputType> | number;
                };
            };
        };
        TrusteeRegistry: {
            payload: Prisma.$TrusteeRegistryPayload<ExtArgs>;
            fields: Prisma.TrusteeRegistryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TrusteeRegistryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TrusteeRegistryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload>;
                };
                findFirst: {
                    args: Prisma.TrusteeRegistryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TrusteeRegistryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload>;
                };
                findMany: {
                    args: Prisma.TrusteeRegistryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload>[];
                };
                create: {
                    args: Prisma.TrusteeRegistryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload>;
                };
                createMany: {
                    args: Prisma.TrusteeRegistryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TrusteeRegistryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload>[];
                };
                delete: {
                    args: Prisma.TrusteeRegistryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload>;
                };
                update: {
                    args: Prisma.TrusteeRegistryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload>;
                };
                deleteMany: {
                    args: Prisma.TrusteeRegistryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TrusteeRegistryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TrusteeRegistryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload>[];
                };
                upsert: {
                    args: Prisma.TrusteeRegistryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrusteeRegistryPayload>;
                };
                aggregate: {
                    args: Prisma.TrusteeRegistryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTrusteeRegistry>;
                };
                groupBy: {
                    args: Prisma.TrusteeRegistryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrusteeRegistryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TrusteeRegistryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrusteeRegistryCountAggregateOutputType> | number;
                };
            };
        };
        ArbitrarRegistry: {
            payload: Prisma.$ArbitrarRegistryPayload<ExtArgs>;
            fields: Prisma.ArbitrarRegistryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ArbitrarRegistryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ArbitrarRegistryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload>;
                };
                findFirst: {
                    args: Prisma.ArbitrarRegistryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ArbitrarRegistryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload>;
                };
                findMany: {
                    args: Prisma.ArbitrarRegistryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload>[];
                };
                create: {
                    args: Prisma.ArbitrarRegistryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload>;
                };
                createMany: {
                    args: Prisma.ArbitrarRegistryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ArbitrarRegistryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload>[];
                };
                delete: {
                    args: Prisma.ArbitrarRegistryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload>;
                };
                update: {
                    args: Prisma.ArbitrarRegistryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload>;
                };
                deleteMany: {
                    args: Prisma.ArbitrarRegistryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ArbitrarRegistryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ArbitrarRegistryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload>[];
                };
                upsert: {
                    args: Prisma.ArbitrarRegistryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArbitrarRegistryPayload>;
                };
                aggregate: {
                    args: Prisma.ArbitrarRegistryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateArbitrarRegistry>;
                };
                groupBy: {
                    args: Prisma.ArbitrarRegistryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArbitrarRegistryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ArbitrarRegistryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArbitrarRegistryCountAggregateOutputType> | number;
                };
            };
        };
        Threshold: {
            payload: Prisma.$ThresholdPayload<ExtArgs>;
            fields: Prisma.ThresholdFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ThresholdFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ThresholdFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload>;
                };
                findFirst: {
                    args: Prisma.ThresholdFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ThresholdFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload>;
                };
                findMany: {
                    args: Prisma.ThresholdFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload>[];
                };
                create: {
                    args: Prisma.ThresholdCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload>;
                };
                createMany: {
                    args: Prisma.ThresholdCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ThresholdCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload>[];
                };
                delete: {
                    args: Prisma.ThresholdDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload>;
                };
                update: {
                    args: Prisma.ThresholdUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload>;
                };
                deleteMany: {
                    args: Prisma.ThresholdDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ThresholdUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ThresholdUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload>[];
                };
                upsert: {
                    args: Prisma.ThresholdUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ThresholdPayload>;
                };
                aggregate: {
                    args: Prisma.ThresholdAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateThreshold>;
                };
                groupBy: {
                    args: Prisma.ThresholdGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ThresholdGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ThresholdCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ThresholdCountAggregateOutputType> | number;
                };
            };
        };
        Treasury: {
            payload: Prisma.$TreasuryPayload<ExtArgs>;
            fields: Prisma.TreasuryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TreasuryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TreasuryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload>;
                };
                findFirst: {
                    args: Prisma.TreasuryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TreasuryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload>;
                };
                findMany: {
                    args: Prisma.TreasuryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload>[];
                };
                create: {
                    args: Prisma.TreasuryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload>;
                };
                createMany: {
                    args: Prisma.TreasuryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TreasuryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload>[];
                };
                delete: {
                    args: Prisma.TreasuryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload>;
                };
                update: {
                    args: Prisma.TreasuryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload>;
                };
                deleteMany: {
                    args: Prisma.TreasuryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TreasuryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TreasuryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload>[];
                };
                upsert: {
                    args: Prisma.TreasuryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TreasuryPayload>;
                };
                aggregate: {
                    args: Prisma.TreasuryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTreasury>;
                };
                groupBy: {
                    args: Prisma.TreasuryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TreasuryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TreasuryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TreasuryCountAggregateOutputType> | number;
                };
            };
        };
        Fund: {
            payload: Prisma.$FundPayload<ExtArgs>;
            fields: Prisma.FundFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FundFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FundFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload>;
                };
                findFirst: {
                    args: Prisma.FundFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FundFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload>;
                };
                findMany: {
                    args: Prisma.FundFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload>[];
                };
                create: {
                    args: Prisma.FundCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload>;
                };
                createMany: {
                    args: Prisma.FundCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FundCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload>[];
                };
                delete: {
                    args: Prisma.FundDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload>;
                };
                update: {
                    args: Prisma.FundUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload>;
                };
                deleteMany: {
                    args: Prisma.FundDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FundUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FundUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload>[];
                };
                upsert: {
                    args: Prisma.FundUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FundPayload>;
                };
                aggregate: {
                    args: Prisma.FundAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFund>;
                };
                groupBy: {
                    args: Prisma.FundGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FundGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FundCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FundCountAggregateOutputType> | number;
                };
            };
        };
        CandiateProfile: {
            payload: Prisma.$CandiateProfilePayload<ExtArgs>;
            fields: Prisma.CandiateProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CandiateProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CandiateProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload>;
                };
                findFirst: {
                    args: Prisma.CandiateProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CandiateProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload>;
                };
                findMany: {
                    args: Prisma.CandiateProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload>[];
                };
                create: {
                    args: Prisma.CandiateProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload>;
                };
                createMany: {
                    args: Prisma.CandiateProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CandiateProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload>[];
                };
                delete: {
                    args: Prisma.CandiateProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload>;
                };
                update: {
                    args: Prisma.CandiateProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.CandiateProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CandiateProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CandiateProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload>[];
                };
                upsert: {
                    args: Prisma.CandiateProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CandiateProfilePayload>;
                };
                aggregate: {
                    args: Prisma.CandiateProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCandiateProfile>;
                };
                groupBy: {
                    args: Prisma.CandiateProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CandiateProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CandiateProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CandiateProfileCountAggregateOutputType> | number;
                };
            };
        };
        AuthorityCandidate: {
            payload: Prisma.$AuthorityCandidatePayload<ExtArgs>;
            fields: Prisma.AuthorityCandidateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuthorityCandidateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuthorityCandidateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload>;
                };
                findFirst: {
                    args: Prisma.AuthorityCandidateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuthorityCandidateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload>;
                };
                findMany: {
                    args: Prisma.AuthorityCandidateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload>[];
                };
                create: {
                    args: Prisma.AuthorityCandidateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload>;
                };
                createMany: {
                    args: Prisma.AuthorityCandidateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuthorityCandidateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload>[];
                };
                delete: {
                    args: Prisma.AuthorityCandidateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload>;
                };
                update: {
                    args: Prisma.AuthorityCandidateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload>;
                };
                deleteMany: {
                    args: Prisma.AuthorityCandidateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuthorityCandidateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuthorityCandidateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload>[];
                };
                upsert: {
                    args: Prisma.AuthorityCandidateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorityCandidatePayload>;
                };
                aggregate: {
                    args: Prisma.AuthorityCandidateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuthorityCandidate>;
                };
                groupBy: {
                    args: Prisma.AuthorityCandidateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuthorityCandidateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuthorityCandidateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuthorityCandidateCountAggregateOutputType> | number;
                };
            };
        };
        PropertyProposal: {
            payload: Prisma.$PropertyProposalPayload<ExtArgs>;
            fields: Prisma.PropertyProposalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PropertyProposalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PropertyProposalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload>;
                };
                findFirst: {
                    args: Prisma.PropertyProposalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PropertyProposalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload>;
                };
                findMany: {
                    args: Prisma.PropertyProposalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload>[];
                };
                create: {
                    args: Prisma.PropertyProposalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload>;
                };
                createMany: {
                    args: Prisma.PropertyProposalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PropertyProposalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload>[];
                };
                delete: {
                    args: Prisma.PropertyProposalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload>;
                };
                update: {
                    args: Prisma.PropertyProposalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload>;
                };
                deleteMany: {
                    args: Prisma.PropertyProposalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PropertyProposalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PropertyProposalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload>[];
                };
                upsert: {
                    args: Prisma.PropertyProposalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyProposalPayload>;
                };
                aggregate: {
                    args: Prisma.PropertyProposalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePropertyProposal>;
                };
                groupBy: {
                    args: Prisma.PropertyProposalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertyProposalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PropertyProposalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertyProposalCountAggregateOutputType> | number;
                };
            };
        };
        PropertyAccount: {
            payload: Prisma.$PropertyAccountPayload<ExtArgs>;
            fields: Prisma.PropertyAccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PropertyAccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PropertyAccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload>;
                };
                findFirst: {
                    args: Prisma.PropertyAccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PropertyAccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload>;
                };
                findMany: {
                    args: Prisma.PropertyAccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload>[];
                };
                create: {
                    args: Prisma.PropertyAccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload>;
                };
                createMany: {
                    args: Prisma.PropertyAccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PropertyAccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload>[];
                };
                delete: {
                    args: Prisma.PropertyAccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload>;
                };
                update: {
                    args: Prisma.PropertyAccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload>;
                };
                deleteMany: {
                    args: Prisma.PropertyAccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PropertyAccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PropertyAccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload>[];
                };
                upsert: {
                    args: Prisma.PropertyAccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyAccountPayload>;
                };
                aggregate: {
                    args: Prisma.PropertyAccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePropertyAccount>;
                };
                groupBy: {
                    args: Prisma.PropertyAccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertyAccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PropertyAccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertyAccountCountAggregateOutputType> | number;
                };
            };
        };
        SalaryClaim: {
            payload: Prisma.$SalaryClaimPayload<ExtArgs>;
            fields: Prisma.SalaryClaimFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SalaryClaimFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SalaryClaimFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload>;
                };
                findFirst: {
                    args: Prisma.SalaryClaimFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SalaryClaimFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload>;
                };
                findMany: {
                    args: Prisma.SalaryClaimFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload>[];
                };
                create: {
                    args: Prisma.SalaryClaimCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload>;
                };
                createMany: {
                    args: Prisma.SalaryClaimCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SalaryClaimCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload>[];
                };
                delete: {
                    args: Prisma.SalaryClaimDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload>;
                };
                update: {
                    args: Prisma.SalaryClaimUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload>;
                };
                deleteMany: {
                    args: Prisma.SalaryClaimDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SalaryClaimUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SalaryClaimUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload>[];
                };
                upsert: {
                    args: Prisma.SalaryClaimUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SalaryClaimPayload>;
                };
                aggregate: {
                    args: Prisma.SalaryClaimAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSalaryClaim>;
                };
                groupBy: {
                    args: Prisma.SalaryClaimGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SalaryClaimGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SalaryClaimCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SalaryClaimCountAggregateOutputType> | number;
                };
            };
        };
        PropertySellProposal: {
            payload: Prisma.$PropertySellProposalPayload<ExtArgs>;
            fields: Prisma.PropertySellProposalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PropertySellProposalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PropertySellProposalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload>;
                };
                findFirst: {
                    args: Prisma.PropertySellProposalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PropertySellProposalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload>;
                };
                findMany: {
                    args: Prisma.PropertySellProposalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload>[];
                };
                create: {
                    args: Prisma.PropertySellProposalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload>;
                };
                createMany: {
                    args: Prisma.PropertySellProposalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PropertySellProposalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload>[];
                };
                delete: {
                    args: Prisma.PropertySellProposalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload>;
                };
                update: {
                    args: Prisma.PropertySellProposalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload>;
                };
                deleteMany: {
                    args: Prisma.PropertySellProposalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PropertySellProposalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PropertySellProposalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload>[];
                };
                upsert: {
                    args: Prisma.PropertySellProposalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertySellProposalPayload>;
                };
                aggregate: {
                    args: Prisma.PropertySellProposalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePropertySellProposal>;
                };
                groupBy: {
                    args: Prisma.PropertySellProposalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertySellProposalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PropertySellProposalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertySellProposalCountAggregateOutputType> | number;
                };
            };
        };
        PropertyBuyProposal: {
            payload: Prisma.$PropertyBuyProposalPayload<ExtArgs>;
            fields: Prisma.PropertyBuyProposalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PropertyBuyProposalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PropertyBuyProposalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload>;
                };
                findFirst: {
                    args: Prisma.PropertyBuyProposalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PropertyBuyProposalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload>;
                };
                findMany: {
                    args: Prisma.PropertyBuyProposalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload>[];
                };
                create: {
                    args: Prisma.PropertyBuyProposalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload>;
                };
                createMany: {
                    args: Prisma.PropertyBuyProposalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PropertyBuyProposalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload>[];
                };
                delete: {
                    args: Prisma.PropertyBuyProposalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload>;
                };
                update: {
                    args: Prisma.PropertyBuyProposalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload>;
                };
                deleteMany: {
                    args: Prisma.PropertyBuyProposalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PropertyBuyProposalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PropertyBuyProposalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload>[];
                };
                upsert: {
                    args: Prisma.PropertyBuyProposalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PropertyBuyProposalPayload>;
                };
                aggregate: {
                    args: Prisma.PropertyBuyProposalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePropertyBuyProposal>;
                };
                groupBy: {
                    args: Prisma.PropertyBuyProposalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertyBuyProposalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PropertyBuyProposalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertyBuyProposalCountAggregateOutputType> | number;
                };
            };
        };
        Lease: {
            payload: Prisma.$LeasePayload<ExtArgs>;
            fields: Prisma.LeaseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LeaseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LeaseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload>;
                };
                findFirst: {
                    args: Prisma.LeaseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LeaseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload>;
                };
                findMany: {
                    args: Prisma.LeaseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload>[];
                };
                create: {
                    args: Prisma.LeaseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload>;
                };
                createMany: {
                    args: Prisma.LeaseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LeaseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload>[];
                };
                delete: {
                    args: Prisma.LeaseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload>;
                };
                update: {
                    args: Prisma.LeaseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload>;
                };
                deleteMany: {
                    args: Prisma.LeaseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LeaseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LeaseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload>[];
                };
                upsert: {
                    args: Prisma.LeaseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LeasePayload>;
                };
                aggregate: {
                    args: Prisma.LeaseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLease>;
                };
                groupBy: {
                    args: Prisma.LeaseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LeaseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LeaseCountAggregateOutputType> | number;
                };
            };
        };
        ChallengeProposal: {
            payload: Prisma.$ChallengeProposalPayload<ExtArgs>;
            fields: Prisma.ChallengeProposalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChallengeProposalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChallengeProposalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload>;
                };
                findFirst: {
                    args: Prisma.ChallengeProposalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChallengeProposalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload>;
                };
                findMany: {
                    args: Prisma.ChallengeProposalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload>[];
                };
                create: {
                    args: Prisma.ChallengeProposalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload>;
                };
                createMany: {
                    args: Prisma.ChallengeProposalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChallengeProposalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload>[];
                };
                delete: {
                    args: Prisma.ChallengeProposalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload>;
                };
                update: {
                    args: Prisma.ChallengeProposalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload>;
                };
                deleteMany: {
                    args: Prisma.ChallengeProposalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChallengeProposalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChallengeProposalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload>[];
                };
                upsert: {
                    args: Prisma.ChallengeProposalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChallengeProposalPayload>;
                };
                aggregate: {
                    args: Prisma.ChallengeProposalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChallengeProposal>;
                };
                groupBy: {
                    args: Prisma.ChallengeProposalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChallengeProposalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChallengeProposalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChallengeProposalCountAggregateOutputType> | number;
                };
            };
        };
        RankCounter: {
            payload: Prisma.$RankCounterPayload<ExtArgs>;
            fields: Prisma.RankCounterFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RankCounterFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RankCounterFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload>;
                };
                findFirst: {
                    args: Prisma.RankCounterFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RankCounterFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload>;
                };
                findMany: {
                    args: Prisma.RankCounterFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload>[];
                };
                create: {
                    args: Prisma.RankCounterCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload>;
                };
                createMany: {
                    args: Prisma.RankCounterCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RankCounterCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload>[];
                };
                delete: {
                    args: Prisma.RankCounterDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload>;
                };
                update: {
                    args: Prisma.RankCounterUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload>;
                };
                deleteMany: {
                    args: Prisma.RankCounterDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RankCounterUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RankCounterUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload>[];
                };
                upsert: {
                    args: Prisma.RankCounterUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RankCounterPayload>;
                };
                aggregate: {
                    args: Prisma.RankCounterAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRankCounter>;
                };
                groupBy: {
                    args: Prisma.RankCounterGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RankCounterGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RankCounterCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RankCounterCountAggregateOutputType> | number;
                };
            };
        };
        Offenders: {
            payload: Prisma.$OffendersPayload<ExtArgs>;
            fields: Prisma.OffendersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OffendersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OffendersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload>;
                };
                findFirst: {
                    args: Prisma.OffendersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OffendersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload>;
                };
                findMany: {
                    args: Prisma.OffendersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload>[];
                };
                create: {
                    args: Prisma.OffendersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload>;
                };
                createMany: {
                    args: Prisma.OffendersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OffendersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload>[];
                };
                delete: {
                    args: Prisma.OffendersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload>;
                };
                update: {
                    args: Prisma.OffendersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload>;
                };
                deleteMany: {
                    args: Prisma.OffendersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OffendersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OffendersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload>[];
                };
                upsert: {
                    args: Prisma.OffendersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OffendersPayload>;
                };
                aggregate: {
                    args: Prisma.OffendersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOffenders>;
                };
                groupBy: {
                    args: Prisma.OffendersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OffendersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OffendersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OffendersCountAggregateOutputType> | number;
                };
            };
        };
        VotingForProposal: {
            payload: Prisma.$VotingForProposalPayload<ExtArgs>;
            fields: Prisma.VotingForProposalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VotingForProposalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VotingForProposalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload>;
                };
                findFirst: {
                    args: Prisma.VotingForProposalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VotingForProposalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload>;
                };
                findMany: {
                    args: Prisma.VotingForProposalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload>[];
                };
                create: {
                    args: Prisma.VotingForProposalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload>;
                };
                createMany: {
                    args: Prisma.VotingForProposalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VotingForProposalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload>[];
                };
                delete: {
                    args: Prisma.VotingForProposalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload>;
                };
                update: {
                    args: Prisma.VotingForProposalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload>;
                };
                deleteMany: {
                    args: Prisma.VotingForProposalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VotingForProposalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VotingForProposalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload>[];
                };
                upsert: {
                    args: Prisma.VotingForProposalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForProposalPayload>;
                };
                aggregate: {
                    args: Prisma.VotingForProposalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVotingForProposal>;
                };
                groupBy: {
                    args: Prisma.VotingForProposalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VotingForProposalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VotingForProposalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VotingForProposalCountAggregateOutputType> | number;
                };
            };
        };
        VotingForCandiate: {
            payload: Prisma.$VotingForCandiatePayload<ExtArgs>;
            fields: Prisma.VotingForCandiateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VotingForCandiateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VotingForCandiateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload>;
                };
                findFirst: {
                    args: Prisma.VotingForCandiateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VotingForCandiateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload>;
                };
                findMany: {
                    args: Prisma.VotingForCandiateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload>[];
                };
                create: {
                    args: Prisma.VotingForCandiateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload>;
                };
                createMany: {
                    args: Prisma.VotingForCandiateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VotingForCandiateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload>[];
                };
                delete: {
                    args: Prisma.VotingForCandiateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload>;
                };
                update: {
                    args: Prisma.VotingForCandiateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload>;
                };
                deleteMany: {
                    args: Prisma.VotingForCandiateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VotingForCandiateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VotingForCandiateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload>[];
                };
                upsert: {
                    args: Prisma.VotingForCandiateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotingForCandiatePayload>;
                };
                aggregate: {
                    args: Prisma.VotingForCandiateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVotingForCandiate>;
                };
                groupBy: {
                    args: Prisma.VotingForCandiateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VotingForCandiateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VotingForCandiateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VotingForCandiateCountAggregateOutputType> | number;
                };
            };
        };
        Resignation: {
            payload: Prisma.$ResignationPayload<ExtArgs>;
            fields: Prisma.ResignationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResignationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResignationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload>;
                };
                findFirst: {
                    args: Prisma.ResignationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResignationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload>;
                };
                findMany: {
                    args: Prisma.ResignationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload>[];
                };
                create: {
                    args: Prisma.ResignationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload>;
                };
                createMany: {
                    args: Prisma.ResignationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResignationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload>[];
                };
                delete: {
                    args: Prisma.ResignationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload>;
                };
                update: {
                    args: Prisma.ResignationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload>;
                };
                deleteMany: {
                    args: Prisma.ResignationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResignationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResignationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload>[];
                };
                upsert: {
                    args: Prisma.ResignationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResignationPayload>;
                };
                aggregate: {
                    args: Prisma.ResignationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResignation>;
                };
                groupBy: {
                    args: Prisma.ResignationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResignationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResignationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResignationCountAggregateOutputType> | number;
                };
            };
        };
        RTChgProposal: {
            payload: Prisma.$RTChgProposalPayload<ExtArgs>;
            fields: Prisma.RTChgProposalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RTChgProposalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RTChgProposalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload>;
                };
                findFirst: {
                    args: Prisma.RTChgProposalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RTChgProposalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload>;
                };
                findMany: {
                    args: Prisma.RTChgProposalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload>[];
                };
                create: {
                    args: Prisma.RTChgProposalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload>;
                };
                createMany: {
                    args: Prisma.RTChgProposalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RTChgProposalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload>[];
                };
                delete: {
                    args: Prisma.RTChgProposalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload>;
                };
                update: {
                    args: Prisma.RTChgProposalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload>;
                };
                deleteMany: {
                    args: Prisma.RTChgProposalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RTChgProposalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RTChgProposalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload>[];
                };
                upsert: {
                    args: Prisma.RTChgProposalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RTChgProposalPayload>;
                };
                aggregate: {
                    args: Prisma.RTChgProposalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRTChgProposal>;
                };
                groupBy: {
                    args: Prisma.RTChgProposalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RTChgProposalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RTChgProposalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RTChgProposalCountAggregateOutputType> | number;
                };
            };
        };
        NewThresholdProposal: {
            payload: Prisma.$NewThresholdProposalPayload<ExtArgs>;
            fields: Prisma.NewThresholdProposalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NewThresholdProposalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NewThresholdProposalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload>;
                };
                findFirst: {
                    args: Prisma.NewThresholdProposalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NewThresholdProposalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload>;
                };
                findMany: {
                    args: Prisma.NewThresholdProposalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload>[];
                };
                create: {
                    args: Prisma.NewThresholdProposalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload>;
                };
                createMany: {
                    args: Prisma.NewThresholdProposalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NewThresholdProposalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload>[];
                };
                delete: {
                    args: Prisma.NewThresholdProposalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload>;
                };
                update: {
                    args: Prisma.NewThresholdProposalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload>;
                };
                deleteMany: {
                    args: Prisma.NewThresholdProposalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NewThresholdProposalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NewThresholdProposalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload>[];
                };
                upsert: {
                    args: Prisma.NewThresholdProposalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NewThresholdProposalPayload>;
                };
                aggregate: {
                    args: Prisma.NewThresholdProposalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNewThresholdProposal>;
                };
                groupBy: {
                    args: Prisma.NewThresholdProposalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NewThresholdProposalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NewThresholdProposalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NewThresholdProposalCountAggregateOutputType> | number;
                };
            };
        };
        TokenTransferProposal: {
            payload: Prisma.$TokenTransferProposalPayload<ExtArgs>;
            fields: Prisma.TokenTransferProposalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TokenTransferProposalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TokenTransferProposalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload>;
                };
                findFirst: {
                    args: Prisma.TokenTransferProposalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TokenTransferProposalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload>;
                };
                findMany: {
                    args: Prisma.TokenTransferProposalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload>[];
                };
                create: {
                    args: Prisma.TokenTransferProposalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload>;
                };
                createMany: {
                    args: Prisma.TokenTransferProposalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TokenTransferProposalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload>[];
                };
                delete: {
                    args: Prisma.TokenTransferProposalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload>;
                };
                update: {
                    args: Prisma.TokenTransferProposalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload>;
                };
                deleteMany: {
                    args: Prisma.TokenTransferProposalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TokenTransferProposalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TokenTransferProposalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload>[];
                };
                upsert: {
                    args: Prisma.TokenTransferProposalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TokenTransferProposalPayload>;
                };
                aggregate: {
                    args: Prisma.TokenTransferProposalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTokenTransferProposal>;
                };
                groupBy: {
                    args: Prisma.TokenTransferProposalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TokenTransferProposalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TokenTransferProposalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TokenTransferProposalCountAggregateOutputType> | number;
                };
            };
        };
        Elect: {
            payload: Prisma.$ElectPayload<ExtArgs>;
            fields: Prisma.ElectFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ElectFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ElectFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload>;
                };
                findFirst: {
                    args: Prisma.ElectFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ElectFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload>;
                };
                findMany: {
                    args: Prisma.ElectFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload>[];
                };
                create: {
                    args: Prisma.ElectCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload>;
                };
                createMany: {
                    args: Prisma.ElectCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ElectCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload>[];
                };
                delete: {
                    args: Prisma.ElectDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload>;
                };
                update: {
                    args: Prisma.ElectUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload>;
                };
                deleteMany: {
                    args: Prisma.ElectDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ElectUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ElectUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload>[];
                };
                upsert: {
                    args: Prisma.ElectUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ElectPayload>;
                };
                aggregate: {
                    args: Prisma.ElectAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateElect>;
                };
                groupBy: {
                    args: Prisma.ElectGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ElectGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ElectCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ElectCountAggregateOutputType> | number;
                };
            };
        };
        Proposals: {
            payload: Prisma.$ProposalsPayload<ExtArgs>;
            fields: Prisma.ProposalsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProposalsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProposalsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload>;
                };
                findFirst: {
                    args: Prisma.ProposalsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProposalsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload>;
                };
                findMany: {
                    args: Prisma.ProposalsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload>[];
                };
                create: {
                    args: Prisma.ProposalsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload>;
                };
                createMany: {
                    args: Prisma.ProposalsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProposalsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload>[];
                };
                delete: {
                    args: Prisma.ProposalsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload>;
                };
                update: {
                    args: Prisma.ProposalsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload>;
                };
                deleteMany: {
                    args: Prisma.ProposalsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProposalsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProposalsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload>[];
                };
                upsert: {
                    args: Prisma.ProposalsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProposalsPayload>;
                };
                aggregate: {
                    args: Prisma.ProposalsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProposals>;
                };
                groupBy: {
                    args: Prisma.ProposalsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProposalsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProposalsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProposalsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'FundType'
 */
export type EnumFundTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FundType'>;
/**
 * Reference to a field of type 'FundType[]'
 */
export type ListEnumFundTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FundType[]'>;
/**
 * Reference to a field of type 'BigInt'
 */
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
/**
 * Reference to a field of type 'BigInt[]'
 */
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
/**
 * Reference to a field of type 'ActionsHistory[]'
 */
export type ListEnumActionsHistoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionsHistory[]'>;
/**
 * Reference to a field of type 'ActionsHistory'
 */
export type EnumActionsHistoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionsHistory'>;
/**
 * Reference to a field of type 'AuthorityType'
 */
export type EnumAuthorityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthorityType'>;
/**
 * Reference to a field of type 'AuthorityType[]'
 */
export type ListEnumAuthorityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthorityType[]'>;
/**
 * Reference to a field of type 'LeaseStatus'
 */
export type EnumLeaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaseStatus'>;
/**
 * Reference to a field of type 'LeaseStatus[]'
 */
export type ListEnumLeaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaseStatus[]'>;
/**
 * Reference to a field of type 'ReasonType'
 */
export type EnumReasonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReasonType'>;
/**
 * Reference to a field of type 'ReasonType[]'
 */
export type ListEnumReasonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReasonType[]'>;
/**
 * Reference to a field of type 'ProposalStatus'
 */
export type EnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus'>;
/**
 * Reference to a field of type 'ProposalStatus[]'
 */
export type ListEnumProposalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalStatus[]'>;
/**
 * Reference to a field of type 'ProposalType'
 */
export type EnumProposalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalType'>;
/**
 * Reference to a field of type 'ProposalType[]'
 */
export type ListEnumProposalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProposalType[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    admin?: Prisma.adminOmit;
    countryApprovalAuthority?: Prisma.CountryApprovalAuthorityOmit;
    approveCountryAuthorityReceipt?: Prisma.ApproveCountryAuthorityReceiptOmit;
    countryProposal?: Prisma.CountryProposalOmit;
    countryPda?: Prisma.CountryPdaOmit;
    countryAuthorityReceipt?: Prisma.CountryAuthorityReceiptOmit;
    approveStateAuthorityReceipt?: Prisma.ApproveStateAuthorityReceiptOmit;
    stateProposal?: Prisma.StateProposalOmit;
    statePda?: Prisma.StatePdaOmit;
    stateAuthorityReceipt?: Prisma.StateAuthorityReceiptOmit;
    propertySystemAccount?: Prisma.PropertySystemAccountOmit;
    dividendPda?: Prisma.DividendPdaOmit;
    trusteeRegistry?: Prisma.TrusteeRegistryOmit;
    arbitrarRegistry?: Prisma.ArbitrarRegistryOmit;
    threshold?: Prisma.ThresholdOmit;
    treasury?: Prisma.TreasuryOmit;
    fund?: Prisma.FundOmit;
    candiateProfile?: Prisma.CandiateProfileOmit;
    authorityCandidate?: Prisma.AuthorityCandidateOmit;
    propertyProposal?: Prisma.PropertyProposalOmit;
    propertyAccount?: Prisma.PropertyAccountOmit;
    salaryClaim?: Prisma.SalaryClaimOmit;
    propertySellProposal?: Prisma.PropertySellProposalOmit;
    propertyBuyProposal?: Prisma.PropertyBuyProposalOmit;
    lease?: Prisma.LeaseOmit;
    challengeProposal?: Prisma.ChallengeProposalOmit;
    rankCounter?: Prisma.RankCounterOmit;
    offenders?: Prisma.OffendersOmit;
    votingForProposal?: Prisma.VotingForProposalOmit;
    votingForCandiate?: Prisma.VotingForCandiateOmit;
    resignation?: Prisma.ResignationOmit;
    rTChgProposal?: Prisma.RTChgProposalOmit;
    newThresholdProposal?: Prisma.NewThresholdProposalOmit;
    tokenTransferProposal?: Prisma.TokenTransferProposalOmit;
    elect?: Prisma.ElectOmit;
    proposals?: Prisma.ProposalsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map