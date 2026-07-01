import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ApproveCountryAuthorityReceipt
 *
 */
export type ApproveCountryAuthorityReceiptModel = runtime.Types.Result.DefaultSelection<Prisma.$ApproveCountryAuthorityReceiptPayload>;
export type AggregateApproveCountryAuthorityReceipt = {
    _count: ApproveCountryAuthorityReceiptCountAggregateOutputType | null;
    _avg: ApproveCountryAuthorityReceiptAvgAggregateOutputType | null;
    _sum: ApproveCountryAuthorityReceiptSumAggregateOutputType | null;
    _min: ApproveCountryAuthorityReceiptMinAggregateOutputType | null;
    _max: ApproveCountryAuthorityReceiptMaxAggregateOutputType | null;
};
export type ApproveCountryAuthorityReceiptAvgAggregateOutputType = {
    id: number | null;
    bump: number | null;
};
export type ApproveCountryAuthorityReceiptSumAggregateOutputType = {
    id: number | null;
    bump: number | null;
};
export type ApproveCountryAuthorityReceiptMinAggregateOutputType = {
    id: number | null;
    proposal_key: string | null;
    approval_time: Date | null;
    signer: string | null;
    bump: number | null;
};
export type ApproveCountryAuthorityReceiptMaxAggregateOutputType = {
    id: number | null;
    proposal_key: string | null;
    approval_time: Date | null;
    signer: string | null;
    bump: number | null;
};
export type ApproveCountryAuthorityReceiptCountAggregateOutputType = {
    id: number;
    proposal_key: number;
    approval_time: number;
    signer: number;
    bump: number;
    _all: number;
};
export type ApproveCountryAuthorityReceiptAvgAggregateInputType = {
    id?: true;
    bump?: true;
};
export type ApproveCountryAuthorityReceiptSumAggregateInputType = {
    id?: true;
    bump?: true;
};
export type ApproveCountryAuthorityReceiptMinAggregateInputType = {
    id?: true;
    proposal_key?: true;
    approval_time?: true;
    signer?: true;
    bump?: true;
};
export type ApproveCountryAuthorityReceiptMaxAggregateInputType = {
    id?: true;
    proposal_key?: true;
    approval_time?: true;
    signer?: true;
    bump?: true;
};
export type ApproveCountryAuthorityReceiptCountAggregateInputType = {
    id?: true;
    proposal_key?: true;
    approval_time?: true;
    signer?: true;
    bump?: true;
    _all?: true;
};
export type ApproveCountryAuthorityReceiptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ApproveCountryAuthorityReceipt to aggregate.
     */
    where?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveCountryAuthorityReceipts to fetch.
     */
    orderBy?: Prisma.ApproveCountryAuthorityReceiptOrderByWithRelationInput | Prisma.ApproveCountryAuthorityReceiptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveCountryAuthorityReceipts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveCountryAuthorityReceipts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ApproveCountryAuthorityReceipts
    **/
    _count?: true | ApproveCountryAuthorityReceiptCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ApproveCountryAuthorityReceiptAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ApproveCountryAuthorityReceiptSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ApproveCountryAuthorityReceiptMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ApproveCountryAuthorityReceiptMaxAggregateInputType;
};
export type GetApproveCountryAuthorityReceiptAggregateType<T extends ApproveCountryAuthorityReceiptAggregateArgs> = {
    [P in keyof T & keyof AggregateApproveCountryAuthorityReceipt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApproveCountryAuthorityReceipt[P]> : Prisma.GetScalarType<T[P], AggregateApproveCountryAuthorityReceipt[P]>;
};
export type ApproveCountryAuthorityReceiptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
    orderBy?: Prisma.ApproveCountryAuthorityReceiptOrderByWithAggregationInput | Prisma.ApproveCountryAuthorityReceiptOrderByWithAggregationInput[];
    by: Prisma.ApproveCountryAuthorityReceiptScalarFieldEnum[] | Prisma.ApproveCountryAuthorityReceiptScalarFieldEnum;
    having?: Prisma.ApproveCountryAuthorityReceiptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApproveCountryAuthorityReceiptCountAggregateInputType | true;
    _avg?: ApproveCountryAuthorityReceiptAvgAggregateInputType;
    _sum?: ApproveCountryAuthorityReceiptSumAggregateInputType;
    _min?: ApproveCountryAuthorityReceiptMinAggregateInputType;
    _max?: ApproveCountryAuthorityReceiptMaxAggregateInputType;
};
export type ApproveCountryAuthorityReceiptGroupByOutputType = {
    id: number;
    proposal_key: string;
    approval_time: Date;
    signer: string;
    bump: number;
    _count: ApproveCountryAuthorityReceiptCountAggregateOutputType | null;
    _avg: ApproveCountryAuthorityReceiptAvgAggregateOutputType | null;
    _sum: ApproveCountryAuthorityReceiptSumAggregateOutputType | null;
    _min: ApproveCountryAuthorityReceiptMinAggregateOutputType | null;
    _max: ApproveCountryAuthorityReceiptMaxAggregateOutputType | null;
};
export type GetApproveCountryAuthorityReceiptGroupByPayload<T extends ApproveCountryAuthorityReceiptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApproveCountryAuthorityReceiptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApproveCountryAuthorityReceiptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApproveCountryAuthorityReceiptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApproveCountryAuthorityReceiptGroupByOutputType[P]>;
}>>;
export type ApproveCountryAuthorityReceiptWhereInput = {
    AND?: Prisma.ApproveCountryAuthorityReceiptWhereInput | Prisma.ApproveCountryAuthorityReceiptWhereInput[];
    OR?: Prisma.ApproveCountryAuthorityReceiptWhereInput[];
    NOT?: Prisma.ApproveCountryAuthorityReceiptWhereInput | Prisma.ApproveCountryAuthorityReceiptWhereInput[];
    id?: Prisma.IntFilter<"ApproveCountryAuthorityReceipt"> | number;
    proposal_key?: Prisma.StringFilter<"ApproveCountryAuthorityReceipt"> | string;
    approval_time?: Prisma.DateTimeFilter<"ApproveCountryAuthorityReceipt"> | Date | string;
    signer?: Prisma.StringFilter<"ApproveCountryAuthorityReceipt"> | string;
    bump?: Prisma.IntFilter<"ApproveCountryAuthorityReceipt"> | number;
    proposal?: Prisma.XOR<Prisma.CountryProposalScalarRelationFilter, Prisma.CountryProposalWhereInput>;
};
export type ApproveCountryAuthorityReceiptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proposal_key?: Prisma.SortOrder;
    approval_time?: Prisma.SortOrder;
    signer?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    proposal?: Prisma.CountryProposalOrderByWithRelationInput;
};
export type ApproveCountryAuthorityReceiptWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    proposal_key_signer?: Prisma.ApproveCountryAuthorityReceiptProposal_keySignerCompoundUniqueInput;
    AND?: Prisma.ApproveCountryAuthorityReceiptWhereInput | Prisma.ApproveCountryAuthorityReceiptWhereInput[];
    OR?: Prisma.ApproveCountryAuthorityReceiptWhereInput[];
    NOT?: Prisma.ApproveCountryAuthorityReceiptWhereInput | Prisma.ApproveCountryAuthorityReceiptWhereInput[];
    proposal_key?: Prisma.StringFilter<"ApproveCountryAuthorityReceipt"> | string;
    approval_time?: Prisma.DateTimeFilter<"ApproveCountryAuthorityReceipt"> | Date | string;
    signer?: Prisma.StringFilter<"ApproveCountryAuthorityReceipt"> | string;
    bump?: Prisma.IntFilter<"ApproveCountryAuthorityReceipt"> | number;
    proposal?: Prisma.XOR<Prisma.CountryProposalScalarRelationFilter, Prisma.CountryProposalWhereInput>;
}, "id" | "proposal_key_signer">;
export type ApproveCountryAuthorityReceiptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proposal_key?: Prisma.SortOrder;
    approval_time?: Prisma.SortOrder;
    signer?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
    _count?: Prisma.ApproveCountryAuthorityReceiptCountOrderByAggregateInput;
    _avg?: Prisma.ApproveCountryAuthorityReceiptAvgOrderByAggregateInput;
    _max?: Prisma.ApproveCountryAuthorityReceiptMaxOrderByAggregateInput;
    _min?: Prisma.ApproveCountryAuthorityReceiptMinOrderByAggregateInput;
    _sum?: Prisma.ApproveCountryAuthorityReceiptSumOrderByAggregateInput;
};
export type ApproveCountryAuthorityReceiptScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApproveCountryAuthorityReceiptScalarWhereWithAggregatesInput | Prisma.ApproveCountryAuthorityReceiptScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApproveCountryAuthorityReceiptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApproveCountryAuthorityReceiptScalarWhereWithAggregatesInput | Prisma.ApproveCountryAuthorityReceiptScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ApproveCountryAuthorityReceipt"> | number;
    proposal_key?: Prisma.StringWithAggregatesFilter<"ApproveCountryAuthorityReceipt"> | string;
    approval_time?: Prisma.DateTimeWithAggregatesFilter<"ApproveCountryAuthorityReceipt"> | Date | string;
    signer?: Prisma.StringWithAggregatesFilter<"ApproveCountryAuthorityReceipt"> | string;
    bump?: Prisma.IntWithAggregatesFilter<"ApproveCountryAuthorityReceipt"> | number;
};
export type ApproveCountryAuthorityReceiptCreateInput = {
    approval_time?: Date | string;
    signer: string;
    bump: number;
    proposal: Prisma.CountryProposalCreateNestedOneWithoutApproveCountryAuthorityReceiptsInput;
};
export type ApproveCountryAuthorityReceiptUncheckedCreateInput = {
    id?: number;
    proposal_key: string;
    approval_time?: Date | string;
    signer: string;
    bump: number;
};
export type ApproveCountryAuthorityReceiptUpdateInput = {
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
    proposal?: Prisma.CountryProposalUpdateOneRequiredWithoutApproveCountryAuthorityReceiptsNestedInput;
};
export type ApproveCountryAuthorityReceiptUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proposal_key?: Prisma.StringFieldUpdateOperationsInput | string;
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveCountryAuthorityReceiptCreateManyInput = {
    id?: number;
    proposal_key: string;
    approval_time?: Date | string;
    signer: string;
    bump: number;
};
export type ApproveCountryAuthorityReceiptUpdateManyMutationInput = {
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveCountryAuthorityReceiptUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proposal_key?: Prisma.StringFieldUpdateOperationsInput | string;
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveCountryAuthorityReceiptProposal_keySignerCompoundUniqueInput = {
    proposal_key: string;
    signer: string;
};
export type ApproveCountryAuthorityReceiptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposal_key?: Prisma.SortOrder;
    approval_time?: Prisma.SortOrder;
    signer?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type ApproveCountryAuthorityReceiptAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type ApproveCountryAuthorityReceiptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposal_key?: Prisma.SortOrder;
    approval_time?: Prisma.SortOrder;
    signer?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type ApproveCountryAuthorityReceiptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proposal_key?: Prisma.SortOrder;
    approval_time?: Prisma.SortOrder;
    signer?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type ApproveCountryAuthorityReceiptSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bump?: Prisma.SortOrder;
};
export type ApproveCountryAuthorityReceiptListRelationFilter = {
    every?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
    some?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
    none?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
};
export type ApproveCountryAuthorityReceiptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApproveCountryAuthorityReceiptCreateNestedManyWithoutProposalInput = {
    create?: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput> | Prisma.ApproveCountryAuthorityReceiptCreateWithoutProposalInput[] | Prisma.ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput[];
    connectOrCreate?: Prisma.ApproveCountryAuthorityReceiptCreateOrConnectWithoutProposalInput | Prisma.ApproveCountryAuthorityReceiptCreateOrConnectWithoutProposalInput[];
    createMany?: Prisma.ApproveCountryAuthorityReceiptCreateManyProposalInputEnvelope;
    connect?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput | Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput[];
};
export type ApproveCountryAuthorityReceiptUncheckedCreateNestedManyWithoutProposalInput = {
    create?: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput> | Prisma.ApproveCountryAuthorityReceiptCreateWithoutProposalInput[] | Prisma.ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput[];
    connectOrCreate?: Prisma.ApproveCountryAuthorityReceiptCreateOrConnectWithoutProposalInput | Prisma.ApproveCountryAuthorityReceiptCreateOrConnectWithoutProposalInput[];
    createMany?: Prisma.ApproveCountryAuthorityReceiptCreateManyProposalInputEnvelope;
    connect?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput | Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput[];
};
export type ApproveCountryAuthorityReceiptUpdateManyWithoutProposalNestedInput = {
    create?: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput> | Prisma.ApproveCountryAuthorityReceiptCreateWithoutProposalInput[] | Prisma.ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput[];
    connectOrCreate?: Prisma.ApproveCountryAuthorityReceiptCreateOrConnectWithoutProposalInput | Prisma.ApproveCountryAuthorityReceiptCreateOrConnectWithoutProposalInput[];
    upsert?: Prisma.ApproveCountryAuthorityReceiptUpsertWithWhereUniqueWithoutProposalInput | Prisma.ApproveCountryAuthorityReceiptUpsertWithWhereUniqueWithoutProposalInput[];
    createMany?: Prisma.ApproveCountryAuthorityReceiptCreateManyProposalInputEnvelope;
    set?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput | Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput[];
    disconnect?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput | Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput[];
    delete?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput | Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput[];
    connect?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput | Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput[];
    update?: Prisma.ApproveCountryAuthorityReceiptUpdateWithWhereUniqueWithoutProposalInput | Prisma.ApproveCountryAuthorityReceiptUpdateWithWhereUniqueWithoutProposalInput[];
    updateMany?: Prisma.ApproveCountryAuthorityReceiptUpdateManyWithWhereWithoutProposalInput | Prisma.ApproveCountryAuthorityReceiptUpdateManyWithWhereWithoutProposalInput[];
    deleteMany?: Prisma.ApproveCountryAuthorityReceiptScalarWhereInput | Prisma.ApproveCountryAuthorityReceiptScalarWhereInput[];
};
export type ApproveCountryAuthorityReceiptUncheckedUpdateManyWithoutProposalNestedInput = {
    create?: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput> | Prisma.ApproveCountryAuthorityReceiptCreateWithoutProposalInput[] | Prisma.ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput[];
    connectOrCreate?: Prisma.ApproveCountryAuthorityReceiptCreateOrConnectWithoutProposalInput | Prisma.ApproveCountryAuthorityReceiptCreateOrConnectWithoutProposalInput[];
    upsert?: Prisma.ApproveCountryAuthorityReceiptUpsertWithWhereUniqueWithoutProposalInput | Prisma.ApproveCountryAuthorityReceiptUpsertWithWhereUniqueWithoutProposalInput[];
    createMany?: Prisma.ApproveCountryAuthorityReceiptCreateManyProposalInputEnvelope;
    set?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput | Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput[];
    disconnect?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput | Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput[];
    delete?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput | Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput[];
    connect?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput | Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput[];
    update?: Prisma.ApproveCountryAuthorityReceiptUpdateWithWhereUniqueWithoutProposalInput | Prisma.ApproveCountryAuthorityReceiptUpdateWithWhereUniqueWithoutProposalInput[];
    updateMany?: Prisma.ApproveCountryAuthorityReceiptUpdateManyWithWhereWithoutProposalInput | Prisma.ApproveCountryAuthorityReceiptUpdateManyWithWhereWithoutProposalInput[];
    deleteMany?: Prisma.ApproveCountryAuthorityReceiptScalarWhereInput | Prisma.ApproveCountryAuthorityReceiptScalarWhereInput[];
};
export type ApproveCountryAuthorityReceiptCreateWithoutProposalInput = {
    approval_time?: Date | string;
    signer: string;
    bump: number;
};
export type ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput = {
    id?: number;
    approval_time?: Date | string;
    signer: string;
    bump: number;
};
export type ApproveCountryAuthorityReceiptCreateOrConnectWithoutProposalInput = {
    where: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput>;
};
export type ApproveCountryAuthorityReceiptCreateManyProposalInputEnvelope = {
    data: Prisma.ApproveCountryAuthorityReceiptCreateManyProposalInput | Prisma.ApproveCountryAuthorityReceiptCreateManyProposalInput[];
    skipDuplicates?: boolean;
};
export type ApproveCountryAuthorityReceiptUpsertWithWhereUniqueWithoutProposalInput = {
    where: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptUpdateWithoutProposalInput, Prisma.ApproveCountryAuthorityReceiptUncheckedUpdateWithoutProposalInput>;
    create: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptCreateWithoutProposalInput, Prisma.ApproveCountryAuthorityReceiptUncheckedCreateWithoutProposalInput>;
};
export type ApproveCountryAuthorityReceiptUpdateWithWhereUniqueWithoutProposalInput = {
    where: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptUpdateWithoutProposalInput, Prisma.ApproveCountryAuthorityReceiptUncheckedUpdateWithoutProposalInput>;
};
export type ApproveCountryAuthorityReceiptUpdateManyWithWhereWithoutProposalInput = {
    where: Prisma.ApproveCountryAuthorityReceiptScalarWhereInput;
    data: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptUpdateManyMutationInput, Prisma.ApproveCountryAuthorityReceiptUncheckedUpdateManyWithoutProposalInput>;
};
export type ApproveCountryAuthorityReceiptScalarWhereInput = {
    AND?: Prisma.ApproveCountryAuthorityReceiptScalarWhereInput | Prisma.ApproveCountryAuthorityReceiptScalarWhereInput[];
    OR?: Prisma.ApproveCountryAuthorityReceiptScalarWhereInput[];
    NOT?: Prisma.ApproveCountryAuthorityReceiptScalarWhereInput | Prisma.ApproveCountryAuthorityReceiptScalarWhereInput[];
    id?: Prisma.IntFilter<"ApproveCountryAuthorityReceipt"> | number;
    proposal_key?: Prisma.StringFilter<"ApproveCountryAuthorityReceipt"> | string;
    approval_time?: Prisma.DateTimeFilter<"ApproveCountryAuthorityReceipt"> | Date | string;
    signer?: Prisma.StringFilter<"ApproveCountryAuthorityReceipt"> | string;
    bump?: Prisma.IntFilter<"ApproveCountryAuthorityReceipt"> | number;
};
export type ApproveCountryAuthorityReceiptCreateManyProposalInput = {
    id?: number;
    approval_time?: Date | string;
    signer: string;
    bump: number;
};
export type ApproveCountryAuthorityReceiptUpdateWithoutProposalInput = {
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveCountryAuthorityReceiptUncheckedUpdateWithoutProposalInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveCountryAuthorityReceiptUncheckedUpdateManyWithoutProposalInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    approval_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signer?: Prisma.StringFieldUpdateOperationsInput | string;
    bump?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ApproveCountryAuthorityReceiptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposal_key?: boolean;
    approval_time?: boolean;
    signer?: boolean;
    bump?: boolean;
    proposal?: boolean | Prisma.CountryProposalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approveCountryAuthorityReceipt"]>;
export type ApproveCountryAuthorityReceiptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposal_key?: boolean;
    approval_time?: boolean;
    signer?: boolean;
    bump?: boolean;
    proposal?: boolean | Prisma.CountryProposalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approveCountryAuthorityReceipt"]>;
export type ApproveCountryAuthorityReceiptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proposal_key?: boolean;
    approval_time?: boolean;
    signer?: boolean;
    bump?: boolean;
    proposal?: boolean | Prisma.CountryProposalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approveCountryAuthorityReceipt"]>;
export type ApproveCountryAuthorityReceiptSelectScalar = {
    id?: boolean;
    proposal_key?: boolean;
    approval_time?: boolean;
    signer?: boolean;
    bump?: boolean;
};
export type ApproveCountryAuthorityReceiptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proposal_key" | "approval_time" | "signer" | "bump", ExtArgs["result"]["approveCountryAuthorityReceipt"]>;
export type ApproveCountryAuthorityReceiptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposal?: boolean | Prisma.CountryProposalDefaultArgs<ExtArgs>;
};
export type ApproveCountryAuthorityReceiptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposal?: boolean | Prisma.CountryProposalDefaultArgs<ExtArgs>;
};
export type ApproveCountryAuthorityReceiptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposal?: boolean | Prisma.CountryProposalDefaultArgs<ExtArgs>;
};
export type $ApproveCountryAuthorityReceiptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApproveCountryAuthorityReceipt";
    objects: {
        proposal: Prisma.$CountryProposalPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        proposal_key: string;
        approval_time: Date;
        signer: string;
        bump: number;
    }, ExtArgs["result"]["approveCountryAuthorityReceipt"]>;
    composites: {};
};
export type ApproveCountryAuthorityReceiptGetPayload<S extends boolean | null | undefined | ApproveCountryAuthorityReceiptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload, S>;
export type ApproveCountryAuthorityReceiptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApproveCountryAuthorityReceiptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApproveCountryAuthorityReceiptCountAggregateInputType | true;
};
export interface ApproveCountryAuthorityReceiptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApproveCountryAuthorityReceipt'];
        meta: {
            name: 'ApproveCountryAuthorityReceipt';
        };
    };
    /**
     * Find zero or one ApproveCountryAuthorityReceipt that matches the filter.
     * @param {ApproveCountryAuthorityReceiptFindUniqueArgs} args - Arguments to find a ApproveCountryAuthorityReceipt
     * @example
     * // Get one ApproveCountryAuthorityReceipt
     * const approveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApproveCountryAuthorityReceiptFindUniqueArgs>(args: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApproveCountryAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ApproveCountryAuthorityReceipt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApproveCountryAuthorityReceiptFindUniqueOrThrowArgs} args - Arguments to find a ApproveCountryAuthorityReceipt
     * @example
     * // Get one ApproveCountryAuthorityReceipt
     * const approveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApproveCountryAuthorityReceiptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApproveCountryAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ApproveCountryAuthorityReceipt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveCountryAuthorityReceiptFindFirstArgs} args - Arguments to find a ApproveCountryAuthorityReceipt
     * @example
     * // Get one ApproveCountryAuthorityReceipt
     * const approveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApproveCountryAuthorityReceiptFindFirstArgs>(args?: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApproveCountryAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ApproveCountryAuthorityReceipt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveCountryAuthorityReceiptFindFirstOrThrowArgs} args - Arguments to find a ApproveCountryAuthorityReceipt
     * @example
     * // Get one ApproveCountryAuthorityReceipt
     * const approveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApproveCountryAuthorityReceiptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApproveCountryAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ApproveCountryAuthorityReceipts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveCountryAuthorityReceiptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApproveCountryAuthorityReceipts
     * const approveCountryAuthorityReceipts = await prisma.approveCountryAuthorityReceipt.findMany()
     *
     * // Get first 10 ApproveCountryAuthorityReceipts
     * const approveCountryAuthorityReceipts = await prisma.approveCountryAuthorityReceipt.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const approveCountryAuthorityReceiptWithIdOnly = await prisma.approveCountryAuthorityReceipt.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApproveCountryAuthorityReceiptFindManyArgs>(args?: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ApproveCountryAuthorityReceipt.
     * @param {ApproveCountryAuthorityReceiptCreateArgs} args - Arguments to create a ApproveCountryAuthorityReceipt.
     * @example
     * // Create one ApproveCountryAuthorityReceipt
     * const ApproveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.create({
     *   data: {
     *     // ... data to create a ApproveCountryAuthorityReceipt
     *   }
     * })
     *
     */
    create<T extends ApproveCountryAuthorityReceiptCreateArgs>(args: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptCreateArgs<ExtArgs>>): Prisma.Prisma__ApproveCountryAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ApproveCountryAuthorityReceipts.
     * @param {ApproveCountryAuthorityReceiptCreateManyArgs} args - Arguments to create many ApproveCountryAuthorityReceipts.
     * @example
     * // Create many ApproveCountryAuthorityReceipts
     * const approveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApproveCountryAuthorityReceiptCreateManyArgs>(args?: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ApproveCountryAuthorityReceipts and returns the data saved in the database.
     * @param {ApproveCountryAuthorityReceiptCreateManyAndReturnArgs} args - Arguments to create many ApproveCountryAuthorityReceipts.
     * @example
     * // Create many ApproveCountryAuthorityReceipts
     * const approveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ApproveCountryAuthorityReceipts and only return the `id`
     * const approveCountryAuthorityReceiptWithIdOnly = await prisma.approveCountryAuthorityReceipt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ApproveCountryAuthorityReceiptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ApproveCountryAuthorityReceipt.
     * @param {ApproveCountryAuthorityReceiptDeleteArgs} args - Arguments to delete one ApproveCountryAuthorityReceipt.
     * @example
     * // Delete one ApproveCountryAuthorityReceipt
     * const ApproveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.delete({
     *   where: {
     *     // ... filter to delete one ApproveCountryAuthorityReceipt
     *   }
     * })
     *
     */
    delete<T extends ApproveCountryAuthorityReceiptDeleteArgs>(args: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptDeleteArgs<ExtArgs>>): Prisma.Prisma__ApproveCountryAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ApproveCountryAuthorityReceipt.
     * @param {ApproveCountryAuthorityReceiptUpdateArgs} args - Arguments to update one ApproveCountryAuthorityReceipt.
     * @example
     * // Update one ApproveCountryAuthorityReceipt
     * const approveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApproveCountryAuthorityReceiptUpdateArgs>(args: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptUpdateArgs<ExtArgs>>): Prisma.Prisma__ApproveCountryAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ApproveCountryAuthorityReceipts.
     * @param {ApproveCountryAuthorityReceiptDeleteManyArgs} args - Arguments to filter ApproveCountryAuthorityReceipts to delete.
     * @example
     * // Delete a few ApproveCountryAuthorityReceipts
     * const { count } = await prisma.approveCountryAuthorityReceipt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApproveCountryAuthorityReceiptDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ApproveCountryAuthorityReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveCountryAuthorityReceiptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApproveCountryAuthorityReceipts
     * const approveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApproveCountryAuthorityReceiptUpdateManyArgs>(args: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ApproveCountryAuthorityReceipts and returns the data updated in the database.
     * @param {ApproveCountryAuthorityReceiptUpdateManyAndReturnArgs} args - Arguments to update many ApproveCountryAuthorityReceipts.
     * @example
     * // Update many ApproveCountryAuthorityReceipts
     * const approveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ApproveCountryAuthorityReceipts and only return the `id`
     * const approveCountryAuthorityReceiptWithIdOnly = await prisma.approveCountryAuthorityReceipt.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApproveCountryAuthorityReceiptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ApproveCountryAuthorityReceipt.
     * @param {ApproveCountryAuthorityReceiptUpsertArgs} args - Arguments to update or create a ApproveCountryAuthorityReceipt.
     * @example
     * // Update or create a ApproveCountryAuthorityReceipt
     * const approveCountryAuthorityReceipt = await prisma.approveCountryAuthorityReceipt.upsert({
     *   create: {
     *     // ... data to create a ApproveCountryAuthorityReceipt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApproveCountryAuthorityReceipt we want to update
     *   }
     * })
     */
    upsert<T extends ApproveCountryAuthorityReceiptUpsertArgs>(args: Prisma.SelectSubset<T, ApproveCountryAuthorityReceiptUpsertArgs<ExtArgs>>): Prisma.Prisma__ApproveCountryAuthorityReceiptClient<runtime.Types.Result.GetResult<Prisma.$ApproveCountryAuthorityReceiptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ApproveCountryAuthorityReceipts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveCountryAuthorityReceiptCountArgs} args - Arguments to filter ApproveCountryAuthorityReceipts to count.
     * @example
     * // Count the number of ApproveCountryAuthorityReceipts
     * const count = await prisma.approveCountryAuthorityReceipt.count({
     *   where: {
     *     // ... the filter for the ApproveCountryAuthorityReceipts we want to count
     *   }
     * })
    **/
    count<T extends ApproveCountryAuthorityReceiptCountArgs>(args?: Prisma.Subset<T, ApproveCountryAuthorityReceiptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApproveCountryAuthorityReceiptCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ApproveCountryAuthorityReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveCountryAuthorityReceiptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApproveCountryAuthorityReceiptAggregateArgs>(args: Prisma.Subset<T, ApproveCountryAuthorityReceiptAggregateArgs>): Prisma.PrismaPromise<GetApproveCountryAuthorityReceiptAggregateType<T>>;
    /**
     * Group by ApproveCountryAuthorityReceipt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApproveCountryAuthorityReceiptGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ApproveCountryAuthorityReceiptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApproveCountryAuthorityReceiptGroupByArgs['orderBy'];
    } : {
        orderBy?: ApproveCountryAuthorityReceiptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApproveCountryAuthorityReceiptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApproveCountryAuthorityReceiptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ApproveCountryAuthorityReceipt model
     */
    readonly fields: ApproveCountryAuthorityReceiptFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ApproveCountryAuthorityReceipt.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ApproveCountryAuthorityReceiptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proposal<T extends Prisma.CountryProposalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CountryProposalDefaultArgs<ExtArgs>>): Prisma.Prisma__CountryProposalClient<runtime.Types.Result.GetResult<Prisma.$CountryProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ApproveCountryAuthorityReceipt model
 */
export interface ApproveCountryAuthorityReceiptFieldRefs {
    readonly id: Prisma.FieldRef<"ApproveCountryAuthorityReceipt", 'Int'>;
    readonly proposal_key: Prisma.FieldRef<"ApproveCountryAuthorityReceipt", 'String'>;
    readonly approval_time: Prisma.FieldRef<"ApproveCountryAuthorityReceipt", 'DateTime'>;
    readonly signer: Prisma.FieldRef<"ApproveCountryAuthorityReceipt", 'String'>;
    readonly bump: Prisma.FieldRef<"ApproveCountryAuthorityReceipt", 'Int'>;
}
/**
 * ApproveCountryAuthorityReceipt findUnique
 */
export type ApproveCountryAuthorityReceiptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter, which ApproveCountryAuthorityReceipt to fetch.
     */
    where: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
};
/**
 * ApproveCountryAuthorityReceipt findUniqueOrThrow
 */
export type ApproveCountryAuthorityReceiptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter, which ApproveCountryAuthorityReceipt to fetch.
     */
    where: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
};
/**
 * ApproveCountryAuthorityReceipt findFirst
 */
export type ApproveCountryAuthorityReceiptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter, which ApproveCountryAuthorityReceipt to fetch.
     */
    where?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveCountryAuthorityReceipts to fetch.
     */
    orderBy?: Prisma.ApproveCountryAuthorityReceiptOrderByWithRelationInput | Prisma.ApproveCountryAuthorityReceiptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApproveCountryAuthorityReceipts.
     */
    cursor?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveCountryAuthorityReceipts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveCountryAuthorityReceipts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApproveCountryAuthorityReceipts.
     */
    distinct?: Prisma.ApproveCountryAuthorityReceiptScalarFieldEnum | Prisma.ApproveCountryAuthorityReceiptScalarFieldEnum[];
};
/**
 * ApproveCountryAuthorityReceipt findFirstOrThrow
 */
export type ApproveCountryAuthorityReceiptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter, which ApproveCountryAuthorityReceipt to fetch.
     */
    where?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveCountryAuthorityReceipts to fetch.
     */
    orderBy?: Prisma.ApproveCountryAuthorityReceiptOrderByWithRelationInput | Prisma.ApproveCountryAuthorityReceiptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ApproveCountryAuthorityReceipts.
     */
    cursor?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveCountryAuthorityReceipts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveCountryAuthorityReceipts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApproveCountryAuthorityReceipts.
     */
    distinct?: Prisma.ApproveCountryAuthorityReceiptScalarFieldEnum | Prisma.ApproveCountryAuthorityReceiptScalarFieldEnum[];
};
/**
 * ApproveCountryAuthorityReceipt findMany
 */
export type ApproveCountryAuthorityReceiptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter, which ApproveCountryAuthorityReceipts to fetch.
     */
    where?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ApproveCountryAuthorityReceipts to fetch.
     */
    orderBy?: Prisma.ApproveCountryAuthorityReceiptOrderByWithRelationInput | Prisma.ApproveCountryAuthorityReceiptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ApproveCountryAuthorityReceipts.
     */
    cursor?: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ApproveCountryAuthorityReceipts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ApproveCountryAuthorityReceipts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ApproveCountryAuthorityReceipts.
     */
    distinct?: Prisma.ApproveCountryAuthorityReceiptScalarFieldEnum | Prisma.ApproveCountryAuthorityReceiptScalarFieldEnum[];
};
/**
 * ApproveCountryAuthorityReceipt create
 */
export type ApproveCountryAuthorityReceiptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * The data needed to create a ApproveCountryAuthorityReceipt.
     */
    data: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptCreateInput, Prisma.ApproveCountryAuthorityReceiptUncheckedCreateInput>;
};
/**
 * ApproveCountryAuthorityReceipt createMany
 */
export type ApproveCountryAuthorityReceiptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApproveCountryAuthorityReceipts.
     */
    data: Prisma.ApproveCountryAuthorityReceiptCreateManyInput | Prisma.ApproveCountryAuthorityReceiptCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ApproveCountryAuthorityReceipt createManyAndReturn
 */
export type ApproveCountryAuthorityReceiptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * The data used to create many ApproveCountryAuthorityReceipts.
     */
    data: Prisma.ApproveCountryAuthorityReceiptCreateManyInput | Prisma.ApproveCountryAuthorityReceiptCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ApproveCountryAuthorityReceipt update
 */
export type ApproveCountryAuthorityReceiptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * The data needed to update a ApproveCountryAuthorityReceipt.
     */
    data: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptUpdateInput, Prisma.ApproveCountryAuthorityReceiptUncheckedUpdateInput>;
    /**
     * Choose, which ApproveCountryAuthorityReceipt to update.
     */
    where: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
};
/**
 * ApproveCountryAuthorityReceipt updateMany
 */
export type ApproveCountryAuthorityReceiptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ApproveCountryAuthorityReceipts.
     */
    data: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptUpdateManyMutationInput, Prisma.ApproveCountryAuthorityReceiptUncheckedUpdateManyInput>;
    /**
     * Filter which ApproveCountryAuthorityReceipts to update
     */
    where?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
    /**
     * Limit how many ApproveCountryAuthorityReceipts to update.
     */
    limit?: number;
};
/**
 * ApproveCountryAuthorityReceipt updateManyAndReturn
 */
export type ApproveCountryAuthorityReceiptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * The data used to update ApproveCountryAuthorityReceipts.
     */
    data: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptUpdateManyMutationInput, Prisma.ApproveCountryAuthorityReceiptUncheckedUpdateManyInput>;
    /**
     * Filter which ApproveCountryAuthorityReceipts to update
     */
    where?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
    /**
     * Limit how many ApproveCountryAuthorityReceipts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ApproveCountryAuthorityReceipt upsert
 */
export type ApproveCountryAuthorityReceiptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * The filter to search for the ApproveCountryAuthorityReceipt to update in case it exists.
     */
    where: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
    /**
     * In case the ApproveCountryAuthorityReceipt found by the `where` argument doesn't exist, create a new ApproveCountryAuthorityReceipt with this data.
     */
    create: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptCreateInput, Prisma.ApproveCountryAuthorityReceiptUncheckedCreateInput>;
    /**
     * In case the ApproveCountryAuthorityReceipt was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ApproveCountryAuthorityReceiptUpdateInput, Prisma.ApproveCountryAuthorityReceiptUncheckedUpdateInput>;
};
/**
 * ApproveCountryAuthorityReceipt delete
 */
export type ApproveCountryAuthorityReceiptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptInclude<ExtArgs> | null;
    /**
     * Filter which ApproveCountryAuthorityReceipt to delete.
     */
    where: Prisma.ApproveCountryAuthorityReceiptWhereUniqueInput;
};
/**
 * ApproveCountryAuthorityReceipt deleteMany
 */
export type ApproveCountryAuthorityReceiptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ApproveCountryAuthorityReceipts to delete
     */
    where?: Prisma.ApproveCountryAuthorityReceiptWhereInput;
    /**
     * Limit how many ApproveCountryAuthorityReceipts to delete.
     */
    limit?: number;
};
/**
 * ApproveCountryAuthorityReceipt without action
 */
export type ApproveCountryAuthorityReceiptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApproveCountryAuthorityReceipt
     */
    select?: Prisma.ApproveCountryAuthorityReceiptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ApproveCountryAuthorityReceipt
     */
    omit?: Prisma.ApproveCountryAuthorityReceiptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ApproveCountryAuthorityReceiptInclude<ExtArgs> | null;
};
//# sourceMappingURL=ApproveCountryAuthorityReceipt.d.ts.map