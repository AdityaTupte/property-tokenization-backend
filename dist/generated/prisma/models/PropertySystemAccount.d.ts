import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PropertySystemAccount
 *
 */
export type PropertySystemAccountModel = runtime.Types.Result.DefaultSelection<Prisma.$PropertySystemAccountPayload>;
export type AggregatePropertySystemAccount = {
    _count: PropertySystemAccountCountAggregateOutputType | null;
    _avg: PropertySystemAccountAvgAggregateOutputType | null;
    _sum: PropertySystemAccountSumAggregateOutputType | null;
    _min: PropertySystemAccountMinAggregateOutputType | null;
    _max: PropertySystemAccountMaxAggregateOutputType | null;
};
export type PropertySystemAccountAvgAggregateOutputType = {
    property_system_id: number | null;
    total_properties: number | null;
    bump: number | null;
};
export type PropertySystemAccountSumAggregateOutputType = {
    property_system_id: number | null;
    total_properties: number | null;
    bump: number | null;
};
export type PropertySystemAccountMinAggregateOutputType = {
    creator_pubky: string | null;
    property_system_id: number | null;
    property_system_public_key: string | null;
    governance_mint: string | null;
    threshold: string | null;
    treasury: string | null;
    reinvestment: string | null;
    safety: string | null;
    dividend: string | null;
    trustee_registry: string | null;
    arbitrator_registry: string | null;
    total_properties: number | null;
    created_at: Date | null;
    ready_for_listing: boolean | null;
    bump: number | null;
};
export type PropertySystemAccountMaxAggregateOutputType = {
    creator_pubky: string | null;
    property_system_id: number | null;
    property_system_public_key: string | null;
    governance_mint: string | null;
    threshold: string | null;
    treasury: string | null;
    reinvestment: string | null;
    safety: string | null;
    dividend: string | null;
    trustee_registry: string | null;
    arbitrator_registry: string | null;
    total_properties: number | null;
    created_at: Date | null;
    ready_for_listing: boolean | null;
    bump: number | null;
};
export type PropertySystemAccountCountAggregateOutputType = {
    creator_pubky: number;
    property_system_id: number;
    property_system_public_key: number;
    governance_mint: number;
    threshold: number;
    treasury: number;
    reinvestment: number;
    safety: number;
    dividend: number;
    trustee_registry: number;
    arbitrator_registry: number;
    total_properties: number;
    created_at: number;
    ready_for_listing: number;
    bump: number;
    _all: number;
};
export type PropertySystemAccountAvgAggregateInputType = {
    property_system_id?: true;
    total_properties?: true;
    bump?: true;
};
export type PropertySystemAccountSumAggregateInputType = {
    property_system_id?: true;
    total_properties?: true;
    bump?: true;
};
export type PropertySystemAccountMinAggregateInputType = {
    creator_pubky?: true;
    property_system_id?: true;
    property_system_public_key?: true;
    governance_mint?: true;
    threshold?: true;
    treasury?: true;
    reinvestment?: true;
    safety?: true;
    dividend?: true;
    trustee_registry?: true;
    arbitrator_registry?: true;
    total_properties?: true;
    created_at?: true;
    ready_for_listing?: true;
    bump?: true;
};
export type PropertySystemAccountMaxAggregateInputType = {
    creator_pubky?: true;
    property_system_id?: true;
    property_system_public_key?: true;
    governance_mint?: true;
    threshold?: true;
    treasury?: true;
    reinvestment?: true;
    safety?: true;
    dividend?: true;
    trustee_registry?: true;
    arbitrator_registry?: true;
    total_properties?: true;
    created_at?: true;
    ready_for_listing?: true;
    bump?: true;
};
export type PropertySystemAccountCountAggregateInputType = {
    creator_pubky?: true;
    property_system_id?: true;
    property_system_public_key?: true;
    governance_mint?: true;
    threshold?: true;
    treasury?: true;
    reinvestment?: true;
    safety?: true;
    dividend?: true;
    trustee_registry?: true;
    arbitrator_registry?: true;
    total_properties?: true;
    created_at?: true;
    ready_for_listing?: true;
    bump?: true;
    _all?: true;
};
export type PropertySystemAccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PropertySystemAccount to aggregate.
     */
    where?: Prisma.PropertySystemAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PropertySystemAccounts to fetch.
     */
    orderBy?: Prisma.PropertySystemAccountOrderByWithRelationInput | Prisma.PropertySystemAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PropertySystemAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PropertySystemAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PropertySystemAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PropertySystemAccounts
    **/
    _count?: true | PropertySystemAccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PropertySystemAccountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PropertySystemAccountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PropertySystemAccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PropertySystemAccountMaxAggregateInputType;
};
export type GetPropertySystemAccountAggregateType<T extends PropertySystemAccountAggregateArgs> = {
    [P in keyof T & keyof AggregatePropertySystemAccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePropertySystemAccount[P]> : Prisma.GetScalarType<T[P], AggregatePropertySystemAccount[P]>;
};
export type PropertySystemAccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertySystemAccountWhereInput;
    orderBy?: Prisma.PropertySystemAccountOrderByWithAggregationInput | Prisma.PropertySystemAccountOrderByWithAggregationInput[];
    by: Prisma.PropertySystemAccountScalarFieldEnum[] | Prisma.PropertySystemAccountScalarFieldEnum;
    having?: Prisma.PropertySystemAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PropertySystemAccountCountAggregateInputType | true;
    _avg?: PropertySystemAccountAvgAggregateInputType;
    _sum?: PropertySystemAccountSumAggregateInputType;
    _min?: PropertySystemAccountMinAggregateInputType;
    _max?: PropertySystemAccountMaxAggregateInputType;
};
export type PropertySystemAccountGroupByOutputType = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at: Date;
    ready_for_listing: boolean;
    bump: number;
    _count: PropertySystemAccountCountAggregateOutputType | null;
    _avg: PropertySystemAccountAvgAggregateOutputType | null;
    _sum: PropertySystemAccountSumAggregateOutputType | null;
    _min: PropertySystemAccountMinAggregateOutputType | null;
    _max: PropertySystemAccountMaxAggregateOutputType | null;
};
export type GetPropertySystemAccountGroupByPayload<T extends PropertySystemAccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PropertySystemAccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PropertySystemAccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PropertySystemAccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PropertySystemAccountGroupByOutputType[P]>;
}>>;
export type PropertySystemAccountWhereInput = {
    AND?: Prisma.PropertySystemAccountWhereInput | Prisma.PropertySystemAccountWhereInput[];
    OR?: Prisma.PropertySystemAccountWhereInput[];
    NOT?: Prisma.PropertySystemAccountWhereInput | Prisma.PropertySystemAccountWhereInput[];
    creator_pubky?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    property_system_id?: Prisma.IntFilter<"PropertySystemAccount"> | number;
    property_system_public_key?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    governance_mint?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    threshold?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    treasury?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    reinvestment?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    safety?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    dividend?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    trustee_registry?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    arbitrator_registry?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    total_properties?: Prisma.IntFilter<"PropertySystemAccount"> | number;
    created_at?: Prisma.DateTimeFilter<"PropertySystemAccount"> | Date | string;
    ready_for_listing?: Prisma.BoolFilter<"PropertySystemAccount"> | boolean;
    bump?: Prisma.IntFilter<"PropertySystemAccount"> | number;
    dividendPdas?: Prisma.DividendPdaListRelationFilter;
    trusteeRegistries?: Prisma.XOR<Prisma.TrusteeRegistryNullableScalarRelationFilter, Prisma.TrusteeRegistryWhereInput> | null;
    arbitrarRegistries?: Prisma.XOR<Prisma.ArbitrarRegistryNullableScalarRelationFilter, Prisma.ArbitrarRegistryWhereInput> | null;
    thresholds?: Prisma.XOR<Prisma.ThresholdNullableScalarRelationFilter, Prisma.ThresholdWhereInput> | null;
    treasuries?: Prisma.XOR<Prisma.TreasuryNullableScalarRelationFilter, Prisma.TreasuryWhereInput> | null;
    propertyAccounts?: Prisma.PropertyAccountListRelationFilter;
};
export type PropertySystemAccountOrderByWithRelationInput = {
    creator_pubky?: Prisma.SortOrder;
    property_system_id?: Prisma.SortOrder;
    property_system_public_key?: Prisma.SortOrder;
    governance_mint?: Prisma.SortOrder;
    threshold?: Prisma.SortOrder;
    treasury?: Prisma.SortOrder;
    reinvestment?: Prisma.SortOrder;
    safety?: Prisma.SortOrder;
    dividend?: Prisma.SortOrder;
    trustee_registry?: Prisma.SortOrder;
    arbitrator_registry?: Prisma.SortOrder;
    total_properties?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ready_for_listing?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    dividendPdas?: Prisma.DividendPdaOrderByRelationAggregateInput;
    trusteeRegistries?: Prisma.TrusteeRegistryOrderByWithRelationInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryOrderByWithRelationInput;
    thresholds?: Prisma.ThresholdOrderByWithRelationInput;
    treasuries?: Prisma.TreasuryOrderByWithRelationInput;
    propertyAccounts?: Prisma.PropertyAccountOrderByRelationAggregateInput;
};
export type PropertySystemAccountWhereUniqueInput = Prisma.AtLeast<{
    property_system_public_key?: string;
    governance_mint?: string;
    threshold?: string;
    treasury?: string;
    reinvestment?: string;
    safety?: string;
    dividend?: string;
    trustee_registry?: string;
    arbitrator_registry?: string;
    AND?: Prisma.PropertySystemAccountWhereInput | Prisma.PropertySystemAccountWhereInput[];
    OR?: Prisma.PropertySystemAccountWhereInput[];
    NOT?: Prisma.PropertySystemAccountWhereInput | Prisma.PropertySystemAccountWhereInput[];
    creator_pubky?: Prisma.StringFilter<"PropertySystemAccount"> | string;
    property_system_id?: Prisma.IntFilter<"PropertySystemAccount"> | number;
    total_properties?: Prisma.IntFilter<"PropertySystemAccount"> | number;
    created_at?: Prisma.DateTimeFilter<"PropertySystemAccount"> | Date | string;
    ready_for_listing?: Prisma.BoolFilter<"PropertySystemAccount"> | boolean;
    bump?: Prisma.IntFilter<"PropertySystemAccount"> | number;
    dividendPdas?: Prisma.DividendPdaListRelationFilter;
    trusteeRegistries?: Prisma.XOR<Prisma.TrusteeRegistryNullableScalarRelationFilter, Prisma.TrusteeRegistryWhereInput> | null;
    arbitrarRegistries?: Prisma.XOR<Prisma.ArbitrarRegistryNullableScalarRelationFilter, Prisma.ArbitrarRegistryWhereInput> | null;
    thresholds?: Prisma.XOR<Prisma.ThresholdNullableScalarRelationFilter, Prisma.ThresholdWhereInput> | null;
    treasuries?: Prisma.XOR<Prisma.TreasuryNullableScalarRelationFilter, Prisma.TreasuryWhereInput> | null;
    propertyAccounts?: Prisma.PropertyAccountListRelationFilter;
}, "property_system_public_key" | "governance_mint" | "threshold" | "treasury" | "reinvestment" | "safety" | "dividend" | "trustee_registry" | "arbitrator_registry">;
export type PropertySystemAccountOrderByWithAggregationInput = {
    creator_pubky?: Prisma.SortOrder;
    property_system_id?: Prisma.SortOrder;
    property_system_public_key?: Prisma.SortOrder;
    governance_mint?: Prisma.SortOrder;
    threshold?: Prisma.SortOrder;
    treasury?: Prisma.SortOrder;
    reinvestment?: Prisma.SortOrder;
    safety?: Prisma.SortOrder;
    dividend?: Prisma.SortOrder;
    trustee_registry?: Prisma.SortOrder;
    arbitrator_registry?: Prisma.SortOrder;
    total_properties?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ready_for_listing?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    _count?: Prisma.PropertySystemAccountCountOrderByAggregateInput;
    _avg?: Prisma.PropertySystemAccountAvgOrderByAggregateInput;
    _max?: Prisma.PropertySystemAccountMaxOrderByAggregateInput;
    _min?: Prisma.PropertySystemAccountMinOrderByAggregateInput;
    _sum?: Prisma.PropertySystemAccountSumOrderByAggregateInput;
};
export type PropertySystemAccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.PropertySystemAccountScalarWhereWithAggregatesInput | Prisma.PropertySystemAccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.PropertySystemAccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PropertySystemAccountScalarWhereWithAggregatesInput | Prisma.PropertySystemAccountScalarWhereWithAggregatesInput[];
    creator_pubky?: Prisma.StringWithAggregatesFilter<"PropertySystemAccount"> | string;
    property_system_id?: Prisma.IntWithAggregatesFilter<"PropertySystemAccount"> | number;
    property_system_public_key?: Prisma.StringWithAggregatesFilter<"PropertySystemAccount"> | string;
    governance_mint?: Prisma.StringWithAggregatesFilter<"PropertySystemAccount"> | string;
    threshold?: Prisma.StringWithAggregatesFilter<"PropertySystemAccount"> | string;
    treasury?: Prisma.StringWithAggregatesFilter<"PropertySystemAccount"> | string;
    reinvestment?: Prisma.StringWithAggregatesFilter<"PropertySystemAccount"> | string;
    safety?: Prisma.StringWithAggregatesFilter<"PropertySystemAccount"> | string;
    dividend?: Prisma.StringWithAggregatesFilter<"PropertySystemAccount"> | string;
    trustee_registry?: Prisma.StringWithAggregatesFilter<"PropertySystemAccount"> | string;
    arbitrator_registry?: Prisma.StringWithAggregatesFilter<"PropertySystemAccount"> | string;
    total_properties?: Prisma.IntWithAggregatesFilter<"PropertySystemAccount"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"PropertySystemAccount"> | Date | string;
    ready_for_listing?: Prisma.BoolWithAggregatesFilter<"PropertySystemAccount"> | boolean;
    bump?: Prisma.IntWithAggregatesFilter<"PropertySystemAccount"> | number;
};
export type PropertySystemAccountCreateInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaCreateNestedManyWithoutProperty_system_keyInput;
    trusteeRegistries?: Prisma.TrusteeRegistryCreateNestedOneWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountUncheckedCreateInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaUncheckedCreateNestedManyWithoutProperty_system_keyInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountUpdateInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUpdateManyWithoutProperty_system_keyNestedInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountUncheckedUpdateInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUncheckedUpdateManyWithoutProperty_system_keyNestedInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountCreateManyInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
};
export type PropertySystemAccountUpdateManyMutationInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PropertySystemAccountUncheckedUpdateManyInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PropertySystemAccountCountOrderByAggregateInput = {
    creator_pubky?: Prisma.SortOrder;
    property_system_id?: Prisma.SortOrder;
    property_system_public_key?: Prisma.SortOrder;
    governance_mint?: Prisma.SortOrder;
    threshold?: Prisma.SortOrder;
    treasury?: Prisma.SortOrder;
    reinvestment?: Prisma.SortOrder;
    safety?: Prisma.SortOrder;
    dividend?: Prisma.SortOrder;
    trustee_registry?: Prisma.SortOrder;
    arbitrator_registry?: Prisma.SortOrder;
    total_properties?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ready_for_listing?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type PropertySystemAccountAvgOrderByAggregateInput = {
    property_system_id?: Prisma.SortOrder;
    total_properties?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type PropertySystemAccountMaxOrderByAggregateInput = {
    creator_pubky?: Prisma.SortOrder;
    property_system_id?: Prisma.SortOrder;
    property_system_public_key?: Prisma.SortOrder;
    governance_mint?: Prisma.SortOrder;
    threshold?: Prisma.SortOrder;
    treasury?: Prisma.SortOrder;
    reinvestment?: Prisma.SortOrder;
    safety?: Prisma.SortOrder;
    dividend?: Prisma.SortOrder;
    trustee_registry?: Prisma.SortOrder;
    arbitrator_registry?: Prisma.SortOrder;
    total_properties?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ready_for_listing?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type PropertySystemAccountMinOrderByAggregateInput = {
    creator_pubky?: Prisma.SortOrder;
    property_system_id?: Prisma.SortOrder;
    property_system_public_key?: Prisma.SortOrder;
    governance_mint?: Prisma.SortOrder;
    threshold?: Prisma.SortOrder;
    treasury?: Prisma.SortOrder;
    reinvestment?: Prisma.SortOrder;
    safety?: Prisma.SortOrder;
    dividend?: Prisma.SortOrder;
    trustee_registry?: Prisma.SortOrder;
    arbitrator_registry?: Prisma.SortOrder;
    total_properties?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ready_for_listing?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type PropertySystemAccountSumOrderByAggregateInput = {
    property_system_id?: Prisma.SortOrder;
    total_properties?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type PropertySystemAccountScalarRelationFilter = {
    is?: Prisma.PropertySystemAccountWhereInput;
    isNot?: Prisma.PropertySystemAccountWhereInput;
};
export type PropertySystemAccountCreateNestedOneWithoutDividendPdasInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutDividendPdasInput, Prisma.PropertySystemAccountUncheckedCreateWithoutDividendPdasInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutDividendPdasInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
};
export type PropertySystemAccountUpdateOneRequiredWithoutDividendPdasNestedInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutDividendPdasInput, Prisma.PropertySystemAccountUncheckedCreateWithoutDividendPdasInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutDividendPdasInput;
    upsert?: Prisma.PropertySystemAccountUpsertWithoutDividendPdasInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PropertySystemAccountUpdateToOneWithWhereWithoutDividendPdasInput, Prisma.PropertySystemAccountUpdateWithoutDividendPdasInput>, Prisma.PropertySystemAccountUncheckedUpdateWithoutDividendPdasInput>;
};
export type PropertySystemAccountCreateNestedOneWithoutTrusteeRegistriesInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutTrusteeRegistriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutTrusteeRegistriesInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutTrusteeRegistriesInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
};
export type PropertySystemAccountUpdateOneRequiredWithoutTrusteeRegistriesNestedInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutTrusteeRegistriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutTrusteeRegistriesInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutTrusteeRegistriesInput;
    upsert?: Prisma.PropertySystemAccountUpsertWithoutTrusteeRegistriesInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PropertySystemAccountUpdateToOneWithWhereWithoutTrusteeRegistriesInput, Prisma.PropertySystemAccountUpdateWithoutTrusteeRegistriesInput>, Prisma.PropertySystemAccountUncheckedUpdateWithoutTrusteeRegistriesInput>;
};
export type PropertySystemAccountCreateNestedOneWithoutArbitrarRegistriesInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutArbitrarRegistriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutArbitrarRegistriesInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutArbitrarRegistriesInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
};
export type PropertySystemAccountUpdateOneRequiredWithoutArbitrarRegistriesNestedInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutArbitrarRegistriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutArbitrarRegistriesInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutArbitrarRegistriesInput;
    upsert?: Prisma.PropertySystemAccountUpsertWithoutArbitrarRegistriesInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PropertySystemAccountUpdateToOneWithWhereWithoutArbitrarRegistriesInput, Prisma.PropertySystemAccountUpdateWithoutArbitrarRegistriesInput>, Prisma.PropertySystemAccountUncheckedUpdateWithoutArbitrarRegistriesInput>;
};
export type PropertySystemAccountCreateNestedOneWithoutThresholdsInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutThresholdsInput, Prisma.PropertySystemAccountUncheckedCreateWithoutThresholdsInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutThresholdsInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
};
export type PropertySystemAccountUpdateOneRequiredWithoutThresholdsNestedInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutThresholdsInput, Prisma.PropertySystemAccountUncheckedCreateWithoutThresholdsInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutThresholdsInput;
    upsert?: Prisma.PropertySystemAccountUpsertWithoutThresholdsInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PropertySystemAccountUpdateToOneWithWhereWithoutThresholdsInput, Prisma.PropertySystemAccountUpdateWithoutThresholdsInput>, Prisma.PropertySystemAccountUncheckedUpdateWithoutThresholdsInput>;
};
export type PropertySystemAccountCreateNestedOneWithoutTreasuriesInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutTreasuriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutTreasuriesInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutTreasuriesInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
};
export type PropertySystemAccountUpdateOneRequiredWithoutTreasuriesNestedInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutTreasuriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutTreasuriesInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutTreasuriesInput;
    upsert?: Prisma.PropertySystemAccountUpsertWithoutTreasuriesInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PropertySystemAccountUpdateToOneWithWhereWithoutTreasuriesInput, Prisma.PropertySystemAccountUpdateWithoutTreasuriesInput>, Prisma.PropertySystemAccountUncheckedUpdateWithoutTreasuriesInput>;
};
export type PropertySystemAccountCreateNestedOneWithoutPropertyAccountsInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutPropertyAccountsInput, Prisma.PropertySystemAccountUncheckedCreateWithoutPropertyAccountsInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutPropertyAccountsInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
};
export type PropertySystemAccountUpdateOneRequiredWithoutPropertyAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutPropertyAccountsInput, Prisma.PropertySystemAccountUncheckedCreateWithoutPropertyAccountsInput>;
    connectOrCreate?: Prisma.PropertySystemAccountCreateOrConnectWithoutPropertyAccountsInput;
    upsert?: Prisma.PropertySystemAccountUpsertWithoutPropertyAccountsInput;
    connect?: Prisma.PropertySystemAccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PropertySystemAccountUpdateToOneWithWhereWithoutPropertyAccountsInput, Prisma.PropertySystemAccountUpdateWithoutPropertyAccountsInput>, Prisma.PropertySystemAccountUncheckedUpdateWithoutPropertyAccountsInput>;
};
export type PropertySystemAccountCreateWithoutDividendPdasInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    trusteeRegistries?: Prisma.TrusteeRegistryCreateNestedOneWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountUncheckedCreateWithoutDividendPdasInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountCreateOrConnectWithoutDividendPdasInput = {
    where: Prisma.PropertySystemAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutDividendPdasInput, Prisma.PropertySystemAccountUncheckedCreateWithoutDividendPdasInput>;
};
export type PropertySystemAccountUpsertWithoutDividendPdasInput = {
    update: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutDividendPdasInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutDividendPdasInput>;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutDividendPdasInput, Prisma.PropertySystemAccountUncheckedCreateWithoutDividendPdasInput>;
    where?: Prisma.PropertySystemAccountWhereInput;
};
export type PropertySystemAccountUpdateToOneWithWhereWithoutDividendPdasInput = {
    where?: Prisma.PropertySystemAccountWhereInput;
    data: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutDividendPdasInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutDividendPdasInput>;
};
export type PropertySystemAccountUpdateWithoutDividendPdasInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    trusteeRegistries?: Prisma.TrusteeRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountUncheckedUpdateWithoutDividendPdasInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountCreateWithoutTrusteeRegistriesInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaCreateNestedManyWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountUncheckedCreateWithoutTrusteeRegistriesInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaUncheckedCreateNestedManyWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountCreateOrConnectWithoutTrusteeRegistriesInput = {
    where: Prisma.PropertySystemAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutTrusteeRegistriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutTrusteeRegistriesInput>;
};
export type PropertySystemAccountUpsertWithoutTrusteeRegistriesInput = {
    update: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutTrusteeRegistriesInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutTrusteeRegistriesInput>;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutTrusteeRegistriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutTrusteeRegistriesInput>;
    where?: Prisma.PropertySystemAccountWhereInput;
};
export type PropertySystemAccountUpdateToOneWithWhereWithoutTrusteeRegistriesInput = {
    where?: Prisma.PropertySystemAccountWhereInput;
    data: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutTrusteeRegistriesInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutTrusteeRegistriesInput>;
};
export type PropertySystemAccountUpdateWithoutTrusteeRegistriesInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUpdateManyWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountUncheckedUpdateWithoutTrusteeRegistriesInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUncheckedUpdateManyWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountCreateWithoutArbitrarRegistriesInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaCreateNestedManyWithoutProperty_system_keyInput;
    trusteeRegistries?: Prisma.TrusteeRegistryCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountUncheckedCreateWithoutArbitrarRegistriesInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaUncheckedCreateNestedManyWithoutProperty_system_keyInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountCreateOrConnectWithoutArbitrarRegistriesInput = {
    where: Prisma.PropertySystemAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutArbitrarRegistriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutArbitrarRegistriesInput>;
};
export type PropertySystemAccountUpsertWithoutArbitrarRegistriesInput = {
    update: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutArbitrarRegistriesInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutArbitrarRegistriesInput>;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutArbitrarRegistriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutArbitrarRegistriesInput>;
    where?: Prisma.PropertySystemAccountWhereInput;
};
export type PropertySystemAccountUpdateToOneWithWhereWithoutArbitrarRegistriesInput = {
    where?: Prisma.PropertySystemAccountWhereInput;
    data: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutArbitrarRegistriesInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutArbitrarRegistriesInput>;
};
export type PropertySystemAccountUpdateWithoutArbitrarRegistriesInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUpdateManyWithoutProperty_system_keyNestedInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountUncheckedUpdateWithoutArbitrarRegistriesInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUncheckedUpdateManyWithoutProperty_system_keyNestedInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountCreateWithoutThresholdsInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaCreateNestedManyWithoutProperty_system_keyInput;
    trusteeRegistries?: Prisma.TrusteeRegistryCreateNestedOneWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountUncheckedCreateWithoutThresholdsInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaUncheckedCreateNestedManyWithoutProperty_system_keyInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountCreateOrConnectWithoutThresholdsInput = {
    where: Prisma.PropertySystemAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutThresholdsInput, Prisma.PropertySystemAccountUncheckedCreateWithoutThresholdsInput>;
};
export type PropertySystemAccountUpsertWithoutThresholdsInput = {
    update: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutThresholdsInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutThresholdsInput>;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutThresholdsInput, Prisma.PropertySystemAccountUncheckedCreateWithoutThresholdsInput>;
    where?: Prisma.PropertySystemAccountWhereInput;
};
export type PropertySystemAccountUpdateToOneWithWhereWithoutThresholdsInput = {
    where?: Prisma.PropertySystemAccountWhereInput;
    data: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutThresholdsInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutThresholdsInput>;
};
export type PropertySystemAccountUpdateWithoutThresholdsInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUpdateManyWithoutProperty_system_keyNestedInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountUncheckedUpdateWithoutThresholdsInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUncheckedUpdateManyWithoutProperty_system_keyNestedInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountCreateWithoutTreasuriesInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaCreateNestedManyWithoutProperty_system_keyInput;
    trusteeRegistries?: Prisma.TrusteeRegistryCreateNestedOneWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountUncheckedCreateWithoutTreasuriesInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaUncheckedCreateNestedManyWithoutProperty_system_keyInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedCreateNestedManyWithoutProperty_system_refInput;
};
export type PropertySystemAccountCreateOrConnectWithoutTreasuriesInput = {
    where: Prisma.PropertySystemAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutTreasuriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutTreasuriesInput>;
};
export type PropertySystemAccountUpsertWithoutTreasuriesInput = {
    update: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutTreasuriesInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutTreasuriesInput>;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutTreasuriesInput, Prisma.PropertySystemAccountUncheckedCreateWithoutTreasuriesInput>;
    where?: Prisma.PropertySystemAccountWhereInput;
};
export type PropertySystemAccountUpdateToOneWithWhereWithoutTreasuriesInput = {
    where?: Prisma.PropertySystemAccountWhereInput;
    data: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutTreasuriesInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutTreasuriesInput>;
};
export type PropertySystemAccountUpdateWithoutTreasuriesInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUpdateManyWithoutProperty_system_keyNestedInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountUncheckedUpdateWithoutTreasuriesInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUncheckedUpdateManyWithoutProperty_system_keyNestedInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    propertyAccounts?: Prisma.PropertyAccountUncheckedUpdateManyWithoutProperty_system_refNestedInput;
};
export type PropertySystemAccountCreateWithoutPropertyAccountsInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaCreateNestedManyWithoutProperty_system_keyInput;
    trusteeRegistries?: Prisma.TrusteeRegistryCreateNestedOneWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryCreateNestedOneWithoutProperty_system_keyInput;
};
export type PropertySystemAccountUncheckedCreateWithoutPropertyAccountsInput = {
    creator_pubky: string;
    property_system_id: number;
    property_system_public_key: string;
    governance_mint: string;
    threshold: string;
    treasury: string;
    reinvestment: string;
    safety: string;
    dividend: string;
    trustee_registry: string;
    arbitrator_registry: string;
    total_properties: number;
    created_at?: Date | string;
    ready_for_listing: boolean;
    bump: number;
    dividendPdas?: Prisma.DividendPdaUncheckedCreateNestedManyWithoutProperty_system_keyInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    thresholds?: Prisma.ThresholdUncheckedCreateNestedOneWithoutProperty_system_keyInput;
    treasuries?: Prisma.TreasuryUncheckedCreateNestedOneWithoutProperty_system_keyInput;
};
export type PropertySystemAccountCreateOrConnectWithoutPropertyAccountsInput = {
    where: Prisma.PropertySystemAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutPropertyAccountsInput, Prisma.PropertySystemAccountUncheckedCreateWithoutPropertyAccountsInput>;
};
export type PropertySystemAccountUpsertWithoutPropertyAccountsInput = {
    update: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutPropertyAccountsInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutPropertyAccountsInput>;
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateWithoutPropertyAccountsInput, Prisma.PropertySystemAccountUncheckedCreateWithoutPropertyAccountsInput>;
    where?: Prisma.PropertySystemAccountWhereInput;
};
export type PropertySystemAccountUpdateToOneWithWhereWithoutPropertyAccountsInput = {
    where?: Prisma.PropertySystemAccountWhereInput;
    data: Prisma.XOR<Prisma.PropertySystemAccountUpdateWithoutPropertyAccountsInput, Prisma.PropertySystemAccountUncheckedUpdateWithoutPropertyAccountsInput>;
};
export type PropertySystemAccountUpdateWithoutPropertyAccountsInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUpdateManyWithoutProperty_system_keyNestedInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUpdateOneWithoutProperty_system_keyNestedInput;
};
export type PropertySystemAccountUncheckedUpdateWithoutPropertyAccountsInput = {
    creator_pubky?: Prisma.StringFieldUpdateOperationsInput | string;
    property_system_id?: Prisma.IntFieldUpdateOperationsInput | number;
    property_system_public_key?: Prisma.StringFieldUpdateOperationsInput | string;
    governance_mint?: Prisma.StringFieldUpdateOperationsInput | string;
    threshold?: Prisma.StringFieldUpdateOperationsInput | string;
    treasury?: Prisma.StringFieldUpdateOperationsInput | string;
    reinvestment?: Prisma.StringFieldUpdateOperationsInput | string;
    safety?: Prisma.StringFieldUpdateOperationsInput | string;
    dividend?: Prisma.StringFieldUpdateOperationsInput | string;
    trustee_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    arbitrator_registry?: Prisma.StringFieldUpdateOperationsInput | string;
    total_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ready_for_listing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    dividendPdas?: Prisma.DividendPdaUncheckedUpdateManyWithoutProperty_system_keyNestedInput;
    trusteeRegistries?: Prisma.TrusteeRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    arbitrarRegistries?: Prisma.ArbitrarRegistryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    thresholds?: Prisma.ThresholdUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
    treasuries?: Prisma.TreasuryUncheckedUpdateOneWithoutProperty_system_keyNestedInput;
};
/**
 * Count Type PropertySystemAccountCountOutputType
 */
export type PropertySystemAccountCountOutputType = {
    dividendPdas: number;
    propertyAccounts: number;
};
export type PropertySystemAccountCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dividendPdas?: boolean | PropertySystemAccountCountOutputTypeCountDividendPdasArgs;
    propertyAccounts?: boolean | PropertySystemAccountCountOutputTypeCountPropertyAccountsArgs;
};
/**
 * PropertySystemAccountCountOutputType without action
 */
export type PropertySystemAccountCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccountCountOutputType
     */
    select?: Prisma.PropertySystemAccountCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PropertySystemAccountCountOutputType without action
 */
export type PropertySystemAccountCountOutputTypeCountDividendPdasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DividendPdaWhereInput;
};
/**
 * PropertySystemAccountCountOutputType without action
 */
export type PropertySystemAccountCountOutputTypeCountPropertyAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PropertyAccountWhereInput;
};
export type PropertySystemAccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    creator_pubky?: boolean;
    property_system_id?: boolean;
    property_system_public_key?: boolean;
    governance_mint?: boolean;
    threshold?: boolean;
    treasury?: boolean;
    reinvestment?: boolean;
    safety?: boolean;
    dividend?: boolean;
    trustee_registry?: boolean;
    arbitrator_registry?: boolean;
    total_properties?: boolean;
    created_at?: boolean;
    ready_for_listing?: boolean;
    bump?: boolean;
    dividendPdas?: boolean | Prisma.PropertySystemAccount$dividendPdasArgs<ExtArgs>;
    trusteeRegistries?: boolean | Prisma.PropertySystemAccount$trusteeRegistriesArgs<ExtArgs>;
    arbitrarRegistries?: boolean | Prisma.PropertySystemAccount$arbitrarRegistriesArgs<ExtArgs>;
    thresholds?: boolean | Prisma.PropertySystemAccount$thresholdsArgs<ExtArgs>;
    treasuries?: boolean | Prisma.PropertySystemAccount$treasuriesArgs<ExtArgs>;
    propertyAccounts?: boolean | Prisma.PropertySystemAccount$propertyAccountsArgs<ExtArgs>;
    _count?: boolean | Prisma.PropertySystemAccountCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["propertySystemAccount"]>;
export type PropertySystemAccountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    creator_pubky?: boolean;
    property_system_id?: boolean;
    property_system_public_key?: boolean;
    governance_mint?: boolean;
    threshold?: boolean;
    treasury?: boolean;
    reinvestment?: boolean;
    safety?: boolean;
    dividend?: boolean;
    trustee_registry?: boolean;
    arbitrator_registry?: boolean;
    total_properties?: boolean;
    created_at?: boolean;
    ready_for_listing?: boolean;
    bump?: boolean;
}, ExtArgs["result"]["propertySystemAccount"]>;
export type PropertySystemAccountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    creator_pubky?: boolean;
    property_system_id?: boolean;
    property_system_public_key?: boolean;
    governance_mint?: boolean;
    threshold?: boolean;
    treasury?: boolean;
    reinvestment?: boolean;
    safety?: boolean;
    dividend?: boolean;
    trustee_registry?: boolean;
    arbitrator_registry?: boolean;
    total_properties?: boolean;
    created_at?: boolean;
    ready_for_listing?: boolean;
    bump?: boolean;
}, ExtArgs["result"]["propertySystemAccount"]>;
export type PropertySystemAccountSelectScalar = {
    creator_pubky?: boolean;
    property_system_id?: boolean;
    property_system_public_key?: boolean;
    governance_mint?: boolean;
    threshold?: boolean;
    treasury?: boolean;
    reinvestment?: boolean;
    safety?: boolean;
    dividend?: boolean;
    trustee_registry?: boolean;
    arbitrator_registry?: boolean;
    total_properties?: boolean;
    created_at?: boolean;
    ready_for_listing?: boolean;
    bump?: boolean;
};
export type PropertySystemAccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"creator_pubky" | "property_system_id" | "property_system_public_key" | "governance_mint" | "threshold" | "treasury" | "reinvestment" | "safety" | "dividend" | "trustee_registry" | "arbitrator_registry" | "total_properties" | "created_at" | "ready_for_listing" | "bump", ExtArgs["result"]["propertySystemAccount"]>;
export type PropertySystemAccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dividendPdas?: boolean | Prisma.PropertySystemAccount$dividendPdasArgs<ExtArgs>;
    trusteeRegistries?: boolean | Prisma.PropertySystemAccount$trusteeRegistriesArgs<ExtArgs>;
    arbitrarRegistries?: boolean | Prisma.PropertySystemAccount$arbitrarRegistriesArgs<ExtArgs>;
    thresholds?: boolean | Prisma.PropertySystemAccount$thresholdsArgs<ExtArgs>;
    treasuries?: boolean | Prisma.PropertySystemAccount$treasuriesArgs<ExtArgs>;
    propertyAccounts?: boolean | Prisma.PropertySystemAccount$propertyAccountsArgs<ExtArgs>;
    _count?: boolean | Prisma.PropertySystemAccountCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PropertySystemAccountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PropertySystemAccountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PropertySystemAccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PropertySystemAccount";
    objects: {
        dividendPdas: Prisma.$DividendPdaPayload<ExtArgs>[];
        trusteeRegistries: Prisma.$TrusteeRegistryPayload<ExtArgs> | null;
        arbitrarRegistries: Prisma.$ArbitrarRegistryPayload<ExtArgs> | null;
        thresholds: Prisma.$ThresholdPayload<ExtArgs> | null;
        treasuries: Prisma.$TreasuryPayload<ExtArgs> | null;
        propertyAccounts: Prisma.$PropertyAccountPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        creator_pubky: string;
        property_system_id: number;
        property_system_public_key: string;
        governance_mint: string;
        threshold: string;
        treasury: string;
        reinvestment: string;
        safety: string;
        dividend: string;
        trustee_registry: string;
        arbitrator_registry: string;
        total_properties: number;
        created_at: Date;
        ready_for_listing: boolean;
        bump: number;
    }, ExtArgs["result"]["propertySystemAccount"]>;
    composites: {};
};
export type PropertySystemAccountGetPayload<S extends boolean | null | undefined | PropertySystemAccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload, S>;
export type PropertySystemAccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PropertySystemAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PropertySystemAccountCountAggregateInputType | true;
};
export interface PropertySystemAccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PropertySystemAccount'];
        meta: {
            name: 'PropertySystemAccount';
        };
    };
    /**
     * Find zero or one PropertySystemAccount that matches the filter.
     * @param {PropertySystemAccountFindUniqueArgs} args - Arguments to find a PropertySystemAccount
     * @example
     * // Get one PropertySystemAccount
     * const propertySystemAccount = await prisma.propertySystemAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertySystemAccountFindUniqueArgs>(args: Prisma.SelectSubset<T, PropertySystemAccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PropertySystemAccountClient<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PropertySystemAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertySystemAccountFindUniqueOrThrowArgs} args - Arguments to find a PropertySystemAccount
     * @example
     * // Get one PropertySystemAccount
     * const propertySystemAccount = await prisma.propertySystemAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertySystemAccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PropertySystemAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PropertySystemAccountClient<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PropertySystemAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySystemAccountFindFirstArgs} args - Arguments to find a PropertySystemAccount
     * @example
     * // Get one PropertySystemAccount
     * const propertySystemAccount = await prisma.propertySystemAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertySystemAccountFindFirstArgs>(args?: Prisma.SelectSubset<T, PropertySystemAccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__PropertySystemAccountClient<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PropertySystemAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySystemAccountFindFirstOrThrowArgs} args - Arguments to find a PropertySystemAccount
     * @example
     * // Get one PropertySystemAccount
     * const propertySystemAccount = await prisma.propertySystemAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertySystemAccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PropertySystemAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PropertySystemAccountClient<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PropertySystemAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySystemAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertySystemAccounts
     * const propertySystemAccounts = await prisma.propertySystemAccount.findMany()
     *
     * // Get first 10 PropertySystemAccounts
     * const propertySystemAccounts = await prisma.propertySystemAccount.findMany({ take: 10 })
     *
     * // Only select the `creator_pubky`
     * const propertySystemAccountWithCreator_pubkyOnly = await prisma.propertySystemAccount.findMany({ select: { creator_pubky: true } })
     *
     */
    findMany<T extends PropertySystemAccountFindManyArgs>(args?: Prisma.SelectSubset<T, PropertySystemAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PropertySystemAccount.
     * @param {PropertySystemAccountCreateArgs} args - Arguments to create a PropertySystemAccount.
     * @example
     * // Create one PropertySystemAccount
     * const PropertySystemAccount = await prisma.propertySystemAccount.create({
     *   data: {
     *     // ... data to create a PropertySystemAccount
     *   }
     * })
     *
     */
    create<T extends PropertySystemAccountCreateArgs>(args: Prisma.SelectSubset<T, PropertySystemAccountCreateArgs<ExtArgs>>): Prisma.Prisma__PropertySystemAccountClient<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PropertySystemAccounts.
     * @param {PropertySystemAccountCreateManyArgs} args - Arguments to create many PropertySystemAccounts.
     * @example
     * // Create many PropertySystemAccounts
     * const propertySystemAccount = await prisma.propertySystemAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PropertySystemAccountCreateManyArgs>(args?: Prisma.SelectSubset<T, PropertySystemAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PropertySystemAccounts and returns the data saved in the database.
     * @param {PropertySystemAccountCreateManyAndReturnArgs} args - Arguments to create many PropertySystemAccounts.
     * @example
     * // Create many PropertySystemAccounts
     * const propertySystemAccount = await prisma.propertySystemAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PropertySystemAccounts and only return the `creator_pubky`
     * const propertySystemAccountWithCreator_pubkyOnly = await prisma.propertySystemAccount.createManyAndReturn({
     *   select: { creator_pubky: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PropertySystemAccountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PropertySystemAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PropertySystemAccount.
     * @param {PropertySystemAccountDeleteArgs} args - Arguments to delete one PropertySystemAccount.
     * @example
     * // Delete one PropertySystemAccount
     * const PropertySystemAccount = await prisma.propertySystemAccount.delete({
     *   where: {
     *     // ... filter to delete one PropertySystemAccount
     *   }
     * })
     *
     */
    delete<T extends PropertySystemAccountDeleteArgs>(args: Prisma.SelectSubset<T, PropertySystemAccountDeleteArgs<ExtArgs>>): Prisma.Prisma__PropertySystemAccountClient<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PropertySystemAccount.
     * @param {PropertySystemAccountUpdateArgs} args - Arguments to update one PropertySystemAccount.
     * @example
     * // Update one PropertySystemAccount
     * const propertySystemAccount = await prisma.propertySystemAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PropertySystemAccountUpdateArgs>(args: Prisma.SelectSubset<T, PropertySystemAccountUpdateArgs<ExtArgs>>): Prisma.Prisma__PropertySystemAccountClient<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PropertySystemAccounts.
     * @param {PropertySystemAccountDeleteManyArgs} args - Arguments to filter PropertySystemAccounts to delete.
     * @example
     * // Delete a few PropertySystemAccounts
     * const { count } = await prisma.propertySystemAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PropertySystemAccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, PropertySystemAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PropertySystemAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySystemAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertySystemAccounts
     * const propertySystemAccount = await prisma.propertySystemAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PropertySystemAccountUpdateManyArgs>(args: Prisma.SelectSubset<T, PropertySystemAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PropertySystemAccounts and returns the data updated in the database.
     * @param {PropertySystemAccountUpdateManyAndReturnArgs} args - Arguments to update many PropertySystemAccounts.
     * @example
     * // Update many PropertySystemAccounts
     * const propertySystemAccount = await prisma.propertySystemAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PropertySystemAccounts and only return the `creator_pubky`
     * const propertySystemAccountWithCreator_pubkyOnly = await prisma.propertySystemAccount.updateManyAndReturn({
     *   select: { creator_pubky: true },
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
    updateManyAndReturn<T extends PropertySystemAccountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PropertySystemAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PropertySystemAccount.
     * @param {PropertySystemAccountUpsertArgs} args - Arguments to update or create a PropertySystemAccount.
     * @example
     * // Update or create a PropertySystemAccount
     * const propertySystemAccount = await prisma.propertySystemAccount.upsert({
     *   create: {
     *     // ... data to create a PropertySystemAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertySystemAccount we want to update
     *   }
     * })
     */
    upsert<T extends PropertySystemAccountUpsertArgs>(args: Prisma.SelectSubset<T, PropertySystemAccountUpsertArgs<ExtArgs>>): Prisma.Prisma__PropertySystemAccountClient<runtime.Types.Result.GetResult<Prisma.$PropertySystemAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PropertySystemAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySystemAccountCountArgs} args - Arguments to filter PropertySystemAccounts to count.
     * @example
     * // Count the number of PropertySystemAccounts
     * const count = await prisma.propertySystemAccount.count({
     *   where: {
     *     // ... the filter for the PropertySystemAccounts we want to count
     *   }
     * })
    **/
    count<T extends PropertySystemAccountCountArgs>(args?: Prisma.Subset<T, PropertySystemAccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PropertySystemAccountCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PropertySystemAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySystemAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertySystemAccountAggregateArgs>(args: Prisma.Subset<T, PropertySystemAccountAggregateArgs>): Prisma.PrismaPromise<GetPropertySystemAccountAggregateType<T>>;
    /**
     * Group by PropertySystemAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertySystemAccountGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PropertySystemAccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PropertySystemAccountGroupByArgs['orderBy'];
    } : {
        orderBy?: PropertySystemAccountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PropertySystemAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertySystemAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PropertySystemAccount model
     */
    readonly fields: PropertySystemAccountFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PropertySystemAccount.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PropertySystemAccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    dividendPdas<T extends Prisma.PropertySystemAccount$dividendPdasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertySystemAccount$dividendPdasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DividendPdaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    trusteeRegistries<T extends Prisma.PropertySystemAccount$trusteeRegistriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertySystemAccount$trusteeRegistriesArgs<ExtArgs>>): Prisma.Prisma__TrusteeRegistryClient<runtime.Types.Result.GetResult<Prisma.$TrusteeRegistryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    arbitrarRegistries<T extends Prisma.PropertySystemAccount$arbitrarRegistriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertySystemAccount$arbitrarRegistriesArgs<ExtArgs>>): Prisma.Prisma__ArbitrarRegistryClient<runtime.Types.Result.GetResult<Prisma.$ArbitrarRegistryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    thresholds<T extends Prisma.PropertySystemAccount$thresholdsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertySystemAccount$thresholdsArgs<ExtArgs>>): Prisma.Prisma__ThresholdClient<runtime.Types.Result.GetResult<Prisma.$ThresholdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    treasuries<T extends Prisma.PropertySystemAccount$treasuriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertySystemAccount$treasuriesArgs<ExtArgs>>): Prisma.Prisma__TreasuryClient<runtime.Types.Result.GetResult<Prisma.$TreasuryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    propertyAccounts<T extends Prisma.PropertySystemAccount$propertyAccountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertySystemAccount$propertyAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PropertyAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the PropertySystemAccount model
 */
export interface PropertySystemAccountFieldRefs {
    readonly creator_pubky: Prisma.FieldRef<"PropertySystemAccount", 'String'>;
    readonly property_system_id: Prisma.FieldRef<"PropertySystemAccount", 'Int'>;
    readonly property_system_public_key: Prisma.FieldRef<"PropertySystemAccount", 'String'>;
    readonly governance_mint: Prisma.FieldRef<"PropertySystemAccount", 'String'>;
    readonly threshold: Prisma.FieldRef<"PropertySystemAccount", 'String'>;
    readonly treasury: Prisma.FieldRef<"PropertySystemAccount", 'String'>;
    readonly reinvestment: Prisma.FieldRef<"PropertySystemAccount", 'String'>;
    readonly safety: Prisma.FieldRef<"PropertySystemAccount", 'String'>;
    readonly dividend: Prisma.FieldRef<"PropertySystemAccount", 'String'>;
    readonly trustee_registry: Prisma.FieldRef<"PropertySystemAccount", 'String'>;
    readonly arbitrator_registry: Prisma.FieldRef<"PropertySystemAccount", 'String'>;
    readonly total_properties: Prisma.FieldRef<"PropertySystemAccount", 'Int'>;
    readonly created_at: Prisma.FieldRef<"PropertySystemAccount", 'DateTime'>;
    readonly ready_for_listing: Prisma.FieldRef<"PropertySystemAccount", 'Boolean'>;
    readonly bump: Prisma.FieldRef<"PropertySystemAccount", 'Int'>;
}
/**
 * PropertySystemAccount findUnique
 */
export type PropertySystemAccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertySystemAccountInclude<ExtArgs> | null;
    /**
     * Filter, which PropertySystemAccount to fetch.
     */
    where: Prisma.PropertySystemAccountWhereUniqueInput;
};
/**
 * PropertySystemAccount findUniqueOrThrow
 */
export type PropertySystemAccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertySystemAccountInclude<ExtArgs> | null;
    /**
     * Filter, which PropertySystemAccount to fetch.
     */
    where: Prisma.PropertySystemAccountWhereUniqueInput;
};
/**
 * PropertySystemAccount findFirst
 */
export type PropertySystemAccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertySystemAccountInclude<ExtArgs> | null;
    /**
     * Filter, which PropertySystemAccount to fetch.
     */
    where?: Prisma.PropertySystemAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PropertySystemAccounts to fetch.
     */
    orderBy?: Prisma.PropertySystemAccountOrderByWithRelationInput | Prisma.PropertySystemAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PropertySystemAccounts.
     */
    cursor?: Prisma.PropertySystemAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PropertySystemAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PropertySystemAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PropertySystemAccounts.
     */
    distinct?: Prisma.PropertySystemAccountScalarFieldEnum | Prisma.PropertySystemAccountScalarFieldEnum[];
};
/**
 * PropertySystemAccount findFirstOrThrow
 */
export type PropertySystemAccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertySystemAccountInclude<ExtArgs> | null;
    /**
     * Filter, which PropertySystemAccount to fetch.
     */
    where?: Prisma.PropertySystemAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PropertySystemAccounts to fetch.
     */
    orderBy?: Prisma.PropertySystemAccountOrderByWithRelationInput | Prisma.PropertySystemAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PropertySystemAccounts.
     */
    cursor?: Prisma.PropertySystemAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PropertySystemAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PropertySystemAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PropertySystemAccounts.
     */
    distinct?: Prisma.PropertySystemAccountScalarFieldEnum | Prisma.PropertySystemAccountScalarFieldEnum[];
};
/**
 * PropertySystemAccount findMany
 */
export type PropertySystemAccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertySystemAccountInclude<ExtArgs> | null;
    /**
     * Filter, which PropertySystemAccounts to fetch.
     */
    where?: Prisma.PropertySystemAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PropertySystemAccounts to fetch.
     */
    orderBy?: Prisma.PropertySystemAccountOrderByWithRelationInput | Prisma.PropertySystemAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PropertySystemAccounts.
     */
    cursor?: Prisma.PropertySystemAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PropertySystemAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PropertySystemAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PropertySystemAccounts.
     */
    distinct?: Prisma.PropertySystemAccountScalarFieldEnum | Prisma.PropertySystemAccountScalarFieldEnum[];
};
/**
 * PropertySystemAccount create
 */
export type PropertySystemAccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertySystemAccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a PropertySystemAccount.
     */
    data: Prisma.XOR<Prisma.PropertySystemAccountCreateInput, Prisma.PropertySystemAccountUncheckedCreateInput>;
};
/**
 * PropertySystemAccount createMany
 */
export type PropertySystemAccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertySystemAccounts.
     */
    data: Prisma.PropertySystemAccountCreateManyInput | Prisma.PropertySystemAccountCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PropertySystemAccount createManyAndReturn
 */
export type PropertySystemAccountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * The data used to create many PropertySystemAccounts.
     */
    data: Prisma.PropertySystemAccountCreateManyInput | Prisma.PropertySystemAccountCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PropertySystemAccount update
 */
export type PropertySystemAccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertySystemAccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a PropertySystemAccount.
     */
    data: Prisma.XOR<Prisma.PropertySystemAccountUpdateInput, Prisma.PropertySystemAccountUncheckedUpdateInput>;
    /**
     * Choose, which PropertySystemAccount to update.
     */
    where: Prisma.PropertySystemAccountWhereUniqueInput;
};
/**
 * PropertySystemAccount updateMany
 */
export type PropertySystemAccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertySystemAccounts.
     */
    data: Prisma.XOR<Prisma.PropertySystemAccountUpdateManyMutationInput, Prisma.PropertySystemAccountUncheckedUpdateManyInput>;
    /**
     * Filter which PropertySystemAccounts to update
     */
    where?: Prisma.PropertySystemAccountWhereInput;
    /**
     * Limit how many PropertySystemAccounts to update.
     */
    limit?: number;
};
/**
 * PropertySystemAccount updateManyAndReturn
 */
export type PropertySystemAccountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * The data used to update PropertySystemAccounts.
     */
    data: Prisma.XOR<Prisma.PropertySystemAccountUpdateManyMutationInput, Prisma.PropertySystemAccountUncheckedUpdateManyInput>;
    /**
     * Filter which PropertySystemAccounts to update
     */
    where?: Prisma.PropertySystemAccountWhereInput;
    /**
     * Limit how many PropertySystemAccounts to update.
     */
    limit?: number;
};
/**
 * PropertySystemAccount upsert
 */
export type PropertySystemAccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertySystemAccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the PropertySystemAccount to update in case it exists.
     */
    where: Prisma.PropertySystemAccountWhereUniqueInput;
    /**
     * In case the PropertySystemAccount found by the `where` argument doesn't exist, create a new PropertySystemAccount with this data.
     */
    create: Prisma.XOR<Prisma.PropertySystemAccountCreateInput, Prisma.PropertySystemAccountUncheckedCreateInput>;
    /**
     * In case the PropertySystemAccount was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PropertySystemAccountUpdateInput, Prisma.PropertySystemAccountUncheckedUpdateInput>;
};
/**
 * PropertySystemAccount delete
 */
export type PropertySystemAccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertySystemAccountInclude<ExtArgs> | null;
    /**
     * Filter which PropertySystemAccount to delete.
     */
    where: Prisma.PropertySystemAccountWhereUniqueInput;
};
/**
 * PropertySystemAccount deleteMany
 */
export type PropertySystemAccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PropertySystemAccounts to delete
     */
    where?: Prisma.PropertySystemAccountWhereInput;
    /**
     * Limit how many PropertySystemAccounts to delete.
     */
    limit?: number;
};
/**
 * PropertySystemAccount.dividendPdas
 */
export type PropertySystemAccount$dividendPdasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DividendPda
     */
    select?: Prisma.DividendPdaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DividendPda
     */
    omit?: Prisma.DividendPdaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DividendPdaInclude<ExtArgs> | null;
    where?: Prisma.DividendPdaWhereInput;
    orderBy?: Prisma.DividendPdaOrderByWithRelationInput | Prisma.DividendPdaOrderByWithRelationInput[];
    cursor?: Prisma.DividendPdaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DividendPdaScalarFieldEnum | Prisma.DividendPdaScalarFieldEnum[];
};
/**
 * PropertySystemAccount.trusteeRegistries
 */
export type PropertySystemAccount$trusteeRegistriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrusteeRegistry
     */
    select?: Prisma.TrusteeRegistrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TrusteeRegistry
     */
    omit?: Prisma.TrusteeRegistryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrusteeRegistryInclude<ExtArgs> | null;
    where?: Prisma.TrusteeRegistryWhereInput;
};
/**
 * PropertySystemAccount.arbitrarRegistries
 */
export type PropertySystemAccount$arbitrarRegistriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArbitrarRegistry
     */
    select?: Prisma.ArbitrarRegistrySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ArbitrarRegistry
     */
    omit?: Prisma.ArbitrarRegistryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ArbitrarRegistryInclude<ExtArgs> | null;
    where?: Prisma.ArbitrarRegistryWhereInput;
};
/**
 * PropertySystemAccount.thresholds
 */
export type PropertySystemAccount$thresholdsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Threshold
     */
    select?: Prisma.ThresholdSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Threshold
     */
    omit?: Prisma.ThresholdOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ThresholdInclude<ExtArgs> | null;
    where?: Prisma.ThresholdWhereInput;
};
/**
 * PropertySystemAccount.treasuries
 */
export type PropertySystemAccount$treasuriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treasury
     */
    select?: Prisma.TreasurySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Treasury
     */
    omit?: Prisma.TreasuryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TreasuryInclude<ExtArgs> | null;
    where?: Prisma.TreasuryWhereInput;
};
/**
 * PropertySystemAccount.propertyAccounts
 */
export type PropertySystemAccount$propertyAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAccount
     */
    select?: Prisma.PropertyAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertyAccount
     */
    omit?: Prisma.PropertyAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertyAccountInclude<ExtArgs> | null;
    where?: Prisma.PropertyAccountWhereInput;
    orderBy?: Prisma.PropertyAccountOrderByWithRelationInput | Prisma.PropertyAccountOrderByWithRelationInput[];
    cursor?: Prisma.PropertyAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertyAccountScalarFieldEnum | Prisma.PropertyAccountScalarFieldEnum[];
};
/**
 * PropertySystemAccount without action
 */
export type PropertySystemAccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertySystemAccount
     */
    select?: Prisma.PropertySystemAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PropertySystemAccount
     */
    omit?: Prisma.PropertySystemAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PropertySystemAccountInclude<ExtArgs> | null;
};
//# sourceMappingURL=PropertySystemAccount.d.ts.map