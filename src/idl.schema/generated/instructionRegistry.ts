import { Schemas } from "./schemas";

export const InstructionRegistry = new Map([

    [
        "c86b6082c2d78daa",
        {
            name: "add_arbitrar_for_removal",
            schema: Schemas["add_arbitrar_for_removal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "arbitrar",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_receipt",
                writable: false,
                signer: false
            },
{
                name: "challenge_proposal",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_offender_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "resignation",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "c7d2bc24e5ea0f5e",
        {
            name: "add_arbitrar_offender",
            schema: Schemas["add_arbitrar_offender"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_offender",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_receipt",
                writable: false,
                signer: false
            },
{
                name: "offender_receipt",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "723d1a4487572bf8",
        {
            name: "add_arbitrator",
            schema: Schemas["add_arbitrator"],
            accounts: [
                {
                name: "authority",
                writable: true,
                signer: true
            },
{
                name: "property_system_acc",
                writable: true,
                signer: false
            },
{
                name: "trustee_registry",
                writable: true,
                signer: false
            },
{
                name: "arbitrator_registry",
                writable: true,
                signer: false
            },
{
                name: "new_arbitrator",
                writable: true,
                signer: true
            },
{
                name: "new_arbitrator_recepit",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "c7782688c82a4356",
        {
            name: "add_country_authority",
            schema: Schemas["add_country_authority"],
            accounts: [
                {
                name: "authority",
                writable: false,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "country_authority",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "country",
                writable: true,
                signer: false
            },
{
                name: "country_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "85791123240f7f20",
        {
            name: "add_new_arbitrar",
            schema: Schemas["add_new_arbitrar"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "counter",
                writable: true,
                signer: false
            },
{
                name: "ranking_acc",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "4dd18b620872dfd6",
        {
            name: "add_new_authority_for_arbitrar_remove_proposal",
            schema: Schemas["add_new_authority_for_arbitrar_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "counter",
                writable: true,
                signer: false
            },
{
                name: "ranking_acc",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "88c961432a227f03",
        {
            name: "add_new_authority_for_trustee_remove_proposal",
            schema: Schemas["add_new_authority_for_trustee_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "counter",
                writable: true,
                signer: false
            },
{
                name: "ranking_acc",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "b3422bf3acf99627",
        {
            name: "add_new_trustee",
            schema: Schemas["add_new_trustee"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "counter",
                writable: true,
                signer: false
            },
{
                name: "ranking_acc",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "25d42c2287e1e10e",
        {
            name: "add_state_auhtority",
            schema: Schemas["add_state_auhtority"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "state_authority",
                writable: false,
                signer: false
            },
{
                name: "country",
                writable: false,
                signer: false
            },
{
                name: "country_authority",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "state",
                writable: true,
                signer: false
            },
{
                name: "state_authority_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "9da0d7fc789e99bf",
        {
            name: "add_trustee",
            schema: Schemas["add_trustee"],
            accounts: [
                {
                name: "authority",
                writable: true,
                signer: true
            },
{
                name: "property_system_acc",
                writable: true,
                signer: false
            },
{
                name: "trustee_registry",
                writable: true,
                signer: false
            },
{
                name: "new_trustee",
                writable: true,
                signer: true
            },
{
                name: "new_trustee_recepit",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "3777d52bd6444f19",
        {
            name: "add_trustee_for_removal",
            schema: Schemas["add_trustee_for_removal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "trustee",
                writable: false,
                signer: false
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "challenge_proposal",
                writable: false,
                signer: false
            },
{
                name: "trustee_offender_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "resignation",
                writable: true,
                signer: false
            },
{
                name: "remove_proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "4001e5edd38c1e89",
        {
            name: "add_trustee_offender",
            schema: Schemas["add_trustee_offender"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "trustee_offender",
                writable: false,
                signer: false
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "offender_receipt",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "125dc46426bece3d",
        {
            name: "adjust_arbitrar_ranks",
            schema: Schemas["adjust_arbitrar_ranks"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "authority_candidate1",
                writable: false,
                signer: false
            },
{
                name: "ranking_acc1",
                writable: true,
                signer: false
            },
{
                name: "authority_candidate2",
                writable: false,
                signer: false
            },
{
                name: "ranking_acc2",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "ec278f48ffbbdb6e",
        {
            name: "adjust_ranking_of_new_authority_for_remove_proposal",
            schema: Schemas["adjust_ranking_of_new_authority_for_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "authority_candidate1",
                writable: false,
                signer: false
            },
{
                name: "ranking_acc1",
                writable: true,
                signer: false
            },
{
                name: "authority_candidate2",
                writable: false,
                signer: false
            },
{
                name: "ranking_acc2",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "a53a4fd962199868",
        {
            name: "adjust_ranks",
            schema: Schemas["adjust_ranks"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "authority_candidate1",
                writable: false,
                signer: false
            },
{
                name: "ranking_acc1",
                writable: true,
                signer: false
            },
{
                name: "authority_candidate2",
                writable: false,
                signer: false
            },
{
                name: "ranking_acc2",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "e4b4fac989df1692",
        {
            name: "approve_country",
            schema: Schemas["approve_country"],
            accounts: [
                {
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "authority",
                writable: false,
                signer: false
            },
{
                name: "authority_recipt",
                writable: true,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "db938821c87e743b",
        {
            name: "approve_property_proposal",
            schema: Schemas["approve_property_proposal"],
            accounts: [
                {
                name: "state",
                writable: false,
                signer: false
            },
{
                name: "property_proposal",
                writable: true,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "state_authority_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_approval_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "930b498fa5bdd386",
        {
            name: "arbitrar_approval_for_lease",
            schema: Schemas["arbitrar_approval_for_lease"],
            accounts: [
                {
                name: "arbitrar",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_voter",
                writable: true,
                signer: false
            },
{
                name: "lease_proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "76706ca3971fa4d6",
        {
            name: "arbitrar_approve_trustee_election",
            schema: Schemas["arbitrar_approve_trustee_election"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "arbitrar_voter_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "f58db3190c674393",
        {
            name: "arbitrar_resign",
            schema: Schemas["arbitrar_resign"],
            accounts: [
                {
                name: "arbitrar",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "resignation",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "9473fc6d734aa8da",
        {
            name: "arbitrar_salary_claim",
            schema: Schemas["arbitrar_salary_claim"],
            accounts: [
                {
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "arbitrar",
                writable: false,
                signer: false
            },
{
                name: "arbitirar_receipt",
                writable: true,
                signer: false
            },
{
                name: "arbitrar_ata",
                writable: true,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: true,
                signer: false
            },
{
                name: "arbitrar_registry_ata",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "fccc800b09bf4302",
        {
            name: "ask_snapshot_for_challenge_proposal",
            schema: Schemas["ask_snapshot_for_challenge_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "challenge_proposal",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "3ce6f9abe4fbcc43",
        {
            name: "ask_snapshot_for_remove_proposal",
            schema: Schemas["ask_snapshot_for_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposed_remove_proposal",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "489c71be6c98f7f8",
        {
            name: "buy_proposal_arbitrar_vote",
            schema: Schemas["buy_proposal_arbitrar_vote"],
            accounts: [
                {
                name: "arbitrar",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_receipt",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "buyer",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_voter",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "4b85b95e26051c7e",
        {
            name: "buy_proposal_finalize",
            schema: Schemas["buy_proposal_finalize"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "da51c16f709f93ac",
        {
            name: "buy_proposal_voting",
            schema: Schemas["buy_proposal_voting"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "voter_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "435488a69e92d1f8",
        {
            name: "buy_submit_snapshot",
            schema: Schemas["buy_submit_snapshot"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "9649c1b4a69efabd",
        {
            name: "challenge_against_new_arbitrar",
            schema: Schemas["challenge_against_new_arbitrar"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "challenge_from",
                writable: true,
                signer: false
            },
{
                name: "challenge_to",
                writable: false,
                signer: false
            },
{
                name: "ranking_acc",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "14bd79ea446442a2",
        {
            name: "challenge_against_new_trustee",
            schema: Schemas["challenge_against_new_trustee"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "challenge_from",
                writable: true,
                signer: false
            },
{
                name: "challenge_to",
                writable: true,
                signer: false
            },
{
                name: "ranking_acc",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "1a8422f1a66fd603",
        {
            name: "challenge_authority",
            schema: Schemas["challenge_authority"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "ata",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "5e5b1cbcc883dd72",
        {
            name: "challenge_new_authority_of_removal_prposal",
            schema: Schemas["challenge_new_authority_of_removal_prposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "challenge_from",
                writable: false,
                signer: false
            },
{
                name: "challenge_to",
                writable: false,
                signer: false
            },
{
                name: "ranking_acc",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "7214326c87f4d155",
        {
            name: "challenge_new_threshold",
            schema: Schemas["challenge_new_threshold"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "existing_new_threshold",
                writable: false,
                signer: false
            },
{
                name: "challenge_new_threshold",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "463e51f54b6c548c",
        {
            name: "change_to_the_new_threshold",
            schema: Schemas["change_to_the_new_threshold"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "new_threshold",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "a689c9ce94d3cee9",
        {
            name: "claim_dividend_token",
            schema: Schemas["claim_dividend_token"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "signer_governance_mint_ata",
                writable: false,
                signer: false
            },
{
                name: "signer_ata",
                writable: true,
                signer: false
            },
{
                name: "dividend_pda",
                writable: true,
                signer: false
            },
{
                name: "dividend_ata",
                writable: true,
                signer: false
            },
{
                name: "reward_pda",
                writable: true,
                signer: false
            },
{
                name: "transfer_hook_program",
                writable: false,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "governance_mint",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "9a9f7bb85ce03dfa",
        {
            name: "create_approve_country_authority",
            schema: Schemas["create_approve_country_authority"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "authority",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "02730b642f160daf",
        {
            name: "create_buy_proposal",
            schema: Schemas["create_buy_proposal"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "buyer",
                writable: false,
                signer: false
            },
{
                name: "buyer_reinvestment_pda",
                writable: false,
                signer: false
            },
{
                name: "seller_proposal",
                writable: false,
                signer: false
            },
{
                name: "property_account",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "977a90342a0407db",
        {
            name: "create_candidate_profile",
            schema: Schemas["create_candidate_profile"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "candidate",
                writable: false,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "070daa8d2b65ce1e",
        {
            name: "create_country_proposal",
            schema: Schemas["create_country_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "country_acc",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "8edf44d6dc90ed1d",
        {
            name: "create_property_proposal",
            schema: Schemas["create_property_proposal"],
            accounts: [
                {
                name: "property_system",
                writable: true,
                signer: false
            },
{
                name: "state",
                writable: false,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "state_authority_receipt",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "7b42eb6fe76572bd",
        {
            name: "create_property_system",
            schema: Schemas["create_property_system"],
            accounts: [
                {
                name: "creator",
                writable: true,
                signer: true
            },
{
                name: "property_system_acc",
                writable: true,
                signer: false
            },
{
                name: "threshold",
                writable: true,
                signer: false
            },
{
                name: "treasury_pda",
                writable: true,
                signer: false
            },
{
                name: "reinvestment_pda",
                writable: true,
                signer: false
            },
{
                name: "safety_pda",
                writable: true,
                signer: false
            },
{
                name: "dividend_pda",
                writable: true,
                signer: false
            },
{
                name: "trustee_registry",
                writable: true,
                signer: false
            },
{
                name: "arbitrator_registry",
                writable: true,
                signer: false
            },
{
                name: "governance_mint",
                writable: true,
                signer: false
            },
{
                name: "creator_ata",
                writable: true,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "custom_program",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            },
{
                name: "transfer_hook_program",
                writable: false,
                signer: false
            },
{
                name: "extra_account_meta_list",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "f472d227edd52ad3",
        {
            name: "create_sell_proposal",
            schema: Schemas["create_sell_proposal"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "seller",
                writable: false,
                signer: false
            },
{
                name: "seller_treasury",
                writable: false,
                signer: false
            },
{
                name: "property_account",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "be79ed2cc35fcb40",
        {
            name: "delete_buy_proposal",
            schema: Schemas["delete_buy_proposal"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "6b1ce42fb7fe7cd1",
        {
            name: "delete_sell",
            schema: Schemas["delete_sell"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "6e44d7bbb1a78349",
        {
            name: "execute_buy_proposal",
            schema: Schemas["execute_buy_proposal"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "buyer",
                writable: true,
                signer: false
            },
{
                name: "buyer_wallet",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "buyer_ata",
                writable: true,
                signer: false
            },
{
                name: "sell_proposal",
                writable: true,
                signer: false
            },
{
                name: "seller",
                writable: true,
                signer: false
            },
{
                name: "seller_treasury",
                writable: false,
                signer: false
            },
{
                name: "seller_ata",
                writable: true,
                signer: false
            },
{
                name: "property_account",
                writable: true,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "198af0f4bf3ac46a",
        {
            name: "execute_country_propsal",
            schema: Schemas["execute_country_propsal"],
            accounts: [
                {
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "country_pda",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "b82954a19eddc650",
        {
            name: "execute_property_proposal",
            schema: Schemas["execute_property_proposal"],
            accounts: [
                {
                name: "property_system_account",
                writable: true,
                signer: false
            },
{
                name: "state",
                writable: false,
                signer: false
            },
{
                name: "property_proposal",
                writable: true,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "state_authority_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_pda",
                writable: true,
                signer: false
            },
{
                name: "property_metadata",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "366cd82890d17feb",
        {
            name: "finalize_arbitrar_candidate_profile_for_challenge_proposal",
            schema: Schemas["finalize_arbitrar_candidate_profile_for_challenge_proposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "arbitrar_offender_receipt",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "bfa83f27893f1be7",
        {
            name: "finalize_lease",
            schema: Schemas["finalize_lease"],
            accounts: [
                {
                name: "neutral",
                writable: false,
                signer: true
            },
{
                name: "lessee",
                writable: false,
                signer: false
            },
{
                name: "lessee_ata",
                writable: true,
                signer: false
            },
{
                name: "lease",
                writable: true,
                signer: false
            },
{
                name: "lease_ata",
                writable: true,
                signer: false
            },
{
                name: "property",
                writable: true,
                signer: false
            },
{
                name: "reinvestment_pda",
                writable: true,
                signer: false
            },
{
                name: "reinvestment_ata",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "336f0f793672ca07",
        {
            name: "finalize_new_arbitrar",
            schema: Schemas["finalize_new_arbitrar"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "candidate",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_receipt",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: true,
                signer: false
            },
{
                name: "authority_candidate",
                writable: false,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "cb184b6876002f49",
        {
            name: "finalize_new_arbitrar_for_remove_proposal",
            schema: Schemas["finalize_new_arbitrar_for_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "candidate",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_receipt",
                writable: true,
                signer: false
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: true,
                signer: false
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "02b43867e900d5b6",
        {
            name: "finalize_new_threshold",
            schema: Schemas["finalize_new_threshold"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "existing_threshold",
                writable: true,
                signer: false
            },
{
                name: "new_threshold",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "08e9e39867874100",
        {
            name: "finalize_new_trustee",
            schema: Schemas["finalize_new_trustee"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "candidate",
                writable: false,
                signer: false
            },
{
                name: "trustee_receipt",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "trustee_registry",
                writable: true,
                signer: false
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "c8d63a3f22658353",
        {
            name: "finalize_new_trustee_for_remove_proposal",
            schema: Schemas["finalize_new_trustee_for_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "candidate",
                writable: false,
                signer: false
            },
{
                name: "trustee_receipt",
                writable: true,
                signer: false
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "trustee_registry",
                writable: true,
                signer: false
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "6b043aa17cf17161",
        {
            name: "finalize_old_arbitrar",
            schema: Schemas["finalize_old_arbitrar"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_receipt",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: true,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: true,
                signer: false
            },
{
                name: "resignation",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "75f7ed093f363a75",
        {
            name: "finalize_old_trsutee",
            schema: Schemas["finalize_old_trsutee"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: true,
                signer: false
            },
{
                name: "trustee_registry",
                writable: true,
                signer: false
            },
{
                name: "resignation",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "adcba3c7a73afc73",
        {
            name: "finalize_remove_proposal",
            schema: Schemas["finalize_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "remove_proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "1f0682b0b9a0f1f4",
        {
            name: "finalize_rtc_proposal",
            schema: Schemas["finalize_rtc_proposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "6b34c1023702e3b9",
        {
            name: "finalize_trustee_candidate_profile_for_challenge_proposal",
            schema: Schemas["finalize_trustee_candidate_profile_for_challenge_proposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "trustee_offender_receipt",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "f7e350aff0531f68",
        {
            name: "initialize_lease_proposal",
            schema: Schemas["initialize_lease_proposal"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "lessee",
                writable: false,
                signer: false
            },
{
                name: "neutral",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "trustee_registry",
                writable: false,
                signer: false
            },
{
                name: "property",
                writable: false,
                signer: false
            },
{
                name: "lease_proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "ca8d941c48387b4f",
        {
            name: "lease_accept",
            schema: Schemas["lease_accept"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "lease",
                writable: true,
                signer: false
            },
{
                name: "neutral",
                writable: true,
                signer: false
            },
{
                name: "lease_ata",
                writable: true,
                signer: false
            },
{
                name: "signer_ata",
                writable: true,
                signer: false
            },
{
                name: "property",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: true,
                signer: false
            },
{
                name: "treasury_pda",
                writable: false,
                signer: false
            },
{
                name: "treasury_ata",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "dc8bb7a984e6c081",
        {
            name: "outcome_of_proposal",
            schema: Schemas["outcome_of_proposal"],
            accounts: [
                {
                name: "authority",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "459b70b7b2ea5e64",
        {
            name: "pay_rent",
            schema: Schemas["pay_rent"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "signer_ata",
                writable: true,
                signer: false
            },
{
                name: "treasury",
                writable: true,
                signer: false
            },
{
                name: "treasury_ata",
                writable: true,
                signer: false
            },
{
                name: "lease",
                writable: true,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "43a8f211c23c3947",
        {
            name: "propose_new_threshold",
            schema: Schemas["propose_new_threshold"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "new_threshold",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "95c2e727f38c4ef4",
        {
            name: "remove_arbitrar_guilt_authority_proposal",
            schema: Schemas["remove_arbitrar_guilt_authority_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "ata",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "fc1746c2cde1445f",
        {
            name: "remove_old_arbitrar_remove_proposal",
            schema: Schemas["remove_old_arbitrar_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_receipt",
                writable: true,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: true,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: true,
                signer: false
            },
{
                name: "resignation",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "5a4cfe775e47daa1",
        {
            name: "remove_old_trustee_remove_proposal",
            schema: Schemas["remove_old_trustee_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: true,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: true,
                signer: false
            },
{
                name: "trustee_registry",
                writable: true,
                signer: false
            },
{
                name: "resignation",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "eb3dddff67c72d4a",
        {
            name: "remove_trustee_guilt_authority_proposal",
            schema: Schemas["remove_trustee_guilt_authority_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "ata",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "6dfc66d57788aa45",
        {
            name: "revenue_change_proposal",
            schema: Schemas["revenue_change_proposal"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "trustee_registry",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "61a6602565ae56a2",
        {
            name: "revenue_proposal_arbitrar_vote",
            schema: Schemas["revenue_proposal_arbitrar_vote"],
            accounts: [
                {
                name: "arbitrar",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_voter",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "9b18cfaa46f3c97c",
        {
            name: "revenue_proposal_submit_snapshot",
            schema: Schemas["revenue_proposal_submit_snapshot"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "96eab1c03f58c16d",
        {
            name: "revenue_proposal_voting",
            schema: Schemas["revenue_proposal_voting"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "voter_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "a23be1b2ce43c601",
        {
            name: "sell_proposal_arbitrar_vote",
            schema: Schemas["sell_proposal_arbitrar_vote"],
            accounts: [
                {
                name: "arbitrar",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_receipt",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "seller",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_voter",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "1f54e18d25959644",
        {
            name: "sell_proposal_finalize",
            schema: Schemas["sell_proposal_finalize"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "88eba18f9450835e",
        {
            name: "state_creation_proposal",
            schema: Schemas["state_creation_proposal"],
            accounts: [
                {
                name: "country",
                writable: false,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "country_authority",
                writable: false,
                signer: false
            },
{
                name: "state_proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "3c2c0a91d3049544",
        {
            name: "state_proposal_approval",
            schema: Schemas["state_proposal_approval"],
            accounts: [
                {
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "country",
                writable: false,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "country_authority",
                writable: false,
                signer: false
            },
{
                name: "state_creation_recepit",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "a10ce5935e1fc455",
        {
            name: "state_proposal_execute",
            schema: Schemas["state_proposal_execute"],
            accounts: [
                {
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "country",
                writable: false,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "state",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "ecb6436a20a1a451",
        {
            name: "submit_arbitrar_candidate",
            schema: Schemas["submit_arbitrar_candidate"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "new_registration",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "0c972df9b22f3ab8",
        {
            name: "submit_candidate_for_arbitrar_authority_for_remove_proposal",
            schema: Schemas["submit_candidate_for_arbitrar_authority_for_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "removal_proposal",
                writable: false,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "new_registration",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "04230dc9d4f6c8e1",
        {
            name: "submit_candidate_for_trustee_authority_for_remove_proposal",
            schema: Schemas["submit_candidate_for_trustee_authority_for_remove_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "removal_proposal",
                writable: false,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "new_registration",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "00ddade3d1ac9911",
        {
            name: "submit_snaphot_for_voting_on_challenge_proposal",
            schema: Schemas["submit_snaphot_for_voting_on_challenge_proposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "79fe461c2e9a893d",
        {
            name: "submit_snapshot_for_arbitrar_election",
            schema: Schemas["submit_snapshot_for_arbitrar_election"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "a3dbcf90aa2e4b88",
        {
            name: "submit_snapshot_for_authority",
            schema: Schemas["submit_snapshot_for_authority"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "d64e25f2305ac4b1",
        {
            name: "submit_snapshot_for_removal_proposal",
            schema: Schemas["submit_snapshot_for_removal_proposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "13aa2f72a7473f56",
        {
            name: "submit_snapshot_for_sell_proposal",
            schema: Schemas["submit_snapshot_for_sell_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "fb518ed0b863aeec",
        {
            name: "submit_trustee_candidate",
            schema: Schemas["submit_trustee_candidate"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "candidate_profile",
                writable: true,
                signer: false
            },
{
                name: "new_registration",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "e7c18d8088c55356",
        {
            name: "terminate_lease",
            schema: Schemas["terminate_lease"],
            accounts: [
                {
                name: "neutral",
                writable: true,
                signer: true
            },
{
                name: "lesse",
                writable: false,
                signer: false
            },
{
                name: "lessee_ata",
                writable: true,
                signer: false
            },
{
                name: "lease",
                writable: true,
                signer: false
            },
{
                name: "lease_ata",
                writable: true,
                signer: false
            },
{
                name: "property",
                writable: true,
                signer: false
            },
{
                name: "reinvestment_pda",
                writable: true,
                signer: false
            },
{
                name: "reinvestment_ata",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "527b012e291292a3",
        {
            name: "token_transfer_arbitrar_approval_reinvest_proposal",
            schema: Schemas["token_transfer_arbitrar_approval_reinvest_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_receipt",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_voter",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "4492fd84bf819f7f",
        {
            name: "token_transfer_arbitrar_approval_safety_proposal",
            schema: Schemas["token_transfer_arbitrar_approval_safety_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "arbitrar_receipt",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_registry",
                writable: false,
                signer: false
            },
{
                name: "arbitrar_voter",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "9a2d6c26ad0f44b8",
        {
            name: "token_transfer_create_use_reinvest_proposal",
            schema: Schemas["token_transfer_create_use_reinvest_proposal"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "trustee_registry",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "receipent_wallet",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "82d4376e3f7d8106",
        {
            name: "token_transfer_create_use_safety_proposal",
            schema: Schemas["token_transfer_create_use_safety_proposal"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "trustee_registry",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "receipent_wallet",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "67e23cd2595da151",
        {
            name: "token_transfer_delete_reinvest_proposal",
            schema: Schemas["token_transfer_delete_reinvest_proposal"],
            accounts: [
                {
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "7e90fcbaad4edbf2",
        {
            name: "token_transfer_delete_safety_proposal",
            schema: Schemas["token_transfer_delete_safety_proposal"],
            accounts: [
                {
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "dbd4e18dad6ba490",
        {
            name: "token_transfer_execute_reinvest_proposal",
            schema: Schemas["token_transfer_execute_reinvest_proposal"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "trustee_registry",
                writable: false,
                signer: false
            },
{
                name: "reinvestment_treasury",
                writable: false,
                signer: false
            },
{
                name: "reinvestment_ata",
                writable: true,
                signer: false
            },
{
                name: "recepient_wallet",
                writable: false,
                signer: false
            },
{
                name: "recepient_ata",
                writable: true,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "96317e36b44c0966",
        {
            name: "token_transfer_execute_safety_proposal",
            schema: Schemas["token_transfer_execute_safety_proposal"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "trustee_registry",
                writable: false,
                signer: false
            },
{
                name: "safety_treasury",
                writable: true,
                signer: false
            },
{
                name: "safety_ata",
                writable: true,
                signer: false
            },
{
                name: "recepient_wallet",
                writable: true,
                signer: false
            },
{
                name: "recepient_ata",
                writable: true,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "da4d2e9468932c76",
        {
            name: "token_transfer_finalize_reinvest_proposal",
            schema: Schemas["token_transfer_finalize_reinvest_proposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "738c46ceedfd5d06",
        {
            name: "token_transfer_finalize_safety_proposal",
            schema: Schemas["token_transfer_finalize_safety_proposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "9ab58c140cc07cb4",
        {
            name: "token_transfer_submit_snapshot_reinvest_proposal",
            schema: Schemas["token_transfer_submit_snapshot_reinvest_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "166e966fef2c0c38",
        {
            name: "token_transfer_submit_snapshot_safety_proposal",
            schema: Schemas["token_transfer_submit_snapshot_safety_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            }
            ],
        },
    ],

    [
        "4d4ccdc04c31ecf4",
        {
            name: "token_transfer_vote_for_reinvest_proposal",
            schema: Schemas["token_transfer_vote_for_reinvest_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "voter_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "2e36292527843893",
        {
            name: "token_transfer_vote_for_submit_proposal",
            schema: Schemas["token_transfer_vote_for_submit_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "voter_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "dc9e19ddfd286641",
        {
            name: "treasury_distribution",
            schema: Schemas["treasury_distribution"],
            accounts: [
                {
                name: "payer",
                writable: true,
                signer: true
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "thershold",
                writable: false,
                signer: false
            },
{
                name: "treasury_pda",
                writable: true,
                signer: false
            },
{
                name: "treasury_ata",
                writable: true,
                signer: false
            },
{
                name: "dividend_pda",
                writable: true,
                signer: false
            },
{
                name: "dividend_ata",
                writable: true,
                signer: false
            },
{
                name: "reinvestment_pda",
                writable: true,
                signer: false
            },
{
                name: "reinvestment_ata",
                writable: true,
                signer: false
            },
{
                name: "safety_pda",
                writable: true,
                signer: false
            },
{
                name: "safety_ata",
                writable: true,
                signer: false
            },
{
                name: "trustee_pda",
                writable: true,
                signer: false
            },
{
                name: "trustee_ata",
                writable: true,
                signer: false
            },
{
                name: "arbitrar_pda",
                writable: true,
                signer: false
            },
{
                name: "arbitrar_ata",
                writable: true,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "governance_mint",
                writable: false,
                signer: false
            },
{
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "token_program",
                writable: false,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "cf58170d761c3bdd",
        {
            name: "trustee_approve_arbitrar_election",
            schema: Schemas["trustee_approve_arbitrar_election"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "trustee_registry",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "arbitrar_voter_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "1830efe2aa51eb76",
        {
            name: "trustee_resign",
            schema: Schemas["trustee_resign"],
            accounts: [
                {
                name: "trustee",
                writable: true,
                signer: true
            },
{
                name: "trustee_receipt",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "resignation",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "cc9d320bff9114fc",
        {
            name: "trustee_salary_claim",
            schema: Schemas["trustee_salary_claim"],
            accounts: [
                {
                name: "associated_token_program",
                writable: false,
                signer: false
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "token_program",
                writable: false,
                signer: false
            },
{
                name: "trustee",
                writable: false,
                signer: false
            },
{
                name: "trustee_ata",
                writable: true,
                signer: false
            },
{
                name: "trustee_receipt",
                writable: true,
                signer: false
            },
{
                name: "trustee_registry",
                writable: true,
                signer: false
            },
{
                name: "trustee_registry_ata",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "8a2cbf461ef7eaea",
        {
            name: "vote_for_arbitrar_candiate",
            schema: Schemas["vote_for_arbitrar_candiate"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "authority_vote_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "9179346dd8a4703b",
        {
            name: "vote_for_challenge_proposal",
            schema: Schemas["vote_for_challenge_proposal"],
            accounts: [
                {
                name: "signer",
                writable: false,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "5b050eadc086ae3f",
        {
            name: "vote_for_new_arbitrar_authority_for_removal_proposal",
            schema: Schemas["vote_for_new_arbitrar_authority_for_removal_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "authority_vote_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "78544cb9d7589426",
        {
            name: "vote_for_new_threshold",
            schema: Schemas["vote_for_new_threshold"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "mint",
                writable: false,
                signer: false
            },
{
                name: "new_threshold",
                writable: true,
                signer: false
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "new_threshold_vote_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "48c1b37251eeacad",
        {
            name: "vote_for_new_trustee_authority_for_removal_proposal",
            schema: Schemas["vote_for_new_trustee_authority_for_removal_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "removal_proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "authority_vote_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "822d9dfd38aadb43",
        {
            name: "vote_for_trustee_candiate",
            schema: Schemas["vote_for_trustee_candiate"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "proposal",
                writable: false,
                signer: false
            },
{
                name: "authority_candidate",
                writable: true,
                signer: false
            },
{
                name: "authority_vote_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],

    [
        "aa4bd9280d765dbc",
        {
            name: "voting_for_sell_proposal",
            schema: Schemas["voting_for_sell_proposal"],
            accounts: [
                {
                name: "signer",
                writable: true,
                signer: true
            },
{
                name: "proposal",
                writable: true,
                signer: false
            },
{
                name: "property_system",
                writable: false,
                signer: false
            },
{
                name: "token_holder_voter_receipt",
                writable: true,
                signer: false
            },
{
                name: "system_program",
                writable: false,
                signer: false
            }
            ],
        },
    ],
]);