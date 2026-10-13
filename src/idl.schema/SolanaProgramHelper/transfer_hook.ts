/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/transfer_hook.json`.
 */
export type TransferHook = {
  "address": "AHecjWfQz5pmfdcYNLkP34S3FLeCz1SNNkS6xxCC8qSv",
  "metadata": {
    "name": "transferHook",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "claimedPending",
      "discriminator": [
        243,
        84,
        166,
        203,
        33,
        245,
        3,
        154
      ],
      "accounts": [
        {
          "name": "dividendPda",
          "docs": [
            "CHECK : check dividendPda"
          ],
          "writable": true,
          "signer": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  105,
                  118,
                  105,
                  100,
                  101,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "governanceMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                156,
                192,
                121,
                3,
                3,
                127,
                101,
                116,
                102,
                18,
                177,
                1,
                194,
                219,
                84,
                87,
                179,
                186,
                128,
                111,
                101,
                35,
                248,
                98,
                215,
                197,
                205,
                116,
                10,
                15,
                0,
                184
              ]
            }
          }
        },
        {
          "name": "user",
          "signer": true
        },
        {
          "name": "signerGovernanceMintAta",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "governanceMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "rewardPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  119,
                  97,
                  114,
                  100,
                  112,
                  100,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "governanceMint"
              },
              {
                "kind": "account",
                "path": "signerGovernanceMintAta"
              }
            ]
          }
        },
        {
          "name": "governanceMint"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": []
    },
    {
      "name": "initailize",
      "discriminator": [
        159,
        242,
        247,
        125,
        50,
        225,
        40,
        98
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint"
        },
        {
          "name": "tokenAccount",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "payer"
              },
              {
                "kind": "account",
                "path": "tokenProgram"
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "rewardPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  119,
                  97,
                  114,
                  100,
                  112,
                  100,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              },
              {
                "kind": "account",
                "path": "tokenAccount"
              }
            ]
          }
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeExtraAccountMetaList",
      "discriminator": [
        92,
        197,
        174,
        197,
        41,
        124,
        19,
        3
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "extraAccountMetaList",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  116,
                  114,
                  97,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  45,
                  109,
                  101,
                  116,
                  97,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "customProgram"
        },
        {
          "name": "mint"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "transferHook",
      "discriminator": [
        220,
        57,
        220,
        152,
        126,
        125,
        97,
        168
      ],
      "accounts": [
        {
          "name": "sourceToken"
        },
        {
          "name": "mint"
        },
        {
          "name": "destinationToken"
        },
        {
          "name": "owner"
        },
        {
          "name": "extraAccountMetaList",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  120,
                  116,
                  114,
                  97,
                  45,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116,
                  45,
                  109,
                  101,
                  116,
                  97,
                  115
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "customProgram"
        },
        {
          "name": "dividendAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  105,
                  118,
                  105,
                  100,
                  101,
                  110,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "account",
              "path": "customProgram"
            }
          }
        },
        {
          "name": "sourceRewardPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  119,
                  97,
                  114,
                  100,
                  112,
                  100,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              },
              {
                "kind": "account",
                "path": "sourceToken"
              }
            ]
          }
        },
        {
          "name": "destinationRewardPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  119,
                  97,
                  114,
                  100,
                  112,
                  100,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              },
              {
                "kind": "account",
                "path": "destinationToken"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "rewardPda",
      "discriminator": [
        253,
        205,
        58,
        120,
        42,
        141,
        253,
        111
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "extraAccountMetaListSizeError",
      "msg": "Failed to calculate ExtraAccountMetaList size"
    },
    {
      "code": 6001,
      "name": "extraAccountMetaListInitError",
      "msg": "Failed to initialize ExtraAccountMetaList"
    },
    {
      "code": 6002,
      "name": "instructionUnpackError",
      "msg": "Failed to unpack transfer hook instruction"
    },
    {
      "code": 6003,
      "name": "overflow",
      "msg": "math overflow"
    },
    {
      "code": 6004,
      "name": "underflow",
      "msg": "math underflow"
    }
  ],
  "types": [
    {
      "name": "rewardPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardDebt",
            "type": "u128"
          },
          {
            "name": "pendingReward",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
