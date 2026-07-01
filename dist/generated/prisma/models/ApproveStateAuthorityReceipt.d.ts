import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ApproveStateAuthorityReceipt
 *
 */
export type ApproveStateAuthorityReceiptModel = runtime.Types.Result.DefaultSelection<Prisma.$ApproveStateAuthorityReceiptPayload>;
export type AggregateApproveStateAuthorityReceipt = {
    _count: ApproveStateAuthorityReceiptCountAggregateOutputType | null;
    _avg: ApproveStateAuthorityReceiptAvgAggregateOutputType | null;
    _sum: ApproveStateAuthorityReceiptSumAggregateOutputType | null;
    _min: ApproveStateAuthorityReceiptMinAggregateOutputType | null;
    _max: ApproveStateAuthorityReceiptMaxAggregateOutputType | null;
};
export type ApproveStateAuthorityReceiptAvgAggregateOutputType = {
    id: number | null;
    bump: number | null;
};
export type ApproveStateAuthorityReceiptSumAggregateOutputType = {
    id: number | null;
    bump: number | null;
};
export type ApproveStateAuthorityReceiptMinAggregateOutputType = {
    id: number | null;
    proposal_key: string | null;
    approval_time: Date | null;
    signer: string | null;
    bump: number | null;
};
export type ApproveStateAuthorityReceiptMaxAggregateOutputType = {
    id: number | null;
    proposal_key: string | null;
    approval_time: Date | null;
    signer: string | null;
    bump: number | null;
};
export type ApproveStateAuthorityReceiptCountAggregateOutputType = {
    id: number;
    proposal_key: number;
    approval_time: number;
    signer: number;
    bump: number;
    _all: number;
};
export type ApproveStateAuthorityReceiptAvgAggregateInputType = {
    id?: true;
    bump?: true;
};
export type ApproveStateAuthorityReceiptSumAggregateInputType = {
    id?: true;
    bump?: true;
};
export type ApproveStateAuthorityReceiptMinAggregateInputType = {
    id?: true;
    proposal_key?: true;
    approval_time?: true;
    signer?: true;
    bump?: true;
};
export type ApproveStateAuthorityReceiptMaxAggregateInputType = {
    id?: true;
    proposal_key?: true;
    approval_time?: true;
    signer?: true;
    bump?: true;
};
export type ApproveStateAuthorityReceiptCountAggregateInputType = {
    id?: true;
    proposal_key?: true;
    approval_time?: true;
    signer?: true;
    bump?: true;
    _all?: true;
};
export type ApproveStateAuthorityReceiptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ApproveStateAuthorityReceipt to aggregate.
     */
    where?: Prisma.ApproveStateAuthorityReceiptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveStateAuthorityReceipts to fetch.
     */
    orderBy?: Prisma.ApproveStateAuthorityReceiptOrderByWithRelationInput | Prisma.ApproveStateAuthorityReceiptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveStateAuthorityReceipts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveStateAuthorityReceipts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ApproveStateAuthorityReceipts
    **/
    _count?: true | ApproveStateAuthorityReceiptCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ApproveStateAuthorityReceiptAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ApproveStateAuthorityReceiptSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ApproveStateAuthorityReceiptMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ApproveStateAuthorityReceiptMaxAggregateInputType;
};
export type GetApproveStateAuthorityReceiptAggregateType<T extends ApproveStateAuthorityReceiptAggregateArgs> = {
    [P in keyof T & keyof AggregateApproveStateAuthorityReceipt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApproveStateAuthorityReceipt[P]> : Prisma.GetScalarType<T[P], AggregateApproveStateAuthorityReceipt[P]>;
};
export type ApproveStateAuthorityReceiptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApproveStateAuthorityReceiptWhereInput;
    orderBy?: Prisma.ApproveStateAuthorityReceiptOrderByWithAggregationInput | Prisma.ApproveStateAuthorityReceiptOrderByWithAggregationInput[];
    by: Prisma.ApproveStateAuthorityReceiptScalarFieldEnum[] | Prisma.ApproveStateAuthorityReceiptScalarFieldEnum;
    having?: Prisma.ApproveStateAuthorityReceiptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApproveStateAuthorityReceiptCountAggregateInputType | true;
    _avg?: ApproveStateAuthorityReceiptAvgAggregateInputType;
    _sum?: ApproveStateAuthorityReceiptSumAggregateInputType;
    _min?: ApproveStateAuthorityReceiptMinAggregateInputType;
    _max?: ApproveStateAuthorityReceiptMaxAggregateInputType;
};
export type ApproveStateAuthorityReceiptGroupByOutputType = {
    id: number;
    proposal_key: string;
    approval_time: Date;
    signer: string;
    bump: number;
    _count: ApproveStateAuthorityReceiptCountAggregateOutputType | null;
    _avg: ApproveStateAuthorityReceiptAvgAggregateOutputType | null;
    _sum: ApproveStateAuthorityReceiptSumAggregateOutputType | null;
    _min: ApproveStateAuthorityReceiptMinAggregateOutputType | null;
    _max: ApproveStateAuthorityReceiptMaxAggregateOutputType | null;
};
export type GetApproveStateAuthorityReceiptGroupByPayload<T extends ApproveStateAuthorityReceiptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApproveStateAuthorityReceiptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApproveStateAuthorityReceiptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApproveStateAuthorityReceiptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApproveStateAuthorityReceiptGroupByOutputType[P]>;
}>>;
export type ApproveStateAuthorityReceiptWhereInput = {
    AND?: Prisma.ApproveStateAuthorityReceiptWhereInput | Prisma.ApproveStateAuthorityReceiptWhereInput[];
    OR?: Prisma.ApproveStateAuthorityReceiptWhereInput[];
    NOT?: Prisma.ApproveStateAuthorityReceiptWhereInput | Prisma.ApproveStateAuthorityReceiptWhereInput[];
    id?: Prisma.IntFilter<"ApproveStateAuthorityReceipt"> | number;
    proposal_key?: Prisma.StringFilter<"ApproveStateAuthorityReceipt"> | string;
    approval_time?: Prisma.DateTimeFilter<"ApproveStateAuthorityReceipt"> | Date | string;
    signer?: Prisma.StringFilter<"ApproveStateAuthorityReceipt"> | string;
    bump?: Prisma.IntFilter<"ApproveStateAuthorityReceipt"> | number;
    proposal?: Prisma.XOR<Prisma.StateProposalScalarRelationFilter, Prisma.StateProposalWhereInput>;
};
export type ApproveStateAuthorityReceiptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proposal_key?: Prisma.SortOrder;
    approval_time?: Prisma.SortOrder;
    signer?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    proposal?: Prisma.StateProposalOrderByWithRelationInput;
};
export type ApproveStateAuthorityReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    proposal_key_signer?: Prisma.ApproveStateAuthorityReceiptProposal_keySignerCompoundUniqueInput;
    AND?: Prisma.ApproveStateAuthorityReceiptWhereInput | Prisma.ApproveStateAuthorityReceiptWhereInput[];
    OR?: Prisma.ApproveStateAuthorityReceiptWhereInput[];
    NOT?: Prisma.ApproveStateAuthorityReceiptWhereInput | Prisma.ApproveStateAuthorityReceiptWhereInput[];
    proposal_key?: Prisma.StringFilter<"ApproveStateAuthorityReceipt"> | string;
    approval_time?: Prisma.DateTimeFilter<"ApproveStateAuthorityReceipt"> | Date | string;
    signer?: Prisma.StringFilter<"ApproveStateAuthorityReceipt"> | string;
    bump?: Prisma.IntFilter<"ApproveStateAuthorityReceipt"> | number;
    proposal?: Prisma.XOR<Prisma.StateProposalScalarRelationFilter, Prisma.StateProposalWhereInput>;
}, "id" | "proposal_key_signer">;
export type ApproveStateAuthorityReceiptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proposal_key?: Prisma.SortOrder;
    approval_time?: Prisma.SortOrder;
    signer?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    _count?: Prisma.ApproveStateAuthorityReceiptCountOrderByAggregateInput;
    _avg?: Prisma.ApproveStateAuthorityReceiptAvgOrderByAggregateInput;
    _max?: Prisma.ApproveStateAuthorityReceiptMaxOrderByAggregateInput;
    _min?: Prisma.ApproveStateAuthorityReceiptMinOrderByAggregateInput;
    _sum?: Prisma.ApproveStateAuthorityReceiptSumOrderByAggregateInput;
};
export type ApproveStateAuthorityReceiptScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApproveStateAuthorityReceiptScalarWhereWithAggregatesInput | Prisma.ApproveStateAuthorityReceiptScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApproveStateAuthorityReceiptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApproveStateAuthorityReceiptScalarWhereWithAggregatesInput | Prisma.ApproveStateAuthorityReceiptScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ApproveStateAuthorityReceipt"> | number;
    proposal_key?: Prisma.StringWithAggregatesFilter<"ApproveStateAuthorityReceipt"> | string;
    approval_time?: Prisma.DateTimeWithAggregatesFilter<"ApproveStateAuthorityReceipt"> | Date | string;
    signer?: Prisma.StringWithAggregatesFilter<"ApproveStateAuthorityReceipt"> | string;
    bump?: Prisma.IntWithAggregatesFilter<"ApproveStateAuthorityReceipt"> | number;
};
export type ApproveStateAuthorityReceiptCreateInput = {
    approval_time?: Date | string;
    signer: string;
    bump: number;
    proposal: Prisma.StateProposalCreateNestedOneWithoutApprovalInput;
};
export type ApproveStateAuthorityReceiptUncheckedCreateInput = {
    id?: number;
    proposal_key: string;
    approval_time?: Date | string;
    signer: string;
    bump: number;
};
export type ApproveStateAuthorityReceiptUpdateInput = {
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    proposal?: Prisma.StateProposalUpdateOneRequiredWithoutApprovalNestedInput;
};
export type ApproveStateAuthorityReceiptUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proposal_key?: Prisma.StringFieldUpdateOperationsInput | string;
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveStateAuthorityReceiptCreateManyInput = {
    id?: number;
    proposal_key: string;
    approval_time?: Date | string;
    signer: string;
    bump: number;
};
export type ApproveStateAuthorityReceiptUpdateManyMutationInput = {
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveStateAuthorityReceiptUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proposal_key?: Prisma.StringFieldUpdateOperationsInput | string;
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveStateAuthorityReceiptProposal_keySignerCompoundUniqueInput = {
    proposal_key: string;
    signer: string;
};
export type ApproveStateAuthorityReceiptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposal_key?: Prisma.SortOrder;
    approval_time?: Prisma.SortOrder;
    signer?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type ApproveStateAuthorityReceiptAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type ApproveStateAuthorityReceiptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposal_key?: Prisma.SortOrder;
    approval_time?: Prisma.SortOrder;
    signer?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type ApproveStateAuthorityReceiptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposal_key?: Prisma.SortOrder;
    approval_time?: Prisma.SortOrder;
    signer?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type ApproveStateAuthorityReceiptSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type ApproveStateAuthorityReceiptListRelationFilter = {
    every?: Prisma.ApproveStateAuthorityReceiptWhereInput;
    some?: Prisma.ApproveStateAuthorityReceiptWhereInput;
    none?: Prisma.ApproveStateAuthorityReceiptWhereInput;
};
export type ApproveStateAuthorityReceiptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApproveStateAuthorityReceiptCreateNestedManyWithoutProposalInput = {
    create?: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput> | Prisma.ApproveStateAuthorityReceiptCreateWithoutProposalInput[] | Prisma.ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput[];
    connectOrCreate?: Prisma.ApproveStateAuthorityReceiptCreateOrConnectWithoutProposalInput | Prisma.ApproveStateAuthorityReceiptCreateOrConnectWithoutProposalInput[];
    createMany?: Prisma.ApproveStateAuthorityReceiptCreateManyProposalInputEnvelope;
    connect?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput | Prisma.ApproveStateAuthorityReceiptWhereUniqueInput[];
};
export type ApproveStateAuthorityReceiptUncheckedCreateNestedManyWithoutProposalInput = {
    create?: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput> | Prisma.ApproveStateAuthorityReceiptCreateWithoutProposalInput[] | Prisma.ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput[];
    connectOrCreate?: Prisma.ApproveStateAuthorityReceiptCreateOrConnectWithoutProposalInput | Prisma.ApproveStateAuthorityReceiptCreateOrConnectWithoutProposalInput[];
    createMany?: Prisma.ApproveStateAuthorityReceiptCreateManyProposalInputEnvelope;
    connect?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput | Prisma.ApproveStateAuthorityReceiptWhereUniqueInput[];
};
export type ApproveStateAuthorityReceiptUpdateManyWithoutProposalNestedInput = {
    create?: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput> | Prisma.ApproveStateAuthorityReceiptCreateWithoutProposalInput[] | Prisma.ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput[];
    connectOrCreate?: Prisma.ApproveStateAuthorityReceiptCreateOrConnectWithoutProposalInput | Prisma.ApproveStateAuthorityReceiptCreateOrConnectWithoutProposalInput[];
    upsert?: Prisma.ApproveStateAuthorityReceiptUpsertWithWhereUniqueWithoutProposalInput | Prisma.ApproveStateAuthorityReceiptUpsertWithWhereUniqueWithoutProposalInput[];
    createMany?: Prisma.ApproveStateAuthorityReceiptCreateManyProposalInputEnvelope;
    set?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput | Prisma.ApproveStateAuthorityReceiptWhereUniqueInput[];
    disconnect?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput | Prisma.ApproveStateAuthorityReceiptWhereUniqueInput[];
    delete?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput | Prisma.ApproveStateAuthorityReceiptWhereUniqueInput[];
    connect?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput | Prisma.ApproveStateAuthorityReceiptWhereUniqueInput[];
    update?: Prisma.ApproveStateAuthorityReceiptUpdateWithWhereUniqueWithoutProposalInput | Prisma.ApproveStateAuthorityReceiptUpdateWithWhereUniqueWithoutProposalInput[];
    updateMany?: Prisma.ApproveStateAuthorityReceiptUpdateManyWithWhereWithoutProposalInput | Prisma.ApproveStateAuthorityReceiptUpdateManyWithWhereWithoutProposalInput[];
    deleteMany?: Prisma.ApproveStateAuthorityReceiptScalarWhereInput | Prisma.ApproveStateAuthorityReceiptScalarWhereInput[];
};
export type ApproveStateAuthorityReceiptUncheckedUpdateManyWithoutProposalNestedInput = {
    create?: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput> | Prisma.ApproveStateAuthorityReceiptCreateWithoutProposalInput[] | Prisma.ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput[];
    connectOrCreate?: Prisma.ApproveStateAuthorityReceiptCreateOrConnectWithoutProposalInput | Prisma.ApproveStateAuthorityReceiptCreateOrConnectWithoutProposalInput[];
    upsert?: Prisma.ApproveStateAuthorityReceiptUpsertWithWhereUniqueWithoutProposalInput | Prisma.ApproveStateAuthorityReceiptUpsertWithWhereUniqueWithoutProposalInput[];
    createMany?: Prisma.ApproveStateAuthorityReceiptCreateManyProposalInputEnvelope;
    set?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput | Prisma.ApproveStateAuthorityReceiptWhereUniqueInput[];
    disconnect?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput | Prisma.ApproveStateAuthorityReceiptWhereUniqueInput[];
    delete?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput | Prisma.ApproveStateAuthorityReceiptWhereUniqueInput[];
    connect?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput | Prisma.ApproveStateAuthorityReceiptWhereUniqueInput[];
    update?: Prisma.ApproveStateAuthorityReceiptUpdateWithWhereUniqueWithoutProposalInput | Prisma.ApproveStateAuthorityReceiptUpdateWithWhereUniqueWithoutProposalInput[];
    updateMany?: Prisma.ApproveStateAuthorityReceiptUpdateManyWithWhereWithoutProposalInput | Prisma.ApproveStateAuthorityReceiptUpdateManyWithWhereWithoutProposalInput[];
    deleteMany?: Prisma.ApproveStateAuthorityReceiptScalarWhereInput | Prisma.ApproveStateAuthorityReceiptScalarWhereInput[];
};
export type ApproveStateAuthorityReceiptCreateWithoutProposalInput = {
    approval_time?: Date | string;
    signer: string;
    bump: number;
};
export type ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput = {
    id?: number;
    approval_time?: Date | string;
    signer: string;
    bump: number;
};
export type ApproveStateAuthorityReceiptCreateOrConnectWithoutProposalInput = {
    where: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput>;
};
export type ApproveStateAuthorityReceiptCreateManyProposalInputEnvelope = {
    data: Prisma.ApproveStateAuthorityReceiptCreateManyProposalInput | Prisma.ApproveStateAuthorityReceiptCreateManyProposalInput[];
    skipDuplicates?: boolean;
};
export type ApproveStateAuthorityReceiptUpsertWithWhereUniqueWithoutProposalInput = {
    where: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptUpdateWithoutProposalInput, Prisma.ApproveStateAuthorityReceiptUncheckedUpdateWithoutProposalInput>;
    create: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveStateAuthorityReceiptUncheckedCreateWithoutProposalInput>;
};
export type ApproveStateAuthorityReceiptUpdateWithWhereUniqueWithoutProposalInput = {
    where: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptUpdateWithoutProposalInput, Prisma.ApproveStateAuthorityReceiptUncheckedUpdateWithoutProposalInput>;
};
export type ApproveStateAuthorityReceiptUpdateManyWithWhereWithoutProposalInput = {
    where: Prisma.ApproveStateAuthorityReceiptScalarWhereInput;
    data: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptUpdateManyMutationInput, Prisma.ApproveStateAuthorityReceiptUncheckedUpdateManyWithoutProposalInput>;
};
export type ApproveStateAuthorityReceiptScalarWhereInput = {
    AND?: Prisma.ApproveStateAuthorityReceiptScalarWhereInput | Prisma.ApproveStateAuthorityReceiptScalarWhereInput[];
    OR?: Prisma.ApproveStateAuthorityReceiptScalarWhereInput[];
    NOT?: Prisma.ApproveStateAuthorityReceiptScalarWhereInput | Prisma.ApproveStateAuthorityReceiptScalarWhereInput[];
    id?: Prisma.IntFilter<"ApproveStateAuthorityReceipt"> | number;
    proposal_key?: Prisma.StringFilter<"ApproveStateAuthorityReceipt"> | string;
    approval_time?: Prisma.DateTimeFilter<"ApproveStateAuthorityReceipt"> | Date | string;
    signer?: Prisma.StringFilter<"ApproveStateAuthorityReceipt"> | string;
    bump?: Prisma.IntFilter<"ApproveStateAuthorityReceipt"> | number;
};
export type ApproveStateAuthorityReceiptCreateManyProposalInput = {
    id?: number;
    approval_time?: Date | string;
    signer: string;
    bump: number;
};
export type ApproveStateAuthorityReceiptUpdateWithoutProposalInput = {
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveStateAuthorityReceiptUncheckedUpdateWithoutProposalInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveStateAuthorityReceiptUncheckedUpdateManyWithoutProposalInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveStateAuthorityReceiptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposal_key?: boolean;
    approval_time?: boolean;
    signer?: boolean;
    bump?: boolean;
    proposal?: boolean | Prisma.StateProposalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approveStateAuthorityReceipt"]>;
export type ApproveStateAuthorityReceiptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposal_key?: boolean;
    approval_time?: boolean;
    signer?: boolean;
    bump?: boolean;
    proposal?: boolean | Prisma.StateProposalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approveStateAuthorityReceipt"]>;
export type ApproveStateAuthorityReceiptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposal_key?: boolean;
    approval_time?: boolean;
    signer?: boolean;
    bump?: boolean;
    proposal?: boolean | Prisma.StateProposalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approveStateAuthorityReceipt"]>;
export type ApproveStateAuthorityReceiptSelectScalar = {
    id?: boolean;
    proposal_key?: boolean;
    approval_time?: boolean;
    signer?: boolean;
    bump?: boolean;
};
export type ApproveStateAuthorityReceiptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proposal_key" | "approval_time" | "signer" | "bump", ExtArgs["result"]["approveStateAuthorityReceipt"]>;
export type ApproveStateAuthorityReceiptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposal?: boolean | Prisma.StateProposalDefaultArgs<ExtArgs>;
};
export type ApproveStateAuthorityReceiptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposal?: boolean | Prisma.StateProposalDefaultArgs<ExtArgs>;
};
export type ApproveStateAuthorityReceiptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposal?: boolean | Prisma.StateProposalDefaultArgs<ExtArgs>;
};
export type $ApproveStateAuthorityReceiptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApproveStateAuthorityReceipt";
    objects: {
        proposal: Prisma.$StateProposalPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        proposal_key: string;
        approval_time: Date;
        signer: string;
        bump: number;
    }, ExtArgs["result"]["approveStateAuthorityReceipt"]>;
    composites: {};
};
export type ApproveStateAuthorityReceiptGetPayload<S extends boolean | null | undefined | ApproveStateAuthorityReceiptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload, S>;
export type ApproveStateAuthorityReceiptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApproveStateAuthorityReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApproveStateAuthorityReceiptCountAggregateInputType | true;
};
export interface ApproveStateAuthorityReceiptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApproveStateAuthorityReceipt'];
        meta: {
            name: 'ApproveStateAuthorityReceipt';
        };
    };
    /**
     * Find zero or one ApproveStateAuthorityReceipt that matches the filter.
     * @param {ApproveStateAuthorityReceiptFindUniqueArgs} args - Arguments to find a ApproveStateAuthorityReceipt
     * @example
     * // Get one ApproveStateAuthorityReceipt
     * const approveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApproveStateAuthorityReceiptFindUniqueArgs>(args: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApproveStateAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ApproveStateAuthorityReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApproveStateAuthorityReceiptFindUniqueOrThrowArgs} args - Arguments to find a ApproveStateAuthorityReceipt
     * @example
     * // Get one ApproveStateAuthorityReceipt
     * const approveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApproveStateAuthorityReceiptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApproveStateAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ApproveStateAuthorityReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveStateAuthorityReceiptFindFirstArgs} args - Arguments to find a ApproveStateAuthorityReceipt
     * @example
     * // Get one ApproveStateAuthorityReceipt
     * const approveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApproveStateAuthorityReceiptFindFirstArgs>(args?: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApproveStateAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ApproveStateAuthorityReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveStateAuthorityReceiptFindFirstOrThrowArgs} args - Arguments to find a ApproveStateAuthorityReceipt
     * @example
     * // Get one ApproveStateAuthorityReceipt
     * const approveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApproveStateAuthorityReceiptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApproveStateAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ApproveStateAuthorityReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveStateAuthorityReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApproveStateAuthorityReceipts
     * const approveStateAuthorityReceipts = await prisma.approveStateAuthorityReceipt.findMany()
     *
     * // Get first 10 ApproveStateAuthorityReceipts
     * const approveStateAuthorityReceipts = await prisma.approveStateAuthorityReceipt.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const approveStateAuthorityReceiptWithIdOnly = await prisma.approveStateAuthorityReceipt.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApproveStateAuthorityReceiptFindManyArgs>(args?: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ApproveStateAuthorityReceipt.
     * @param {ApproveStateAuthorityReceiptCreateArgs} args - Arguments to create a ApproveStateAuthorityReceipt.
     * @example
     * // Create one ApproveStateAuthorityReceipt
     * const ApproveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.create({
     *   data: {
     *     // ... data to create a ApproveStateAuthorityReceipt
     *   }
     * })
     *
     */
    create<T extends ApproveStateAuthorityReceiptCreateArgs>(args: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptCreateArgs<ExtArgs>>): Prisma.Prisma__ApproveStateAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ApproveStateAuthorityReceipts.
     * @param {ApproveStateAuthorityReceiptCreateManyArgs} args - Arguments to create many ApproveStateAuthorityReceipts.
     * @example
     * // Create many ApproveStateAuthorityReceipts
     * const approveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApproveStateAuthorityReceiptCreateManyArgs>(args?: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ApproveStateAuthorityReceipts and returns the data saved in the database.
     * @param {ApproveStateAuthorityReceiptCreateManyAndReturnArgs} args - Arguments to create many ApproveStateAuthorityReceipts.
     * @example
     * // Create many ApproveStateAuthorityReceipts
     * const approveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ApproveStateAuthorityReceipts and only return the `id`
     * const approveStateAuthorityReceiptWithIdOnly = await prisma.approveStateAuthorityReceipt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApproveStateAuthorityReceiptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ApproveStateAuthorityReceipt.
     * @param {ApproveStateAuthorityReceiptDeleteArgs} args - Arguments to delete one ApproveStateAuthorityReceipt.
     * @example
     * // Delete one ApproveStateAuthorityReceipt
     * const ApproveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.delete({
     *   where: {
     *     // ... filter to delete one ApproveStateAuthorityReceipt
     *   }
     * })
     *
     */
    delete<T extends ApproveStateAuthorityReceiptDeleteArgs>(args: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptDeleteArgs<ExtArgs>>): Prisma.Prisma__ApproveStateAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ApproveStateAuthorityReceipt.
     * @param {ApproveStateAuthorityReceiptUpdateArgs} args - Arguments to update one ApproveStateAuthorityReceipt.
     * @example
     * // Update one ApproveStateAuthorityReceipt
     * const approveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApproveStateAuthorityReceiptUpdateArgs>(args: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptUpdateArgs<ExtArgs>>): Prisma.Prisma__ApproveStateAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ApproveStateAuthorityReceipts.
     * @param {ApproveStateAuthorityReceiptDeleteManyArgs} args - Arguments to filter ApproveStateAuthorityReceipts to delete.
     * @example
     * // Delete a few ApproveStateAuthorityReceipts
     * const { count } = await prisma.approveStateAuthorityReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApproveStateAuthorityReceiptDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ApproveStateAuthorityReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveStateAuthorityReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApproveStateAuthorityReceipts
     * const approveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApproveStateAuthorityReceiptUpdateManyArgs>(args: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ApproveStateAuthorityReceipts and returns the data updated in the database.
     * @param {ApproveStateAuthorityReceiptUpdateManyAndReturnArgs} args - Arguments to update many ApproveStateAuthorityReceipts.
     * @example
     * // Update many ApproveStateAuthorityReceipts
     * const approveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ApproveStateAuthorityReceipts and only return the `id`
     * const approveStateAuthorityReceiptWithIdOnly = await prisma.approveStateAuthorityReceipt.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApproveStateAuthorityReceiptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ApproveStateAuthorityReceipt.
     * @param {ApproveStateAuthorityReceiptUpsertArgs} args - Arguments to update or create a ApproveStateAuthorityReceipt.
     * @example
     * // Update or create a ApproveStateAuthorityReceipt
     * const approveStateAuthorityReceipt = await prisma.approveStateAuthorityReceipt.upsert({
     *   create: {
     *     // ... data to create a ApproveStateAuthorityReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApproveStateAuthorityReceipt we want to update
     *   }
     * })
     */
    upsert<T extends ApproveStateAuthorityReceiptUpsertArgs>(args: Prisma.SelectSubset<T, ApproveStateAuthorityReceiptUpsertArgs<ExtArgs>>): Prisma.Prisma__ApproveStateAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveStateAuthorityReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ApproveStateAuthorityReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveStateAuthorityReceiptCountArgs} args - Arguments to filter ApproveStateAuthorityReceipts to count.
     * @example
     * // Count the number of ApproveStateAuthorityReceipts
     * const count = await prisma.approveStateAuthorityReceipt.count({
     *   where: {
     *     // ... the filter for the ApproveStateAuthorityReceipts we want to count
     *   }
     * })
    **/
    count<T extends ApproveStateAuthorityReceiptCountArgs>(args?: Prisma.Subset<T, ApproveStateAuthorityReceiptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApproveStateAuthorityReceiptCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ApproveStateAuthorityReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveStateAuthorityReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApproveStateAuthorityReceiptAggregateArgs>(args: Prisma.Subset<T, ApproveStateAuthorityReceiptAggregateArgs>): Prisma.PrismaPromise<GetApproveStateAuthorityReceiptAggregateType<T>>;
    /**
     * Group by ApproveStateAuthorityReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveStateAuthorityReceiptGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ApproveStateAuthorityReceiptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApproveStateAuthorityReceiptGroupByArgs['orderBy'];
    } : {
        orderBy?: ApproveStateAuthorityReceiptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApproveStateAuthorityReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApproveStateAuthorityReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ApproveStateAuthorityReceipt model
     */
    readonly fields: ApproveStateAuthorityReceiptFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ApproveStateAuthorityReceipt.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ApproveStateAuthorityReceiptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proposal<T extends Prisma.StateProposalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StateProposalDefaultArgs<ExtArgs>>): Prisma.Prisma__StateProposalClient<runtime.Types.Result.GetResult<Prisma.$StateProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ApproveStateAuthorityReceipt model
 */
export interface ApproveStateAuthorityReceiptFieldRefs {
    readonly id: Prisma.FieldRef<"ApproveStateAuthorityReceipt", 'Int'>;
    readonly proposal_key: Prisma.FieldRef<"ApproveStateAuthorityReceipt", 'String'>;
    readonly approval_time: Prisma.FieldRef<"ApproveStateAuthorityReceipt", 'DateTime'>;
    readonly signer: Prisma.FieldRef<"ApproveStateAuthorityReceipt", 'String'>;
    readonly bump: Prisma.FieldRef<"ApproveStateAuthorityReceipt", 'Int'>;
}
/**
 * ApproveStateAuthorityReceipt findUnique
 */
export type ApproveStateAuthorityReceiptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter, which ApproveStateAuthorityReceipt to fetch.
     */
    where: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
};
/**
 * ApproveStateAuthorityReceipt findUniqueOrThrow
 */
export type ApproveStateAuthorityReceiptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter, which ApproveStateAuthorityReceipt to fetch.
     */
    where: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
};
/**
 * ApproveStateAuthorityReceipt findFirst
 */
export type ApproveStateAuthorityReceiptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter, which ApproveStateAuthorityReceipt to fetch.
     */
    where?: Prisma.ApproveStateAuthorityReceiptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveStateAuthorityReceipts to fetch.
     */
    orderBy?: Prisma.ApproveStateAuthorityReceiptOrderByWithRelationInput | Prisma.ApproveStateAuthorityReceiptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApproveStateAuthorityReceipts.
     */
    cursor?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveStateAuthorityReceipts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveStateAuthorityReceipts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApproveStateAuthorityReceipts.
     */
    distinct?: Prisma.ApproveStateAuthorityReceiptScalarFieldEnum | Prisma.ApproveStateAuthorityReceiptScalarFieldEnum[];
};
/**
 * ApproveStateAuthorityReceipt findFirstOrThrow
 */
export type ApproveStateAuthorityReceiptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter, which ApproveStateAuthorityReceipt to fetch.
     */
    where?: Prisma.ApproveStateAuthorityReceiptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveStateAuthorityReceipts to fetch.
     */
    orderBy?: Prisma.ApproveStateAuthorityReceiptOrderByWithRelationInput | Prisma.ApproveStateAuthorityReceiptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApproveStateAuthorityReceipts.
     */
    cursor?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveStateAuthorityReceipts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveStateAuthorityReceipts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApproveStateAuthorityReceipts.
     */
    distinct?: Prisma.ApproveStateAuthorityReceiptScalarFieldEnum | Prisma.ApproveStateAuthorityReceiptScalarFieldEnum[];
};
/**
 * ApproveStateAuthorityReceipt findMany
 */
export type ApproveStateAuthorityReceiptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter, which ApproveStateAuthorityReceipts to fetch.
     */
    where?: Prisma.ApproveStateAuthorityReceiptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveStateAuthorityReceipts to fetch.
     */
    orderBy?: Prisma.ApproveStateAuthorityReceiptOrderByWithRelationInput | Prisma.ApproveStateAuthorityReceiptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ApproveStateAuthorityReceipts.
     */
    cursor?: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveStateAuthorityReceipts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveStateAuthorityReceipts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApproveStateAuthorityReceipts.
     */
    distinct?: Prisma.ApproveStateAuthorityReceiptScalarFieldEnum | Prisma.ApproveStateAuthorityReceiptScalarFieldEnum[];
};
/**
 * ApproveStateAuthorityReceipt create
 */
export type ApproveStateAuthorityReceiptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * The data needed to create a ApproveStateAuthorityReceipt.
     */
    data: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptCreateInput, Prisma.ApproveStateAuthorityReceiptUncheckedCreateInput>;
};
/**
 * ApproveStateAuthorityReceipt createMany
 */
export type ApproveStateAuthorityReceiptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApproveStateAuthorityReceipts.
     */
    data: Prisma.ApproveStateAuthorityReceiptCreateManyInput | Prisma.ApproveStateAuthorityReceiptCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ApproveStateAuthorityReceipt createManyAndReturn
 */
export type ApproveStateAuthorityReceiptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * The data used to create many ApproveStateAuthorityReceipts.
     */
    data: Prisma.ApproveStateAuthorityReceiptCreateManyInput | Prisma.ApproveStateAuthorityReceiptCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ApproveStateAuthorityReceipt update
 */
export type ApproveStateAuthorityReceiptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * The data needed to update a ApproveStateAuthorityReceipt.
     */
    data: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptUpdateInput, Prisma.ApproveStateAuthorityReceiptUncheckedUpdateInput>;
    /**
     * Choose, which ApproveStateAuthorityReceipt to update.
     */
    where: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
};
/**
 * ApproveStateAuthorityReceipt updateMany
 */
export type ApproveStateAuthorityReceiptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ApproveStateAuthorityReceipts.
     */
    data: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptUpdateManyMutationInput, Prisma.ApproveStateAuthorityReceiptUncheckedUpdateManyInput>;
    /**
     * Filter which ApproveStateAuthorityReceipts to update
     */
    where?: Prisma.ApproveStateAuthorityReceiptWhereInput;
    /**
     * Limit how many ApproveStateAuthorityReceipts to update.
     */
    limit?: number;
};
/**
 * ApproveStateAuthorityReceipt updateManyAndReturn
 */
export type ApproveStateAuthorityReceiptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * The data used to update ApproveStateAuthorityReceipts.
     */
    data: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptUpdateManyMutationInput, Prisma.ApproveStateAuthorityReceiptUncheckedUpdateManyInput>;
    /**
     * Filter which ApproveStateAuthorityReceipts to update
     */
    where?: Prisma.ApproveStateAuthorityReceiptWhereInput;
    /**
     * Limit how many ApproveStateAuthorityReceipts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ApproveStateAuthorityReceipt upsert
 */
export type ApproveStateAuthorityReceiptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * The filter to search for the ApproveStateAuthorityReceipt to update in case it exists.
     */
    where: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
    /**
     * In case the ApproveStateAuthorityReceipt found by the `where` argument doesn't exist, create a new ApproveStateAuthorityReceipt with this data.
     */
    create: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptCreateInput, Prisma.ApproveStateAuthorityReceiptUncheckedCreateInput>;
    /**
     * In case the ApproveStateAuthorityReceipt was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ApproveStateAuthorityReceiptUpdateInput, Prisma.ApproveStateAuthorityReceiptUncheckedUpdateInput>;
};
/**
 * ApproveStateAuthorityReceipt delete
 */
export type ApproveStateAuthorityReceiptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter which ApproveStateAuthorityReceipt to delete.
     */
    where: Prisma.ApproveStateAuthorityReceiptWhereUniqueInput;
};
/**
 * ApproveStateAuthorityReceipt deleteMany
 */
export type ApproveStateAuthorityReceiptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ApproveStateAuthorityReceipts to delete
     */
    where?: Prisma.ApproveStateAuthorityReceiptWhereInput;
    /**
     * Limit how many ApproveStateAuthorityReceipts to delete.
     */
    limit?: number;
};
/**
 * ApproveStateAuthorityReceipt without action
 */
export type ApproveStateAuthorityReceiptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveStateAuthorityReceipt
     */
    select?: Prisma.ApproveStateAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveStateAuthorityReceipt
     */
    omit?: Prisma.ApproveStateAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveStateAuthorityReceiptInclude<ExtArgs> | null;
};
//# sourceMappingURL=ApproveStateAuthorityReceipt.d.ts.map