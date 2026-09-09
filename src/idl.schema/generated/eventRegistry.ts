import { EventSchemas } from "./eventSchemas";

export const EventRegistry = new Map([

    [
        "b52b43020fa7cbb2",
        {
            name: "AddedAuthorityForRemoval",
            schema: EventSchemas["AddedAuthorityForRemoval"],
        },
    ],

    [
        "c304463426eb110e",
        {
            name: "AddedNewAuthority",
            schema: EventSchemas["AddedNewAuthority"],
        },
    ],

    [
        "9a4d9c17b0da3bb3",
        {
            name: "AddedStateAuthority",
            schema: EventSchemas["AddedStateAuthority"],
        },
    ],

    [
        "a0a2a8500bf25863",
        {
            name: "ApproveByAuthority",
            schema: EventSchemas["ApproveByAuthority"],
        },
    ],

    [
        "87fcef1558b61e14",
        {
            name: "ArbitrarVoteForLease",
            schema: EventSchemas["ArbitrarVoteForLease"],
        },
    ],

    [
        "607e2767f99182bf",
        {
            name: "AuthorityAddedForPropertySystem",
            schema: EventSchemas["AuthorityAddedForPropertySystem"],
        },
    ],

    [
        "d8c77baff74fa952",
        {
            name: "AuthorityOfCountryCreated",
            schema: EventSchemas["AuthorityOfCountryCreated"],
        },
    ],

    [
        "181ca643c8c04fd6",
        {
            name: "AuthorityRevise",
            schema: EventSchemas["AuthorityRevise"],
        },
    ],

    [
        "922d11a546c345df",
        {
            name: "AuthorityToApproveCountryCreated",
            schema: EventSchemas["AuthorityToApproveCountryCreated"],
        },
    ],

    [
        "314ee83633e3ec91",
        {
            name: "BuyPropertyProposalArbitrarVote",
            schema: EventSchemas["BuyPropertyProposalArbitrarVote"],
        },
    ],

    [
        "11ef494fe900a88f",
        {
            name: "BuyPropertyProposalExecuted",
            schema: EventSchemas["BuyPropertyProposalExecuted"],
        },
    ],

    [
        "e5daa7e87a5e7d08",
        {
            name: "BuyPropertyProposalSnapshotRequest",
            schema: EventSchemas["BuyPropertyProposalSnapshotRequest"],
        },
    ],

    [
        "5671736069dbf26a",
        {
            name: "CandidateProfileCreated",
            schema: EventSchemas["CandidateProfileCreated"],
        },
    ],

    [
        "d24a9c3c8961602b",
        {
            name: "CandidateSubmitedForProposal",
            schema: EventSchemas["CandidateSubmitedForProposal"],
        },
    ],

    [
        "10432309c1ace5bf",
        {
            name: "ChallengeProposalCreated",
            schema: EventSchemas["ChallengeProposalCreated"],
        },
    ],

    [
        "484c691a07648a6b",
        {
            name: "ChallengeProposalExecuted",
            schema: EventSchemas["ChallengeProposalExecuted"],
        },
    ],

    [
        "c8cc44299a1d00f6",
        {
            name: "ChallengeProposalOffenderAuthorityAdded",
            schema: EventSchemas["ChallengeProposalOffenderAuthorityAdded"],
        },
    ],

    [
        "ad29427c16506752",
        {
            name: "ChallengeThresholdAccepted",
            schema: EventSchemas["ChallengeThresholdAccepted"],
        },
    ],

    [
        "b7b3d710b9a9d362",
        {
            name: "CountryApprovedBySigner",
            schema: EventSchemas["CountryApprovedBySigner"],
        },
    ],

    [
        "8b3e3aae4ee64183",
        {
            name: "CountryCreated",
            schema: EventSchemas["CountryCreated"],
        },
    ],

    [
        "2f0ea00d494d8bbf",
        {
            name: "CountryProposalCreated",
            schema: EventSchemas["CountryProposalCreated"],
        },
    ],

    [
        "f4156c743a09d03f",
        {
            name: "CreateBuyPropertyProposal",
            schema: EventSchemas["CreateBuyPropertyProposal"],
        },
    ],

    [
        "f03a406f439be949",
        {
            name: "CreateProposalForTokenTransfer",
            schema: EventSchemas["CreateProposalForTokenTransfer"],
        },
    ],

    [
        "5089e28a8bb84a31",
        {
            name: "CreateSellPropertyProposal",
            schema: EventSchemas["CreateSellPropertyProposal"],
        },
    ],

    [
        "0bef240c3684886e",
        {
            name: "DeleteProposal",
            schema: EventSchemas["DeleteProposal"],
        },
    ],

    [
        "4490979780fae079",
        {
            name: "ExecuteStateProposal",
            schema: EventSchemas["ExecuteStateProposal"],
        },
    ],

    [
        "bb971f3379ee88bd",
        {
            name: "FinalizeAccusedAuthority",
            schema: EventSchemas["FinalizeAccusedAuthority"],
        },
    ],

    [
        "bc00e34a81195015",
        {
            name: "FinalizeAuthority",
            schema: EventSchemas["FinalizeAuthority"],
        },
    ],

    [
        "b30235d76fec7bf6",
        {
            name: "FinalizeProposal",
            schema: EventSchemas["FinalizeProposal"],
        },
    ],

    [
        "ff6a731c1427d88f",
        {
            name: "LandAccountCreated",
            schema: EventSchemas["LandAccountCreated"],
        },
    ],

    [
        "0fe987de0ebc7fca",
        {
            name: "LeaseAcceptedByLesse",
            schema: EventSchemas["LeaseAcceptedByLesse"],
        },
    ],

    [
        "ea3ebf42c43f2e7e",
        {
            name: "LeaseFinalize",
            schema: EventSchemas["LeaseFinalize"],
        },
    ],

    [
        "fbcad09a75023288",
        {
            name: "LeaseProposalCreated",
            schema: EventSchemas["LeaseProposalCreated"],
        },
    ],

    [
        "6bf62f7e7547d5a8",
        {
            name: "NewThresholdAdopted",
            schema: EventSchemas["NewThresholdAdopted"],
        },
    ],

    [
        "c9e48d1a4bf5cd96",
        {
            name: "NewThresholdSelected",
            schema: EventSchemas["NewThresholdSelected"],
        },
    ],

    [
        "6a611452561af80a",
        {
            name: "PropertyCreated",
            schema: EventSchemas["PropertyCreated"],
        },
    ],

    [
        "01f2e15acf341f5b",
        {
            name: "PropertyProposalCreated",
            schema: EventSchemas["PropertyProposalCreated"],
        },
    ],

    [
        "fee59a385f8e2266",
        {
            name: "PropertySystemCreated",
            schema: EventSchemas["PropertySystemCreated"],
        },
    ],

    [
        "bdf482bb0df5808f",
        {
            name: "ProposedNewThreshold",
            schema: EventSchemas["ProposedNewThreshold"],
        },
    ],

    [
        "9d15d569478ce7f4",
        {
            name: "RemoveGuiltyAuthority",
            schema: EventSchemas["RemoveGuiltyAuthority"],
        },
    ],

    [
        "8c1dac45982649f1",
        {
            name: "RentPaid",
            schema: EventSchemas["RentPaid"],
        },
    ],

    [
        "5c446c203cf1631b",
        {
            name: "ResignationCreated",
            schema: EventSchemas["ResignationCreated"],
        },
    ],

    [
        "f3373b536ef9b24c",
        {
            name: "ResignationOfAuthority",
            schema: EventSchemas["ResignationOfAuthority"],
        },
    ],

    [
        "4ae482a91fd37178",
        {
            name: "RevenueChangeProposalCreated",
            schema: EventSchemas["RevenueChangeProposalCreated"],
        },
    ],

    [
        "84b60848c5b6bd69",
        {
            name: "SalaryClaimed",
            schema: EventSchemas["SalaryClaimed"],
        },
    ],

    [
        "0609a8aa94c5c055",
        {
            name: "SnapshotRequested",
            schema: EventSchemas["SnapshotRequested"],
        },
    ],

    [
        "7b7ea5a4d6bed0d3",
        {
            name: "SnapshotRequestedForAuthority",
            schema: EventSchemas["SnapshotRequestedForAuthority"],
        },
    ],

    [
        "fe2d5c820c4fa017",
        {
            name: "SnapshotSubmitted",
            schema: EventSchemas["SnapshotSubmitted"],
        },
    ],

    [
        "0ff050b6a10c891a",
        {
            name: "StateCreated",
            schema: EventSchemas["StateCreated"],
        },
    ],

    [
        "d7fb921a79664672",
        {
            name: "SubmitForTokenTransfer",
            schema: EventSchemas["SubmitForTokenTransfer"],
        },
    ],

    [
        "a98797a0edf1c4a3",
        {
            name: "SubmitSnapshotForRemoveAuthority",
            schema: EventSchemas["SubmitSnapshotForRemoveAuthority"],
        },
    ],

    [
        "ecee2f26a9f104cf",
        {
            name: "SubmitSnapshotForResignAuthority",
            schema: EventSchemas["SubmitSnapshotForResignAuthority"],
        },
    ],

    [
        "28d307d1a1605eb7",
        {
            name: "SubmitSnapshotForRevenueChangeProposal",
            schema: EventSchemas["SubmitSnapshotForRevenueChangeProposal"],
        },
    ],

    [
        "3acc7de3640edf10",
        {
            name: "SubmitSnapshotForSellProposal",
            schema: EventSchemas["SubmitSnapshotForSellProposal"],
        },
    ],

    [
        "46fb7d915b2ec652",
        {
            name: "TokenTransferExecuted",
            schema: EventSchemas["TokenTransferExecuted"],
        },
    ],

    [
        "0fe6eb63f9a1e876",
        {
            name: "TreasuryDistributionEvent",
            schema: EventSchemas["TreasuryDistributionEvent"],
        },
    ],

    [
        "bccf3740afcfd23c",
        {
            name: "VoteForAuthority",
            schema: EventSchemas["VoteForAuthority"],
        },
    ],

    [
        "895029fa7534a618",
        {
            name: "VoteForProposal",
            schema: EventSchemas["VoteForProposal"],
        },
    ],

    [
        "79dfa2963f648a2e",
        {
            name: "VoteForStateProposal",
            schema: EventSchemas["VoteForStateProposal"],
        },
    ],

    [
        "03828f43451f9c02",
        {
            name: "VotedForNewThreshold",
            schema: EventSchemas["VotedForNewThreshold"],
        },
    ],

    [
        "9a314dc544989daf",
        {
            name: "VotedForPropertyProposal",
            schema: EventSchemas["VotedForPropertyProposal"],
        },
    ],
]);