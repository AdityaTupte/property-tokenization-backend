import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SalaryClaim
 *
 */
export type SalaryClaimModel = runtime.Types.Result.DefaultSelection<Prisma.$SalaryClaimPayload>;
export type AggregateSalaryClaim = {
    _count: SalaryClaimCountAggregateOutputType | null;
    _avg: SalaryClaimAvgAggregateOutputType | null;
    _sum: SalaryClaimSumAggregateOutputType | null;
    _min: SalaryClaimMinAggregateOutputType | null;
    _max: SalaryClaimMaxAggregateOutputType | null;
};
export type SalaryClaimAvgAggregateOutputType = {
    id: number | null;
    amount: number | null;
};
export type SalaryClaimSumAggregateOutputType = {
    id: number | null;
    amount: bigint | null;
};
export type SalaryClaimMinAggregateOutputType = {
    id: number | null;
    payer: string | null;
    from: string | null;
    authority_type: $Enums.AuthorityType | null;
    receipt: string | null;
    claim_time: Date | null;
    amount: bigint | null;
};
export type SalaryClaimMaxAggregateOutputType = {
    id: number | null;
    payer: string | null;
    from: string | null;
    authority_type: $Enums.AuthorityType | null;
    receipt: string | null;
    claim_time: Date | null;
    amount: bigint | null;
};
export type SalaryClaimCountAggregateOutputType = {
    id: number;
    payer: number;
    from: number;
    authority_type: number;
    receipt: number;
    claim_time: number;
    amount: number;
    _all: number;
};
export type SalaryClaimAvgAggregateInputType = {
    id?: true;
    amount?: true;
};
export type SalaryClaimSumAggregateInputType = {
    id?: true;
    amount?: true;
};
export type SalaryClaimMinAggregateInputType = {
    id?: true;
    payer?: true;
    from?: true;
    authority_type?: true;
    receipt?: true;
    claim_time?: true;
    amount?: true;
};
export type SalaryClaimMaxAggregateInputType = {
    id?: true;
    payer?: true;
    from?: true;
    authority_type?: true;
    receipt?: true;
    claim_time?: true;
    amount?: true;
};
export type SalaryClaimCountAggregateInputType = {
    id?: true;
    payer?: true;
    from?: true;
    authority_type?: true;
    receipt?: true;
    claim_time?: true;
    amount?: true;
    _all?: true;
};
export type SalaryClaimAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryClaim to aggregate.
     */
    where?: Prisma.SalaryClaimWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalaryClaims to fetch.
     */
    orderBy?: Prisma.SalaryClaimOrderByWithRelationInput | Prisma.SalaryClaimOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SalaryClaimWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalaryClaims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalaryClaims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SalaryClaims
    **/
    _count?: true | SalaryClaimCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SalaryClaimAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SalaryClaimSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SalaryClaimMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SalaryClaimMaxAggregateInputType;
};
export type GetSalaryClaimAggregateType<T extends SalaryClaimAggregateArgs> = {
    [P in keyof T & keyof AggregateSalaryClaim]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSalaryClaim[P]> : Prisma.GetScalarType<T[P], AggregateSalaryClaim[P]>;
};
export type SalaryClaimGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SalaryClaimWhereInput;
    orderBy?: Prisma.SalaryClaimOrderByWithAggregationInput | Prisma.SalaryClaimOrderByWithAggregationInput[];
    by: Prisma.SalaryClaimScalarFieldEnum[] | Prisma.SalaryClaimScalarFieldEnum;
    having?: Prisma.SalaryClaimScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SalaryClaimCountAggregateInputType | true;
    _avg?: SalaryClaimAvgAggregateInputType;
    _sum?: SalaryClaimSumAggregateInputType;
    _min?: SalaryClaimMinAggregateInputType;
    _max?: SalaryClaimMaxAggregateInputType;
};
export type SalaryClaimGroupByOutputType = {
    id: number;
    payer: string;
    from: string;
    authority_type: $Enums.AuthorityType;
    receipt: string;
    claim_time: Date;
    amount: bigint;
    _count: SalaryClaimCountAggregateOutputType | null;
    _avg: SalaryClaimAvgAggregateOutputType | null;
    _sum: SalaryClaimSumAggregateOutputType | null;
    _min: SalaryClaimMinAggregateOutputType | null;
    _max: SalaryClaimMaxAggregateOutputType | null;
};
export type GetSalaryClaimGroupByPayload<T extends SalaryClaimGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SalaryClaimGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SalaryClaimGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SalaryClaimGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SalaryClaimGroupByOutputType[P]>;
}>>;
export type SalaryClaimWhereInput = {
    AND?: Prisma.SalaryClaimWhereInput | Prisma.SalaryClaimWhereInput[];
    OR?: Prisma.SalaryClaimWhereInput[];
    NOT?: Prisma.SalaryClaimWhereInput | Prisma.SalaryClaimWhereInput[];
    id?: Prisma.IntFilter<"SalaryClaim"> | number;
    payer?: Prisma.StringFilter<"SalaryClaim"> | string;
    from?: Prisma.StringFilter<"SalaryClaim"> | string;
    authority_type?: Prisma.EnumAuthorityTypeFilter<"SalaryClaim"> | $Enums.AuthorityType;
    receipt?: Prisma.StringFilter<"SalaryClaim"> | string;
    claim_time?: Prisma.DateTimeFilter<"SalaryClaim"> | Date | string;
    amount?: Prisma.BigIntFilter<"SalaryClaim"> | bigint | number;
};
export type SalaryClaimOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    payer?: Prisma.SortOrder;
    from?: Prisma.SortOrder;
    authority_type?: Prisma.SortOrder;
    receipt?: Prisma.SortOrder;
    claim_time?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type SalaryClaimWhereUniqueInput = Prisma.AtLeast<{
    id_payer?: Prisma.SalaryClaimIdPayerCompoundUniqueInput;
    AND?: Prisma.SalaryClaimWhereInput | Prisma.SalaryClaimWhereInput[];
    OR?: Prisma.SalaryClaimWhereInput[];
    NOT?: Prisma.SalaryClaimWhereInput | Prisma.SalaryClaimWhereInput[];
    id?: Prisma.IntFilter<"SalaryClaim"> | number;
    payer?: Prisma.StringFilter<"SalaryClaim"> | string;
    from?: Prisma.StringFilter<"SalaryClaim"> | string;
    authority_type?: Prisma.EnumAuthorityTypeFilter<"SalaryClaim"> | $Enums.AuthorityType;
    receipt?: Prisma.StringFilter<"SalaryClaim"> | string;
    claim_time?: Prisma.DateTimeFilter<"SalaryClaim"> | Date | string;
    amount?: Prisma.BigIntFilter<"SalaryClaim"> | bigint | number;
}, "id_payer">;
export type SalaryClaimOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    payer?: Prisma.SortOrder;
    from?: Prisma.SortOrder;
    authority_type?: Prisma.SortOrder;
    receipt?: Prisma.SortOrder;
    claim_time?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    _count?: Prisma.SalaryClaimCountOrderByAggregateInput;
    _avg?: Prisma.SalaryClaimAvgOrderByAggregateInput;
    _max?: Prisma.SalaryClaimMaxOrderByAggregateInput;
    _min?: Prisma.SalaryClaimMinOrderByAggregateInput;
    _sum?: Prisma.SalaryClaimSumOrderByAggregateInput;
};
export type SalaryClaimScalarWhereWithAggregatesInput = {
    AND?: Prisma.SalaryClaimScalarWhereWithAggregatesInput | Prisma.SalaryClaimScalarWhereWithAggregatesInput[];
    OR?: Prisma.SalaryClaimScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SalaryClaimScalarWhereWithAggregatesInput | Prisma.SalaryClaimScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SalaryClaim"> | number;
    payer?: Prisma.StringWithAggregatesFilter<"SalaryClaim"> | string;
    from?: Prisma.StringWithAggregatesFilter<"SalaryClaim"> | string;
    authority_type?: Prisma.EnumAuthorityTypeWithAggregatesFilter<"SalaryClaim"> | $Enums.AuthorityType;
    receipt?: Prisma.StringWithAggregatesFilter<"SalaryClaim"> | string;
    claim_time?: Prisma.DateTimeWithAggregatesFilter<"SalaryClaim"> | Date | string;
    amount?: Prisma.BigIntWithAggregatesFilter<"SalaryClaim"> | bigint | number;
};
export type SalaryClaimCreateInput = {
    id?: number;
    payer: string;
    from: string;
    authority_type: $Enums.AuthorityType;
    receipt: string;
    claim_time?: Date | string;
    amount: bigint | number;
};
export type SalaryClaimUncheckedCreateInput = {
    id?: number;
    payer: string;
    from: string;
    authority_type: $Enums.AuthorityType;
    receipt: string;
    claim_time?: Date | string;
    amount: bigint | number;
};
export type SalaryClaimUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    payer?: Prisma.StringFieldUpdateOperationsInput | string;
    from?: Prisma.StringFieldUpdateOperationsInput | string;
    authority_type?: Prisma.EnumAuthorityTypeFieldUpdateOperationsInput | $Enums.AuthorityType;
    receipt?: Prisma.StringFieldUpdateOperationsInput | string;
    claim_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type SalaryClaimUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    payer?: Prisma.StringFieldUpdateOperationsInput | string;
    from?: Prisma.StringFieldUpdateOperationsInput | string;
    authority_type?: Prisma.EnumAuthorityTypeFieldUpdateOperationsInput | $Enums.AuthorityType;
    receipt?: Prisma.StringFieldUpdateOperationsInput | string;
    claim_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type SalaryClaimCreateManyInput = {
    id?: number;
    payer: string;
    from: string;
    authority_type: $Enums.AuthorityType;
    receipt: string;
    claim_time?: Date | string;
    amount: bigint | number;
};
export type SalaryClaimUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    payer?: Prisma.StringFieldUpdateOperationsInput | string;
    from?: Prisma.StringFieldUpdateOperationsInput | string;
    authority_type?: Prisma.EnumAuthorityTypeFieldUpdateOperationsInput | $Enums.AuthorityType;
    receipt?: Prisma.StringFieldUpdateOperationsInput | string;
    claim_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type SalaryClaimUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    payer?: Prisma.StringFieldUpdateOperationsInput | string;
    from?: Prisma.StringFieldUpdateOperationsInput | string;
    authority_type?: Prisma.EnumAuthorityTypeFieldUpdateOperationsInput | $Enums.AuthorityType;
    receipt?: Prisma.StringFieldUpdateOperationsInput | string;
    claim_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    amount?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
};
export type SalaryClaimIdPayerCompoundUniqueInput = {
    id: number;
    payer: string;
};
export type SalaryClaimCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payer?: Prisma.SortOrder;
    from?: Prisma.SortOrder;
    authority_type?: Prisma.SortOrder;
    receipt?: Prisma.SortOrder;
    claim_time?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type SalaryClaimAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type SalaryClaimMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payer?: Prisma.SortOrder;
    from?: Prisma.SortOrder;
    authority_type?: Prisma.SortOrder;
    receipt?: Prisma.SortOrder;
    claim_time?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type SalaryClaimMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    payer?: Prisma.SortOrder;
    from?: Prisma.SortOrder;
    authority_type?: Prisma.SortOrder;
    receipt?: Prisma.SortOrder;
    claim_time?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type SalaryClaimSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type SalaryClaimSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payer?: boolean;
    from?: boolean;
    authority_type?: boolean;
    receipt?: boolean;
    claim_time?: boolean;
    amount?: boolean;
}, ExtArgs["result"]["salaryClaim"]>;
export type SalaryClaimSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payer?: boolean;
    from?: boolean;
    authority_type?: boolean;
    receipt?: boolean;
    claim_time?: boolean;
    amount?: boolean;
}, ExtArgs["result"]["salaryClaim"]>;
export type SalaryClaimSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    payer?: boolean;
    from?: boolean;
    authority_type?: boolean;
    receipt?: boolean;
    claim_time?: boolean;
    amount?: boolean;
}, ExtArgs["result"]["salaryClaim"]>;
export type SalaryClaimSelectScalar = {
    id?: boolean;
    payer?: boolean;
    from?: boolean;
    authority_type?: boolean;
    receipt?: boolean;
    claim_time?: boolean;
    amount?: boolean;
};
export type SalaryClaimOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "payer" | "from" | "authority_type" | "receipt" | "claim_time" | "amount", ExtArgs["result"]["salaryClaim"]>;
export type $SalaryClaimPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SalaryClaim";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        payer: string;
        from: string;
        authority_type: $Enums.AuthorityType;
        receipt: string;
        claim_time: Date;
        amount: bigint;
    }, ExtArgs["result"]["salaryClaim"]>;
    composites: {};
};
export type SalaryClaimGetPayload<S extends boolean | null | undefined | SalaryClaimDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload, S>;
export type SalaryClaimCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SalaryClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SalaryClaimCountAggregateInputType | true;
};
export interface SalaryClaimDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SalaryClaim'];
        meta: {
            name: 'SalaryClaim';
        };
    };
    /**
     * Find zero or one SalaryClaim that matches the filter.
     * @param {SalaryClaimFindUniqueArgs} args - Arguments to find a SalaryClaim
     * @example
     * // Get one SalaryClaim
     * const salaryClaim = await prisma.salaryClaim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryClaimFindUniqueArgs>(args: Prisma.SelectSubset<T, SalaryClaimFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SalaryClaimClient<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SalaryClaim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaryClaimFindUniqueOrThrowArgs} args - Arguments to find a SalaryClaim
     * @example
     * // Get one SalaryClaim
     * const salaryClaim = await prisma.salaryClaim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryClaimFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SalaryClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalaryClaimClient<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SalaryClaim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryClaimFindFirstArgs} args - Arguments to find a SalaryClaim
     * @example
     * // Get one SalaryClaim
     * const salaryClaim = await prisma.salaryClaim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryClaimFindFirstArgs>(args?: Prisma.SelectSubset<T, SalaryClaimFindFirstArgs<ExtArgs>>): Prisma.Prisma__SalaryClaimClient<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SalaryClaim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryClaimFindFirstOrThrowArgs} args - Arguments to find a SalaryClaim
     * @example
     * // Get one SalaryClaim
     * const salaryClaim = await prisma.salaryClaim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryClaimFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SalaryClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SalaryClaimClient<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SalaryClaims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalaryClaims
     * const salaryClaims = await prisma.salaryClaim.findMany()
     *
     * // Get first 10 SalaryClaims
     * const salaryClaims = await prisma.salaryClaim.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const salaryClaimWithIdOnly = await prisma.salaryClaim.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SalaryClaimFindManyArgs>(args?: Prisma.SelectSubset<T, SalaryClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SalaryClaim.
     * @param {SalaryClaimCreateArgs} args - Arguments to create a SalaryClaim.
     * @example
     * // Create one SalaryClaim
     * const SalaryClaim = await prisma.salaryClaim.create({
     *   data: {
     *     // ... data to create a SalaryClaim
     *   }
     * })
     *
     */
    create<T extends SalaryClaimCreateArgs>(args: Prisma.SelectSubset<T, SalaryClaimCreateArgs<ExtArgs>>): Prisma.Prisma__SalaryClaimClient<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SalaryClaims.
     * @param {SalaryClaimCreateManyArgs} args - Arguments to create many SalaryClaims.
     * @example
     * // Create many SalaryClaims
     * const salaryClaim = await prisma.salaryClaim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SalaryClaimCreateManyArgs>(args?: Prisma.SelectSubset<T, SalaryClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SalaryClaims and returns the data saved in the database.
     * @param {SalaryClaimCreateManyAndReturnArgs} args - Arguments to create many SalaryClaims.
     * @example
     * // Create many SalaryClaims
     * const salaryClaim = await prisma.salaryClaim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SalaryClaims and only return the `id`
     * const salaryClaimWithIdOnly = await prisma.salaryClaim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SalaryClaimCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SalaryClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SalaryClaim.
     * @param {SalaryClaimDeleteArgs} args - Arguments to delete one SalaryClaim.
     * @example
     * // Delete one SalaryClaim
     * const SalaryClaim = await prisma.salaryClaim.delete({
     *   where: {
     *     // ... filter to delete one SalaryClaim
     *   }
     * })
     *
     */
    delete<T extends SalaryClaimDeleteArgs>(args: Prisma.SelectSubset<T, SalaryClaimDeleteArgs<ExtArgs>>): Prisma.Prisma__SalaryClaimClient<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SalaryClaim.
     * @param {SalaryClaimUpdateArgs} args - Arguments to update one SalaryClaim.
     * @example
     * // Update one SalaryClaim
     * const salaryClaim = await prisma.salaryClaim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SalaryClaimUpdateArgs>(args: Prisma.SelectSubset<T, SalaryClaimUpdateArgs<ExtArgs>>): Prisma.Prisma__SalaryClaimClient<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SalaryClaims.
     * @param {SalaryClaimDeleteManyArgs} args - Arguments to filter SalaryClaims to delete.
     * @example
     * // Delete a few SalaryClaims
     * const { count } = await prisma.salaryClaim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SalaryClaimDeleteManyArgs>(args?: Prisma.SelectSubset<T, SalaryClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SalaryClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalaryClaims
     * const salaryClaim = await prisma.salaryClaim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SalaryClaimUpdateManyArgs>(args: Prisma.SelectSubset<T, SalaryClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SalaryClaims and returns the data updated in the database.
     * @param {SalaryClaimUpdateManyAndReturnArgs} args - Arguments to update many SalaryClaims.
     * @example
     * // Update many SalaryClaims
     * const salaryClaim = await prisma.salaryClaim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SalaryClaims and only return the `id`
     * const salaryClaimWithIdOnly = await prisma.salaryClaim.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SalaryClaimUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SalaryClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SalaryClaim.
     * @param {SalaryClaimUpsertArgs} args - Arguments to update or create a SalaryClaim.
     * @example
     * // Update or create a SalaryClaim
     * const salaryClaim = await prisma.salaryClaim.upsert({
     *   create: {
     *     // ... data to create a SalaryClaim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalaryClaim we want to update
     *   }
     * })
     */
    upsert<T extends SalaryClaimUpsertArgs>(args: Prisma.SelectSubset<T, SalaryClaimUpsertArgs<ExtArgs>>): Prisma.Prisma__SalaryClaimClient<runtime.Types.Result.GetResult<Prisma.$SalaryClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SalaryClaims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryClaimCountArgs} args - Arguments to filter SalaryClaims to count.
     * @example
     * // Count the number of SalaryClaims
     * const count = await prisma.salaryClaim.count({
     *   where: {
     *     // ... the filter for the SalaryClaims we want to count
     *   }
     * })
    **/
    count<T extends SalaryClaimCountArgs>(args?: Prisma.Subset<T, SalaryClaimCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SalaryClaimCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SalaryClaim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalaryClaimAggregateArgs>(args: Prisma.Subset<T, SalaryClaimAggregateArgs>): Prisma.PrismaPromise<GetSalaryClaimAggregateType<T>>;
    /**
     * Group by SalaryClaim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryClaimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends SalaryClaimGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SalaryClaimGroupByArgs['orderBy'];
    } : {
        orderBy?: SalaryClaimGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SalaryClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SalaryClaim model
     */
    readonly fields: SalaryClaimFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SalaryClaim.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SalaryClaimClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the SalaryClaim model
 */
export interface SalaryClaimFieldRefs {
    readonly id: Prisma.FieldRef<"SalaryClaim", 'Int'>;
    readonly payer: Prisma.FieldRef<"SalaryClaim", 'String'>;
    readonly from: Prisma.FieldRef<"SalaryClaim", 'String'>;
    readonly authority_type: Prisma.FieldRef<"SalaryClaim", 'AuthorityType'>;
    readonly receipt: Prisma.FieldRef<"SalaryClaim", 'String'>;
    readonly claim_time: Prisma.FieldRef<"SalaryClaim", 'DateTime'>;
    readonly amount: Prisma.FieldRef<"SalaryClaim", 'BigInt'>;
}
/**
 * SalaryClaim findUnique
 */
export type SalaryClaimFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * Filter, which SalaryClaim to fetch.
     */
    where: Prisma.SalaryClaimWhereUniqueInput;
};
/**
 * SalaryClaim findUniqueOrThrow
 */
export type SalaryClaimFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * Filter, which SalaryClaim to fetch.
     */
    where: Prisma.SalaryClaimWhereUniqueInput;
};
/**
 * SalaryClaim findFirst
 */
export type SalaryClaimFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * Filter, which SalaryClaim to fetch.
     */
    where?: Prisma.SalaryClaimWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalaryClaims to fetch.
     */
    orderBy?: Prisma.SalaryClaimOrderByWithRelationInput | Prisma.SalaryClaimOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SalaryClaims.
     */
    cursor?: Prisma.SalaryClaimWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalaryClaims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalaryClaims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalaryClaims.
     */
    distinct?: Prisma.SalaryClaimScalarFieldEnum | Prisma.SalaryClaimScalarFieldEnum[];
};
/**
 * SalaryClaim findFirstOrThrow
 */
export type SalaryClaimFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * Filter, which SalaryClaim to fetch.
     */
    where?: Prisma.SalaryClaimWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalaryClaims to fetch.
     */
    orderBy?: Prisma.SalaryClaimOrderByWithRelationInput | Prisma.SalaryClaimOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SalaryClaims.
     */
    cursor?: Prisma.SalaryClaimWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalaryClaims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalaryClaims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalaryClaims.
     */
    distinct?: Prisma.SalaryClaimScalarFieldEnum | Prisma.SalaryClaimScalarFieldEnum[];
};
/**
 * SalaryClaim findMany
 */
export type SalaryClaimFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * Filter, which SalaryClaims to fetch.
     */
    where?: Prisma.SalaryClaimWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SalaryClaims to fetch.
     */
    orderBy?: Prisma.SalaryClaimOrderByWithRelationInput | Prisma.SalaryClaimOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SalaryClaims.
     */
    cursor?: Prisma.SalaryClaimWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SalaryClaims from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SalaryClaims.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SalaryClaims.
     */
    distinct?: Prisma.SalaryClaimScalarFieldEnum | Prisma.SalaryClaimScalarFieldEnum[];
};
/**
 * SalaryClaim create
 */
export type SalaryClaimCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * The data needed to create a SalaryClaim.
     */
    data: Prisma.XOR<Prisma.SalaryClaimCreateInput, Prisma.SalaryClaimUncheckedCreateInput>;
};
/**
 * SalaryClaim createMany
 */
export type SalaryClaimCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalaryClaims.
     */
    data: Prisma.SalaryClaimCreateManyInput | Prisma.SalaryClaimCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SalaryClaim createManyAndReturn
 */
export type SalaryClaimCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * The data used to create many SalaryClaims.
     */
    data: Prisma.SalaryClaimCreateManyInput | Prisma.SalaryClaimCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SalaryClaim update
 */
export type SalaryClaimUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * The data needed to update a SalaryClaim.
     */
    data: Prisma.XOR<Prisma.SalaryClaimUpdateInput, Prisma.SalaryClaimUncheckedUpdateInput>;
    /**
     * Choose, which SalaryClaim to update.
     */
    where: Prisma.SalaryClaimWhereUniqueInput;
};
/**
 * SalaryClaim updateMany
 */
export type SalaryClaimUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SalaryClaims.
     */
    data: Prisma.XOR<Prisma.SalaryClaimUpdateManyMutationInput, Prisma.SalaryClaimUncheckedUpdateManyInput>;
    /**
     * Filter which SalaryClaims to update
     */
    where?: Prisma.SalaryClaimWhereInput;
    /**
     * Limit how many SalaryClaims to update.
     */
    limit?: number;
};
/**
 * SalaryClaim updateManyAndReturn
 */
export type SalaryClaimUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * The data used to update SalaryClaims.
     */
    data: Prisma.XOR<Prisma.SalaryClaimUpdateManyMutationInput, Prisma.SalaryClaimUncheckedUpdateManyInput>;
    /**
     * Filter which SalaryClaims to update
     */
    where?: Prisma.SalaryClaimWhereInput;
    /**
     * Limit how many SalaryClaims to update.
     */
    limit?: number;
};
/**
 * SalaryClaim upsert
 */
export type SalaryClaimUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * The filter to search for the SalaryClaim to update in case it exists.
     */
    where: Prisma.SalaryClaimWhereUniqueInput;
    /**
     * In case the SalaryClaim found by the `where` argument doesn't exist, create a new SalaryClaim with this data.
     */
    create: Prisma.XOR<Prisma.SalaryClaimCreateInput, Prisma.SalaryClaimUncheckedCreateInput>;
    /**
     * In case the SalaryClaim was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SalaryClaimUpdateInput, Prisma.SalaryClaimUncheckedUpdateInput>;
};
/**
 * SalaryClaim delete
 */
export type SalaryClaimDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
    /**
     * Filter which SalaryClaim to delete.
     */
    where: Prisma.SalaryClaimWhereUniqueInput;
};
/**
 * SalaryClaim deleteMany
 */
export type SalaryClaimDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryClaims to delete
     */
    where?: Prisma.SalaryClaimWhereInput;
    /**
     * Limit how many SalaryClaims to delete.
     */
    limit?: number;
};
/**
 * SalaryClaim without action
 */
export type SalaryClaimDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryClaim
     */
    select?: Prisma.SalaryClaimSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SalaryClaim
     */
    omit?: Prisma.SalaryClaimOmit<ExtArgs> | null;
};
//# sourceMappingURL=SalaryClaim.d.ts.map