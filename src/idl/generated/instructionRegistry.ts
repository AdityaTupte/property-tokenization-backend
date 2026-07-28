import { Schemas } from "./schemas";

export const InstructionRegistry = new Map([

    [
        "c86b6082c2d78daa",
        {
            name: "add_arbitrar_for_removal",
            schema: Schemas["add_arbitrar_for_removal"],
        },
    ],

    [
        "c7d2bc24e5ea0f5e",
        {
            name: "add_arbitrar_offender",
            schema: Schemas["add_arbitrar_offender"],
        },
    ],

    [
        "723d1a4487572bf8",
        {
            name: "add_arbitrator",
            schema: Schemas["add_arbitrator"],
        },
    ],

    [
        "c7782688c82a4356",
        {
            name: "add_country_authority",
            schema: Schemas["add_country_authority"],
        },
    ],

    [
        "85791123240f7f20",
        {
            name: "add_new_arbitrar",
            schema: Schemas["add_new_arbitrar"],
        },
    ],

    [
        "4dd18b620872dfd6",
        {
            name: "add_new_authority_for_arbitrar_remove_proposal",
            schema: Schemas["add_new_authority_for_arbitrar_remove_proposal"],
        },
    ],

    [
        "88c961432a227f03",
        {
            name: "add_new_authority_for_trustee_remove_proposal",
            schema: Schemas["add_new_authority_for_trustee_remove_proposal"],
        },
    ],

    [
        "b3422bf3acf99627",
        {
            name: "add_new_trustee",
            schema: Schemas["add_new_trustee"],
        },
    ],

    [
        "25d42c2287e1e10e",
        {
            name: "add_state_auhtority",
            schema: Schemas["add_state_auhtority"],
        },
    ],

    [
        "9da0d7fc789e99bf",
        {
            name: "add_trustee",
            schema: Schemas["add_trustee"],
        },
    ],

    [
        "3777d52bd6444f19",
        {
            name: "add_trustee_for_removal",
            schema: Schemas["add_trustee_for_removal"],
        },
    ],

    [
        "4001e5edd38c1e89",
        {
            name: "add_trustee_offender",
            schema: Schemas["add_trustee_offender"],
        },
    ],

    [
        "125dc46426bece3d",
        {
            name: "adjust_arbitrar_ranks",
            schema: Schemas["adjust_arbitrar_ranks"],
        },
    ],

    [
        "ec278f48ffbbdb6e",
        {
            name: "adjust_ranking_of_new_authority_for_remove_proposal",
            schema: Schemas["adjust_ranking_of_new_authority_for_remove_proposal"],
        },
    ],

    [
        "a53a4fd962199868",
        {
            name: "adjust_ranks",
            schema: Schemas["adjust_ranks"],
        },
    ],

    [
        "e4b4fac989df1692",
        {
            name: "approve_country",
            schema: Schemas["approve_country"],
        },
    ],

    [
        "db938821c87e743b",
        {
            name: "approve_property_proposal",
            schema: Schemas["approve_property_proposal"],
        },
    ],

    [
        "930b498fa5bdd386",
        {
            name: "arbitrar_approval_for_lease",
            schema: Schemas["arbitrar_approval_for_lease"],
        },
    ],

    [
        "76706ca3971fa4d6",
        {
            name: "arbitrar_approve_trustee_election",
            schema: Schemas["arbitrar_approve_trustee_election"],
        },
    ],

    [
        "f58db3190c674393",
        {
            name: "arbitrar_resign",
            schema: Schemas["arbitrar_resign"],
        },
    ],

    [
        "9473fc6d734aa8da",
        {
            name: "arbitrar_salary_claim",
            schema: Schemas["arbitrar_salary_claim"],
        },
    ],

    [
        "fccc800b09bf4302",
        {
            name: "ask_snapshot_for_challenge_proposal",
            schema: Schemas["ask_snapshot_for_challenge_proposal"],
        },
    ],

    [
        "3ce6f9abe4fbcc43",
        {
            name: "ask_snapshot_for_remove_proposal",
            schema: Schemas["ask_snapshot_for_remove_proposal"],
        },
    ],

    [
        "489c71be6c98f7f8",
        {
            name: "buy_proposal_arbitrar_vote",
            schema: Schemas["buy_proposal_arbitrar_vote"],
        },
    ],

    [
        "4b85b95e26051c7e",
        {
            name: "buy_proposal_finalize",
            schema: Schemas["buy_proposal_finalize"],
        },
    ],

    [
        "da51c16f709f93ac",
        {
            name: "buy_proposal_voting",
            schema: Schemas["buy_proposal_voting"],
        },
    ],

    [
        "435488a69e92d1f8",
        {
            name: "buy_submit_snapshot",
            schema: Schemas["buy_submit_snapshot"],
        },
    ],

    [
        "9649c1b4a69efabd",
        {
            name: "challenge_against_new_arbitrar",
            schema: Schemas["challenge_against_new_arbitrar"],
        },
    ],

    [
        "14bd79ea446442a2",
        {
            name: "challenge_against_new_trustee",
            schema: Schemas["challenge_against_new_trustee"],
        },
    ],

    [
        "1a8422f1a66fd603",
        {
            name: "challenge_authority",
            schema: Schemas["challenge_authority"],
        },
    ],

    [
        "5e5b1cbcc883dd72",
        {
            name: "challenge_new_authority_of_removal_prposal",
            schema: Schemas["challenge_new_authority_of_removal_prposal"],
        },
    ],

    [
        "7214326c87f4d155",
        {
            name: "challenge_new_threshold",
            schema: Schemas["challenge_new_threshold"],
        },
    ],

    [
        "463e51f54b6c548c",
        {
            name: "change_to_the_new_threshold",
            schema: Schemas["change_to_the_new_threshold"],
        },
    ],

    [
        "a689c9ce94d3cee9",
        {
            name: "claim_dividend_token",
            schema: Schemas["claim_dividend_token"],
        },
    ],

    [
        "9a9f7bb85ce03dfa",
        {
            name: "create_approve_country_authority",
            schema: Schemas["create_approve_country_authority"],
        },
    ],

    [
        "02730b642f160daf",
        {
            name: "create_buy_proposal",
            schema: Schemas["create_buy_proposal"],
        },
    ],

    [
        "977a90342a0407db",
        {
            name: "create_candidate_profile",
            schema: Schemas["create_candidate_profile"],
        },
    ],

    [
        "070daa8d2b65ce1e",
        {
            name: "create_country_proposal",
            schema: Schemas["create_country_proposal"],
        },
    ],

    [
        "8edf44d6dc90ed1d",
        {
            name: "create_property_proposal",
            schema: Schemas["create_property_proposal"],
        },
    ],

    [
        "7b42eb6fe76572bd",
        {
            name: "create_property_system",
            schema: Schemas["create_property_system"],
        },
    ],

    [
        "f472d227edd52ad3",
        {
            name: "create_sell_proposal",
            schema: Schemas["create_sell_proposal"],
        },
    ],

    [
        "be79ed2cc35fcb40",
        {
            name: "delete_buy_proposal",
            schema: Schemas["delete_buy_proposal"],
        },
    ],

    [
        "6b1ce42fb7fe7cd1",
        {
            name: "delete_sell",
            schema: Schemas["delete_sell"],
        },
    ],

    [
        "6e44d7bbb1a78349",
        {
            name: "execute_buy_proposal",
            schema: Schemas["execute_buy_proposal"],
        },
    ],

    [
        "198af0f4bf3ac46a",
        {
            name: "execute_country_propsal",
            schema: Schemas["execute_country_propsal"],
        },
    ],

    [
        "b82954a19eddc650",
        {
            name: "execute_property_proposal",
            schema: Schemas["execute_property_proposal"],
        },
    ],

    [
        "366cd82890d17feb",
        {
            name: "finalize_arbitrar_candidate_profile_for_challenge_proposal",
            schema: Schemas["finalize_arbitrar_candidate_profile_for_challenge_proposal"],
        },
    ],

    [
        "bfa83f27893f1be7",
        {
            name: "finalize_lease",
            schema: Schemas["finalize_lease"],
        },
    ],

    [
        "336f0f793672ca07",
        {
            name: "finalize_new_arbitrar",
            schema: Schemas["finalize_new_arbitrar"],
        },
    ],

    [
        "cb184b6876002f49",
        {
            name: "finalize_new_arbitrar_for_remove_proposal",
            schema: Schemas["finalize_new_arbitrar_for_remove_proposal"],
        },
    ],

    [
        "02b43867e900d5b6",
        {
            name: "finalize_new_threshold",
            schema: Schemas["finalize_new_threshold"],
        },
    ],

    [
        "08e9e39867874100",
        {
            name: "finalize_new_trustee",
            schema: Schemas["finalize_new_trustee"],
        },
    ],

    [
        "c8d63a3f22658353",
        {
            name: "finalize_new_trustee_for_remove_proposal",
            schema: Schemas["finalize_new_trustee_for_remove_proposal"],
        },
    ],

    [
        "6b043aa17cf17161",
        {
            name: "finalize_old_arbitrar",
            schema: Schemas["finalize_old_arbitrar"],
        },
    ],

    [
        "75f7ed093f363a75",
        {
            name: "finalize_old_trsutee",
            schema: Schemas["finalize_old_trsutee"],
        },
    ],

    [
        "adcba3c7a73afc73",
        {
            name: "finalize_remove_proposal",
            schema: Schemas["finalize_remove_proposal"],
        },
    ],

    [
        "1f0682b0b9a0f1f4",
        {
            name: "finalize_rtc_proposal",
            schema: Schemas["finalize_rtc_proposal"],
        },
    ],

    [
        "6b34c1023702e3b9",
        {
            name: "finalize_trustee_candidate_profile_for_challenge_proposal",
            schema: Schemas["finalize_trustee_candidate_profile_for_challenge_proposal"],
        },
    ],

    [
        "f7e350aff0531f68",
        {
            name: "initialize_lease_proposal",
            schema: Schemas["initialize_lease_proposal"],
        },
    ],

    [
        "ca8d941c48387b4f",
        {
            name: "lease_accept",
            schema: Schemas["lease_accept"],
        },
    ],

    [
        "dc8bb7a984e6c081",
        {
            name: "outcome_of_proposal",
            schema: Schemas["outcome_of_proposal"],
        },
    ],

    [
        "459b70b7b2ea5e64",
        {
            name: "pay_rent",
            schema: Schemas["pay_rent"],
        },
    ],

    [
        "43a8f211c23c3947",
        {
            name: "propose_new_threshold",
            schema: Schemas["propose_new_threshold"],
        },
    ],

    [
        "95c2e727f38c4ef4",
        {
            name: "remove_arbitrar_guilt_authority_proposal",
            schema: Schemas["remove_arbitrar_guilt_authority_proposal"],
        },
    ],

    [
        "fc1746c2cde1445f",
        {
            name: "remove_old_arbitrar_remove_proposal",
            schema: Schemas["remove_old_arbitrar_remove_proposal"],
        },
    ],

    [
        "5a4cfe775e47daa1",
        {
            name: "remove_old_trustee_remove_proposal",
            schema: Schemas["remove_old_trustee_remove_proposal"],
        },
    ],

    [
        "eb3dddff67c72d4a",
        {
            name: "remove_trustee_guilt_authority_proposal",
            schema: Schemas["remove_trustee_guilt_authority_proposal"],
        },
    ],

    [
        "6dfc66d57788aa45",
        {
            name: "revenue_change_proposal",
            schema: Schemas["revenue_change_proposal"],
        },
    ],

    [
        "61a6602565ae56a2",
        {
            name: "revenue_proposal_arbitrar_vote",
            schema: Schemas["revenue_proposal_arbitrar_vote"],
        },
    ],

    [
        "9b18cfaa46f3c97c",
        {
            name: "revenue_proposal_submit_snapshot",
            schema: Schemas["revenue_proposal_submit_snapshot"],
        },
    ],

    [
        "96eab1c03f58c16d",
        {
            name: "revenue_proposal_voting",
            schema: Schemas["revenue_proposal_voting"],
        },
    ],

    [
        "a23be1b2ce43c601",
        {
            name: "sell_proposal_arbitrar_vote",
            schema: Schemas["sell_proposal_arbitrar_vote"],
        },
    ],

    [
        "1f54e18d25959644",
        {
            name: "sell_proposal_finalize",
            schema: Schemas["sell_proposal_finalize"],
        },
    ],

    [
        "88eba18f9450835e",
        {
            name: "state_creation_proposal",
            schema: Schemas["state_creation_proposal"],
        },
    ],

    [
        "3c2c0a91d3049544",
        {
            name: "state_proposal_approval",
            schema: Schemas["state_proposal_approval"],
        },
    ],

    [
        "a10ce5935e1fc455",
        {
            name: "state_proposal_execute",
            schema: Schemas["state_proposal_execute"],
        },
    ],

    [
        "ecb6436a20a1a451",
        {
            name: "submit_arbitrar_candidate",
            schema: Schemas["submit_arbitrar_candidate"],
        },
    ],

    [
        "0c972df9b22f3ab8",
        {
            name: "submit_candidate_for_arbitrar_authority_for_remove_proposal",
            schema: Schemas["submit_candidate_for_arbitrar_authority_for_remove_proposal"],
        },
    ],

    [
        "04230dc9d4f6c8e1",
        {
            name: "submit_candidate_for_trustee_authority_for_remove_proposal",
            schema: Schemas["submit_candidate_for_trustee_authority_for_remove_proposal"],
        },
    ],

    [
        "00ddade3d1ac9911",
        {
            name: "submit_snaphot_for_voting_on_challenge_proposal",
            schema: Schemas["submit_snaphot_for_voting_on_challenge_proposal"],
        },
    ],

    [
        "79fe461c2e9a893d",
        {
            name: "submit_snapshot_for_arbitrar_election",
            schema: Schemas["submit_snapshot_for_arbitrar_election"],
        },
    ],

    [
        "a3dbcf90aa2e4b88",
        {
            name: "submit_snapshot_for_authority",
            schema: Schemas["submit_snapshot_for_authority"],
        },
    ],

    [
        "d64e25f2305ac4b1",
        {
            name: "submit_snapshot_for_removal_proposal",
            schema: Schemas["submit_snapshot_for_removal_proposal"],
        },
    ],

    [
        "13aa2f72a7473f56",
        {
            name: "submit_snapshot_for_sell_proposal",
            schema: Schemas["submit_snapshot_for_sell_proposal"],
        },
    ],

    [
        "fb518ed0b863aeec",
        {
            name: "submit_trustee_candidate",
            schema: Schemas["submit_trustee_candidate"],
        },
    ],

    [
        "e7c18d8088c55356",
        {
            name: "terminate_lease",
            schema: Schemas["terminate_lease"],
        },
    ],

    [
        "527b012e291292a3",
        {
            name: "token_transfer_arbitrar_approval_reinvest_proposal",
            schema: Schemas["token_transfer_arbitrar_approval_reinvest_proposal"],
        },
    ],

    [
        "4492fd84bf819f7f",
        {
            name: "token_transfer_arbitrar_approval_safety_proposal",
            schema: Schemas["token_transfer_arbitrar_approval_safety_proposal"],
        },
    ],

    [
        "9a2d6c26ad0f44b8",
        {
            name: "token_transfer_create_use_reinvest_proposal",
            schema: Schemas["token_transfer_create_use_reinvest_proposal"],
        },
    ],

    [
        "82d4376e3f7d8106",
        {
            name: "token_transfer_create_use_safety_proposal",
            schema: Schemas["token_transfer_create_use_safety_proposal"],
        },
    ],

    [
        "67e23cd2595da151",
        {
            name: "token_transfer_delete_reinvest_proposal",
            schema: Schemas["token_transfer_delete_reinvest_proposal"],
        },
    ],

    [
        "7e90fcbaad4edbf2",
        {
            name: "token_transfer_delete_safety_proposal",
            schema: Schemas["token_transfer_delete_safety_proposal"],
        },
    ],

    [
        "dbd4e18dad6ba490",
        {
            name: "token_transfer_execute_reinvest_proposal",
            schema: Schemas["token_transfer_execute_reinvest_proposal"],
        },
    ],

    [
        "96317e36b44c0966",
        {
            name: "token_transfer_execute_safety_proposal",
            schema: Schemas["token_transfer_execute_safety_proposal"],
        },
    ],

    [
        "da4d2e9468932c76",
        {
            name: "token_transfer_finalize_reinvest_proposal",
            schema: Schemas["token_transfer_finalize_reinvest_proposal"],
        },
    ],

    [
        "738c46ceedfd5d06",
        {
            name: "token_transfer_finalize_safety_proposal",
            schema: Schemas["token_transfer_finalize_safety_proposal"],
        },
    ],

    [
        "9ab58c140cc07cb4",
        {
            name: "token_transfer_submit_snapshot_reinvest_proposal",
            schema: Schemas["token_transfer_submit_snapshot_reinvest_proposal"],
        },
    ],

    [
        "166e966fef2c0c38",
        {
            name: "token_transfer_submit_snapshot_safety_proposal",
            schema: Schemas["token_transfer_submit_snapshot_safety_proposal"],
        },
    ],

    [
        "4d4ccdc04c31ecf4",
        {
            name: "token_transfer_vote_for_reinvest_proposal",
            schema: Schemas["token_transfer_vote_for_reinvest_proposal"],
        },
    ],

    [
        "2e36292527843893",
        {
            name: "token_transfer_vote_for_submit_proposal",
            schema: Schemas["token_transfer_vote_for_submit_proposal"],
        },
    ],

    [
        "dc9e19ddfd286641",
        {
            name: "treasury_distribution",
            schema: Schemas["treasury_distribution"],
        },
    ],

    [
        "cf58170d761c3bdd",
        {
            name: "trustee_approve_arbitrar_election",
            schema: Schemas["trustee_approve_arbitrar_election"],
        },
    ],

    [
        "1830efe2aa51eb76",
        {
            name: "trustee_resign",
            schema: Schemas["trustee_resign"],
        },
    ],

    [
        "cc9d320bff9114fc",
        {
            name: "trustee_salary_claim",
            schema: Schemas["trustee_salary_claim"],
        },
    ],

    [
        "8a2cbf461ef7eaea",
        {
            name: "vote_for_arbitrar_candiate",
            schema: Schemas["vote_for_arbitrar_candiate"],
        },
    ],

    [
        "9179346dd8a4703b",
        {
            name: "vote_for_challenge_proposal",
            schema: Schemas["vote_for_challenge_proposal"],
        },
    ],

    [
        "5b050eadc086ae3f",
        {
            name: "vote_for_new_arbitrar_authority_for_removal_proposal",
            schema: Schemas["vote_for_new_arbitrar_authority_for_removal_proposal"],
        },
    ],

    [
        "78544cb9d7589426",
        {
            name: "vote_for_new_threshold",
            schema: Schemas["vote_for_new_threshold"],
        },
    ],

    [
        "48c1b37251eeacad",
        {
            name: "vote_for_new_trustee_authority_for_removal_proposal",
            schema: Schemas["vote_for_new_trustee_authority_for_removal_proposal"],
        },
    ],

    [
        "822d9dfd38aadb43",
        {
            name: "vote_for_trustee_candiate",
            schema: Schemas["vote_for_trustee_candiate"],
        },
    ],

    [
        "aa4bd9280d765dbc",
        {
            name: "voting_for_sell_proposal",
            schema: Schemas["voting_for_sell_proposal"],
        },
    ],
]);