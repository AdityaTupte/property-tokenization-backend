import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CountryApprovalAuthority
 *
 */
export type CountryApprovalAuthorityModel = runtime.Types.Result.DefaultSelection<Prisma.$CountryApprovalAuthorityPayload>;
export type AggregateCountryApprovalAuthority = {
    _count: CountryApprovalAuthorityCountAggregateOutputType | null;
    _avg: CountryApprovalAuthorityAvgAggregateOutputType | null;
    _sum: CountryApprovalAuthoritySumAggregateOutputType | null;
    _min: CountryApprovalAuthorityMinAggregateOutputType | null;
    _max: CountryApprovalAuthorityMaxAggregateOutputType | null;
};
export type CountryApprovalAuthorityAvgAggregateOutputType = {
    threshold: number | null;
    bump: number | null;
};
export type CountryApprovalAuthoritySumAggregateOutputType = {
    threshold: number | null;
    bump: number | null;
};
export type CountryApprovalAuthorityMinAggregateOutputType = {
    id: string | null;
    threshold: number | null;
    bump: number | null;
    created_time: Date | null;
    last_modified: Date | null;
};
export type CountryApprovalAuthorityMaxAggregateOutputType = {
    id: string | null;
    threshold: number | null;
    bump: number | null;
    created_time: Date | null;
    last_modified: Date | null;
};
export type CountryApprovalAuthorityCountAggregateOutputType = {
    id: number;
    authority: number;
    threshold: number;
    bump: number;
    created_time: number;
    last_modified: number;
    _all: number;
};
export type CountryApprovalAuthorityAvgAggregateInputType = {
    threshold?: true;
    bump?: true;
};
export type CountryApprovalAuthoritySumAggregateInputType = {
    threshold?: true;
    bump?: true;
};
export type CountryApprovalAuthorityMinAggregateInputType = {
    id?: true;
    threshold?: true;
    bump?: true;
    created_time?: true;
    last_modified?: true;
};
export type CountryApprovalAuthorityMaxAggregateInputType = {
    id?: true;
    threshold?: true;
    bump?: true;
    created_time?: true;
    last_modified?: true;
};
export type CountryApprovalAuthorityCountAggregateInputType = {
    id?: true;
    authority?: true;
    threshold?: true;
    bump?: true;
    created_time?: true;
    last_modified?: true;
    _all?: true;
};
export type CountryApprovalAuthorityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CountryApprovalAuthority to aggregate.
     */
    where?: Prisma.CountryApprovalAuthorityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CountryApprovalAuthorities to fetch.
     */
    orderBy?: Prisma.CountryApprovalAuthorityOrderByWithRelationInput | Prisma.CountryApprovalAuthorityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CountryApprovalAuthorityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CountryApprovalAuthorities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CountryApprovalAuthorities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CountryApprovalAuthorities
    **/
    _count?: true | CountryApprovalAuthorityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CountryApprovalAuthorityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CountryApprovalAuthoritySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CountryApprovalAuthorityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CountryApprovalAuthorityMaxAggregateInputType;
};
export type GetCountryApprovalAuthorityAggregateType<T extends CountryApprovalAuthorityAggregateArgs> = {
    [P in keyof T & keyof AggregateCountryApprovalAuthority]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCountryApprovalAuthority[P]> : Prisma.GetScalarType<T[P], AggregateCountryApprovalAuthority[P]>;
};
export type CountryApprovalAuthorityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CountryApprovalAuthorityWhereInput;
    orderBy?: Prisma.CountryApprovalAuthorityOrderByWithAggregationInput | Prisma.CountryApprovalAuthorityOrderByWithAggregationInput[];
    by: Prisma.CountryApprovalAuthorityScalarFieldEnum[] | Prisma.CountryApprovalAuthorityScalarFieldEnum;
    having?: Prisma.CountryApprovalAuthorityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CountryApprovalAuthorityCountAggregateInputType | true;
    _avg?: CountryApprovalAuthorityAvgAggregateInputType;
    _sum?: CountryApprovalAuthoritySumAggregateInputType;
    _min?: CountryApprovalAuthorityMinAggregateInputType;
    _max?: CountryApprovalAuthorityMaxAggregateInputType;
};
export type CountryApprovalAuthorityGroupByOutputType = {
    id: string;
    authority: string[];
    threshold: number;
    bump: number;
    created_time: Date;
    last_modified: Date;
    _count: CountryApprovalAuthorityCountAggregateOutputType | null;
    _avg: CountryApprovalAuthorityAvgAggregateOutputType | null;
    _sum: CountryApprovalAuthoritySumAggregateOutputType | null;
    _min: CountryApprovalAuthorityMinAggregateOutputType | null;
    _max: CountryApprovalAuthorityMaxAggregateOutputType | null;
};
export type GetCountryApprovalAuthorityGroupByPayload<T extends CountryApprovalAuthorityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CountryApprovalAuthorityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CountryApprovalAuthorityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CountryApprovalAuthorityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CountryApprovalAuthorityGroupByOutputType[P]>;
}>>;
export type CountryApprovalAuthorityWhereInput = {
    AND?: Prisma.CountryApprovalAuthorityWhereInput | Prisma.CountryApprovalAuthorityWhereInput[];
    OR?: Prisma.CountryApprovalAuthorityWhereInput[];
    NOT?: Prisma.CountryApprovalAuthorityWhereInput | Prisma.CountryApprovalAuthorityWhereInput[];
    id?: Prisma.StringFilter<"CountryApprovalAuthority"> | string;
    authority?: Prisma.StringNullableListFilter<"CountryApprovalAuthority">;
    threshold?: Prisma.IntFilter<"CountryApprovalAuthority"> | number;
    bump?: Prisma.IntFilter<"CountryApprovalAuthority"> | number;
    created_time?: Prisma.DateTimeFilter<"CountryApprovalAuthority"> | Date | string;
    last_modified?: Prisma.DateTimeFilter<"CountryApprovalAuthority"> | Date | string;
};
export type CountryApprovalAuthorityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    threshold?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    created_time?: Prisma.SortOrder;
    last_modified?: Prisma.SortOrder;
};
export type CountryApprovalAuthorityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CountryApprovalAuthorityWhereInput | Prisma.CountryApprovalAuthorityWhereInput[];
    OR?: Prisma.CountryApprovalAuthorityWhereInput[];
    NOT?: Prisma.CountryApprovalAuthorityWhereInput | Prisma.CountryApprovalAuthorityWhereInput[];
    authority?: Prisma.StringNullableListFilter<"CountryApprovalAuthority">;
    threshold?: Prisma.IntFilter<"CountryApprovalAuthority"> | number;
    bump?: Prisma.IntFilter<"CountryApprovalAuthority"> | number;
    created_time?: Prisma.DateTimeFilter<"CountryApprovalAuthority"> | Date | string;
    last_modified?: Prisma.DateTimeFilter<"CountryApprovalAuthority"> | Date | string;
}, "id">;
export type CountryApprovalAuthorityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    threshold?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    created_time?: Prisma.SortOrder;
    last_modified?: Prisma.SortOrder;
    _count?: Prisma.CountryApprovalAuthorityCountOrderByAggregateInput;
    _avg?: Prisma.CountryApprovalAuthorityAvgOrderByAggregateInput;
    _max?: Prisma.CountryApprovalAuthorityMaxOrderByAggregateInput;
    _min?: Prisma.CountryApprovalAuthorityMinOrderByAggregateInput;
    _sum?: Prisma.CountryApprovalAuthoritySumOrderByAggregateInput;
};
export type CountryApprovalAuthorityScalarWhereWithAggregatesInput = {
    AND?: Prisma.CountryApprovalAuthorityScalarWhereWithAggregatesInput | Prisma.CountryApprovalAuthorityScalarWhereWithAggregatesInput[];
    OR?: Prisma.CountryApprovalAuthorityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CountryApprovalAuthorityScalarWhereWithAggregatesInput | Prisma.CountryApprovalAuthorityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CountryApprovalAuthority"> | string;
    authority?: Prisma.StringNullableListFilter<"CountryApprovalAuthority">;
    threshold?: Prisma.IntWithAggregatesFilter<"CountryApprovalAuthority"> | number;
    bump?: Prisma.IntWithAggregatesFilter<"CountryApprovalAuthority"> | number;
    created_time?: Prisma.DateTimeWithAggregatesFilter<"CountryApprovalAuthority"> | Date | string;
    last_modified?: Prisma.DateTimeWithAggregatesFilter<"CountryApprovalAuthority"> | Date | string;
};
export type CountryApprovalAuthorityCreateInput = {
    id?: string;
    authority?: Prisma.CountryApprovalAuthorityCreateauthorityInput | string[];
    threshold: number;
    bump: number;
    created_time?: Date | string;
    last_modified?: Date | string;
};
export type CountryApprovalAuthorityUncheckedCreateInput = {
    id?: string;
    authority?: Prisma.CountryApprovalAuthorityCreateauthorityInput | string[];
    threshold: number;
    bump: number;
    created_time?: Date | string;
    last_modified?: Date | string;
};
export type CountryApprovalAuthorityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authority?: Prisma.CountryApprovalAuthorityUpdateauthorityInput | string[];
    threshold?: Prisma.IntFieldUpdateOperationsInput | number;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    created_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_modified?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryApprovalAuthorityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authority?: Prisma.CountryApprovalAuthorityUpdateauthorityInput | string[];
    threshold?: Prisma.IntFieldUpdateOperationsInput | number;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    created_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_modified?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryApprovalAuthorityCreateManyInput = {
    id?: string;
    authority?: Prisma.CountryApprovalAuthorityCreateauthorityInput | string[];
    threshold: number;
    bump: number;
    created_time?: Date | string;
    last_modified?: Date | string;
};
export type CountryApprovalAuthorityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authority?: Prisma.CountryApprovalAuthorityUpdateauthorityInput | string[];
    threshold?: Prisma.IntFieldUpdateOperationsInput | number;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    created_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_modified?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountryApprovalAuthorityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    authority?: Prisma.CountryApprovalAuthorityUpdateauthorityInput | string[];
    threshold?: Prisma.IntFieldUpdateOperationsInput | number;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    created_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_modified?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type CountryApprovalAuthorityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    authority?: Prisma.SortOrder;
    threshold?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    created_time?: Prisma.SortOrder;
    last_modified?: Prisma.SortOrder;
};
export type CountryApprovalAuthorityAvgOrderByAggregateInput = {
    threshold?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type CountryApprovalAuthorityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    threshold?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    created_time?: Prisma.SortOrder;
    last_modified?: Prisma.SortOrder;
};
export type CountryApprovalAuthorityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    threshold?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    created_time?: Prisma.SortOrder;
    last_modified?: Prisma.SortOrder;
};
export type CountryApprovalAuthoritySumOrderByAggregateInput = {
    threshold?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type CountryApprovalAuthorityCreateauthorityInput = {
    set: string[];
};
export type CountryApprovalAuthorityUpdateauthorityInput = {
    set?: string[];
    push?: string | string[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CountryApprovalAuthoritySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    authority?: boolean;
    threshold?: boolean;
    bump?: boolean;
    created_time?: boolean;
    last_modified?: boolean;
}, ExtArgs["result"]["countryApprovalAuthority"]>;
export type CountryApprovalAuthoritySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    authority?: boolean;
    threshold?: boolean;
    bump?: boolean;
    created_time?: boolean;
    last_modified?: boolean;
}, ExtArgs["result"]["countryApprovalAuthority"]>;
export type CountryApprovalAuthoritySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    authority?: boolean;
    threshold?: boolean;
    bump?: boolean;
    created_time?: boolean;
    last_modified?: boolean;
}, ExtArgs["result"]["countryApprovalAuthority"]>;
export type CountryApprovalAuthoritySelectScalar = {
    id?: boolean;
    authority?: boolean;
    threshold?: boolean;
    bump?: boolean;
    created_time?: boolean;
    last_modified?: boolean;
};
export type CountryApprovalAuthorityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "authority" | "threshold" | "bump" | "created_time" | "last_modified", ExtArgs["result"]["countryApprovalAuthority"]>;
export type $CountryApprovalAuthorityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CountryApprovalAuthority";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        authority: string[];
        threshold: number;
        bump: number;
        created_time: Date;
        last_modified: Date;
    }, ExtArgs["result"]["countryApprovalAuthority"]>;
    composites: {};
};
export type CountryApprovalAuthorityGetPayload<S extends boolean | null | undefined | CountryApprovalAuthorityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload, S>;
export type CountryApprovalAuthorityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CountryApprovalAuthorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CountryApprovalAuthorityCountAggregateInputType | true;
};
export interface CountryApprovalAuthorityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CountryApprovalAuthority'];
        meta: {
            name: 'CountryApprovalAuthority';
        };
    };
    /**
     * Find zero or one CountryApprovalAuthority that matches the filter.
     * @param {CountryApprovalAuthorityFindUniqueArgs} args - Arguments to find a CountryApprovalAuthority
     * @example
     * // Get one CountryApprovalAuthority
     * const countryApprovalAuthority = await prisma.countryApprovalAuthority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryApprovalAuthorityFindUniqueArgs>(args: Prisma.SelectSubset<T, CountryApprovalAuthorityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CountryApprovalAuthorityClient<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CountryApprovalAuthority that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryApprovalAuthorityFindUniqueOrThrowArgs} args - Arguments to find a CountryApprovalAuthority
     * @example
     * // Get one CountryApprovalAuthority
     * const countryApprovalAuthority = await prisma.countryApprovalAuthority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryApprovalAuthorityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CountryApprovalAuthorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CountryApprovalAuthorityClient<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CountryApprovalAuthority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryApprovalAuthorityFindFirstArgs} args - Arguments to find a CountryApprovalAuthority
     * @example
     * // Get one CountryApprovalAuthority
     * const countryApprovalAuthority = await prisma.countryApprovalAuthority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryApprovalAuthorityFindFirstArgs>(args?: Prisma.SelectSubset<T, CountryApprovalAuthorityFindFirstArgs<ExtArgs>>): Prisma.Prisma__CountryApprovalAuthorityClient<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CountryApprovalAuthority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryApprovalAuthorityFindFirstOrThrowArgs} args - Arguments to find a CountryApprovalAuthority
     * @example
     * // Get one CountryApprovalAuthority
     * const countryApprovalAuthority = await prisma.countryApprovalAuthority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryApprovalAuthorityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CountryApprovalAuthorityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CountryApprovalAuthorityClient<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CountryApprovalAuthorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryApprovalAuthorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountryApprovalAuthorities
     * const countryApprovalAuthorities = await prisma.countryApprovalAuthority.findMany()
     *
     * // Get first 10 CountryApprovalAuthorities
     * const countryApprovalAuthorities = await prisma.countryApprovalAuthority.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const countryApprovalAuthorityWithIdOnly = await prisma.countryApprovalAuthority.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CountryApprovalAuthorityFindManyArgs>(args?: Prisma.SelectSubset<T, CountryApprovalAuthorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CountryApprovalAuthority.
     * @param {CountryApprovalAuthorityCreateArgs} args - Arguments to create a CountryApprovalAuthority.
     * @example
     * // Create one CountryApprovalAuthority
     * const CountryApprovalAuthority = await prisma.countryApprovalAuthority.create({
     *   data: {
     *     // ... data to create a CountryApprovalAuthority
     *   }
     * })
     *
     */
    create<T extends CountryApprovalAuthorityCreateArgs>(args: Prisma.SelectSubset<T, CountryApprovalAuthorityCreateArgs<ExtArgs>>): Prisma.Prisma__CountryApprovalAuthorityClient<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CountryApprovalAuthorities.
     * @param {CountryApprovalAuthorityCreateManyArgs} args - Arguments to create many CountryApprovalAuthorities.
     * @example
     * // Create many CountryApprovalAuthorities
     * const countryApprovalAuthority = await prisma.countryApprovalAuthority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CountryApprovalAuthorityCreateManyArgs>(args?: Prisma.SelectSubset<T, CountryApprovalAuthorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CountryApprovalAuthorities and returns the data saved in the database.
     * @param {CountryApprovalAuthorityCreateManyAndReturnArgs} args - Arguments to create many CountryApprovalAuthorities.
     * @example
     * // Create many CountryApprovalAuthorities
     * const countryApprovalAuthority = await prisma.countryApprovalAuthority.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CountryApprovalAuthorities and only return the `id`
     * const countryApprovalAuthorityWithIdOnly = await prisma.countryApprovalAuthority.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CountryApprovalAuthorityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CountryApprovalAuthorityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CountryApprovalAuthority.
     * @param {CountryApprovalAuthorityDeleteArgs} args - Arguments to delete one CountryApprovalAuthority.
     * @example
     * // Delete one CountryApprovalAuthority
     * const CountryApprovalAuthority = await prisma.countryApprovalAuthority.delete({
     *   where: {
     *     // ... filter to delete one CountryApprovalAuthority
     *   }
     * })
     *
     */
    delete<T extends CountryApprovalAuthorityDeleteArgs>(args: Prisma.SelectSubset<T, CountryApprovalAuthorityDeleteArgs<ExtArgs>>): Prisma.Prisma__CountryApprovalAuthorityClient<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CountryApprovalAuthority.
     * @param {CountryApprovalAuthorityUpdateArgs} args - Arguments to update one CountryApprovalAuthority.
     * @example
     * // Update one CountryApprovalAuthority
     * const countryApprovalAuthority = await prisma.countryApprovalAuthority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CountryApprovalAuthorityUpdateArgs>(args: Prisma.SelectSubset<T, CountryApprovalAuthorityUpdateArgs<ExtArgs>>): Prisma.Prisma__CountryApprovalAuthorityClient<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CountryApprovalAuthorities.
     * @param {CountryApprovalAuthorityDeleteManyArgs} args - Arguments to filter CountryApprovalAuthorities to delete.
     * @example
     * // Delete a few CountryApprovalAuthorities
     * const { count } = await prisma.countryApprovalAuthority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CountryApprovalAuthorityDeleteManyArgs>(args?: Prisma.SelectSubset<T, CountryApprovalAuthorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CountryApprovalAuthorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryApprovalAuthorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountryApprovalAuthorities
     * const countryApprovalAuthority = await prisma.countryApprovalAuthority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CountryApprovalAuthorityUpdateManyArgs>(args: Prisma.SelectSubset<T, CountryApprovalAuthorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CountryApprovalAuthorities and returns the data updated in the database.
     * @param {CountryApprovalAuthorityUpdateManyAndReturnArgs} args - Arguments to update many CountryApprovalAuthorities.
     * @example
     * // Update many CountryApprovalAuthorities
     * const countryApprovalAuthority = await prisma.countryApprovalAuthority.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CountryApprovalAuthorities and only return the `id`
     * const countryApprovalAuthorityWithIdOnly = await prisma.countryApprovalAuthority.updateManyAndReturn({
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
    updateManyAndReturn<T extends CountryApprovalAuthorityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CountryApprovalAuthorityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CountryApprovalAuthority.
     * @param {CountryApprovalAuthorityUpsertArgs} args - Arguments to update or create a CountryApprovalAuthority.
     * @example
     * // Update or create a CountryApprovalAuthority
     * const countryApprovalAuthority = await prisma.countryApprovalAuthority.upsert({
     *   create: {
     *     // ... data to create a CountryApprovalAuthority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountryApprovalAuthority we want to update
     *   }
     * })
     */
    upsert<T extends CountryApprovalAuthorityUpsertArgs>(args: Prisma.SelectSubset<T, CountryApprovalAuthorityUpsertArgs<ExtArgs>>): Prisma.Prisma__CountryApprovalAuthorityClient<runtime.Types.Result.GetResult<Prisma.$CountryApprovalAuthorityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CountryApprovalAuthorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryApprovalAuthorityCountArgs} args - Arguments to filter CountryApprovalAuthorities to count.
     * @example
     * // Count the number of CountryApprovalAuthorities
     * const count = await prisma.countryApprovalAuthority.count({
     *   where: {
     *     // ... the filter for the CountryApprovalAuthorities we want to count
     *   }
     * })
    **/
    count<T extends CountryApprovalAuthorityCountArgs>(args?: Prisma.Subset<T, CountryApprovalAuthorityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CountryApprovalAuthorityCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CountryApprovalAuthority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryApprovalAuthorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryApprovalAuthorityAggregateArgs>(args: Prisma.Subset<T, CountryApprovalAuthorityAggregateArgs>): Prisma.PrismaPromise<GetCountryApprovalAuthorityAggregateType<T>>;
    /**
     * Group by CountryApprovalAuthority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryApprovalAuthorityGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CountryApprovalAuthorityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CountryApprovalAuthorityGroupByArgs['orderBy'];
    } : {
        orderBy?: CountryApprovalAuthorityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CountryApprovalAuthorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryApprovalAuthorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CountryApprovalAuthority model
     */
    readonly fields: CountryApprovalAuthorityFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CountryApprovalAuthority.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CountryApprovalAuthorityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the CountryApprovalAuthority model
 */
export interface CountryApprovalAuthorityFieldRefs {
    readonly id: Prisma.FieldRef<"CountryApprovalAuthority", 'String'>;
    readonly authority: Prisma.FieldRef<"CountryApprovalAuthority", 'String[]'>;
    readonly threshold: Prisma.FieldRef<"CountryApprovalAuthority", 'Int'>;
    readonly bump: Prisma.FieldRef<"CountryApprovalAuthority", 'Int'>;
    readonly created_time: Prisma.FieldRef<"CountryApprovalAuthority", 'DateTime'>;
    readonly last_modified: Prisma.FieldRef<"CountryApprovalAuthority", 'DateTime'>;
}
/**
 * CountryApprovalAuthority findUnique
 */
export type CountryApprovalAuthorityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * Filter, which CountryApprovalAuthority to fetch.
     */
    where: Prisma.CountryApprovalAuthorityWhereUniqueInput;
};
/**
 * CountryApprovalAuthority findUniqueOrThrow
 */
export type CountryApprovalAuthorityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * Filter, which CountryApprovalAuthority to fetch.
     */
    where: Prisma.CountryApprovalAuthorityWhereUniqueInput;
};
/**
 * CountryApprovalAuthority findFirst
 */
export type CountryApprovalAuthorityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * Filter, which CountryApprovalAuthority to fetch.
     */
    where?: Prisma.CountryApprovalAuthorityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CountryApprovalAuthorities to fetch.
     */
    orderBy?: Prisma.CountryApprovalAuthorityOrderByWithRelationInput | Prisma.CountryApprovalAuthorityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CountryApprovalAuthorities.
     */
    cursor?: Prisma.CountryApprovalAuthorityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CountryApprovalAuthorities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CountryApprovalAuthorities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CountryApprovalAuthorities.
     */
    distinct?: Prisma.CountryApprovalAuthorityScalarFieldEnum | Prisma.CountryApprovalAuthorityScalarFieldEnum[];
};
/**
 * CountryApprovalAuthority findFirstOrThrow
 */
export type CountryApprovalAuthorityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * Filter, which CountryApprovalAuthority to fetch.
     */
    where?: Prisma.CountryApprovalAuthorityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CountryApprovalAuthorities to fetch.
     */
    orderBy?: Prisma.CountryApprovalAuthorityOrderByWithRelationInput | Prisma.CountryApprovalAuthorityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CountryApprovalAuthorities.
     */
    cursor?: Prisma.CountryApprovalAuthorityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CountryApprovalAuthorities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CountryApprovalAuthorities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CountryApprovalAuthorities.
     */
    distinct?: Prisma.CountryApprovalAuthorityScalarFieldEnum | Prisma.CountryApprovalAuthorityScalarFieldEnum[];
};
/**
 * CountryApprovalAuthority findMany
 */
export type CountryApprovalAuthorityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * Filter, which CountryApprovalAuthorities to fetch.
     */
    where?: Prisma.CountryApprovalAuthorityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CountryApprovalAuthorities to fetch.
     */
    orderBy?: Prisma.CountryApprovalAuthorityOrderByWithRelationInput | Prisma.CountryApprovalAuthorityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CountryApprovalAuthorities.
     */
    cursor?: Prisma.CountryApprovalAuthorityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CountryApprovalAuthorities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CountryApprovalAuthorities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CountryApprovalAuthorities.
     */
    distinct?: Prisma.CountryApprovalAuthorityScalarFieldEnum | Prisma.CountryApprovalAuthorityScalarFieldEnum[];
};
/**
 * CountryApprovalAuthority create
 */
export type CountryApprovalAuthorityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * The data needed to create a CountryApprovalAuthority.
     */
    data: Prisma.XOR<Prisma.CountryApprovalAuthorityCreateInput, Prisma.CountryApprovalAuthorityUncheckedCreateInput>;
};
/**
 * CountryApprovalAuthority createMany
 */
export type CountryApprovalAuthorityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CountryApprovalAuthorities.
     */
    data: Prisma.CountryApprovalAuthorityCreateManyInput | Prisma.CountryApprovalAuthorityCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CountryApprovalAuthority createManyAndReturn
 */
export type CountryApprovalAuthorityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * The data used to create many CountryApprovalAuthorities.
     */
    data: Prisma.CountryApprovalAuthorityCreateManyInput | Prisma.CountryApprovalAuthorityCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CountryApprovalAuthority update
 */
export type CountryApprovalAuthorityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * The data needed to update a CountryApprovalAuthority.
     */
    data: Prisma.XOR<Prisma.CountryApprovalAuthorityUpdateInput, Prisma.CountryApprovalAuthorityUncheckedUpdateInput>;
    /**
     * Choose, which CountryApprovalAuthority to update.
     */
    where: Prisma.CountryApprovalAuthorityWhereUniqueInput;
};
/**
 * CountryApprovalAuthority updateMany
 */
export type CountryApprovalAuthorityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CountryApprovalAuthorities.
     */
    data: Prisma.XOR<Prisma.CountryApprovalAuthorityUpdateManyMutationInput, Prisma.CountryApprovalAuthorityUncheckedUpdateManyInput>;
    /**
     * Filter which CountryApprovalAuthorities to update
     */
    where?: Prisma.CountryApprovalAuthorityWhereInput;
    /**
     * Limit how many CountryApprovalAuthorities to update.
     */
    limit?: number;
};
/**
 * CountryApprovalAuthority updateManyAndReturn
 */
export type CountryApprovalAuthorityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * The data used to update CountryApprovalAuthorities.
     */
    data: Prisma.XOR<Prisma.CountryApprovalAuthorityUpdateManyMutationInput, Prisma.CountryApprovalAuthorityUncheckedUpdateManyInput>;
    /**
     * Filter which CountryApprovalAuthorities to update
     */
    where?: Prisma.CountryApprovalAuthorityWhereInput;
    /**
     * Limit how many CountryApprovalAuthorities to update.
     */
    limit?: number;
};
/**
 * CountryApprovalAuthority upsert
 */
export type CountryApprovalAuthorityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * The filter to search for the CountryApprovalAuthority to update in case it exists.
     */
    where: Prisma.CountryApprovalAuthorityWhereUniqueInput;
    /**
     * In case the CountryApprovalAuthority found by the `where` argument doesn't exist, create a new CountryApprovalAuthority with this data.
     */
    create: Prisma.XOR<Prisma.CountryApprovalAuthorityCreateInput, Prisma.CountryApprovalAuthorityUncheckedCreateInput>;
    /**
     * In case the CountryApprovalAuthority was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CountryApprovalAuthorityUpdateInput, Prisma.CountryApprovalAuthorityUncheckedUpdateInput>;
};
/**
 * CountryApprovalAuthority delete
 */
export type CountryApprovalAuthorityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
    /**
     * Filter which CountryApprovalAuthority to delete.
     */
    where: Prisma.CountryApprovalAuthorityWhereUniqueInput;
};
/**
 * CountryApprovalAuthority deleteMany
 */
export type CountryApprovalAuthorityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CountryApprovalAuthorities to delete
     */
    where?: Prisma.CountryApprovalAuthorityWhereInput;
    /**
     * Limit how many CountryApprovalAuthorities to delete.
     */
    limit?: number;
};
/**
 * CountryApprovalAuthority without action
 */
export type CountryApprovalAuthorityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryApprovalAuthority
     */
    select?: Prisma.CountryApprovalAuthoritySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CountryApprovalAuthority
     */
    omit?: Prisma.CountryApprovalAuthorityOmit<ExtArgs> | null;
};
//# sourceMappingURL=CountryApprovalAuthority.d.ts.map