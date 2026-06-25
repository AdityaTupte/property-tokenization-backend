import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
 * Metrics
 */
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 6.19.3
 * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
        modelProps: "user" | "admin" | "countryApprovalAuthority" | "approveCountryAuthorityReceipt" | "countryProposal" | "countryPda" | "countryAuthorityReceipt" | "approveStateAuthorityReceipt" | "stateProposal" | "statePda" | "stateAuthorityReceipt";
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
export declare const TransactionIsolationLevel: any;
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
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
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
}
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