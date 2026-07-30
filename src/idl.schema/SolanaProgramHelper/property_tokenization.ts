/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/property_tokenization.json`.
 */
export type PropertyTokenization = {
  "address": "BYtpqEouT7FFDUFjFeE2ecSDwf1VHNNHUkc2URswVZ4B",
  "metadata": {
    "name": "propertyTokenization",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addArbitrarForRemoval",
      "discriminator": [
        200,
        107,
        96,
        130,
        194,
        215,
        141,
        170
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrar"
        },
        {
          "name": "arbitrarReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "challengeProposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "arbitrarOffenderReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  102,
                  102,
                  101,
                  110,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "challengeProposal"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "resignation",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "challengeProposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addArbitrarOffender",
      "discriminator": [
        199,
        210,
        188,
        36,
        229,
        234,
        15,
        94
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarOffender"
        },
        {
          "name": "arbitrarReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "arbitrarOffender"
              }
            ]
          }
        },
        {
          "name": "offenderReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  102,
                  102,
                  101,
                  110,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "arbitrarOffender"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addArbitrator",
      "discriminator": [
        114,
        61,
        26,
        68,
        135,
        87,
        43,
        248
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystemAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "systemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              }
            ]
          }
        },
        {
          "name": "arbitratorRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              }
            ]
          }
        },
        {
          "name": "newArbitrator",
          "writable": true,
          "signer": true
        },
        {
          "name": "newArbitratorRecepit",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              },
              {
                "kind": "account",
                "path": "newArbitrator"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "systemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addCountryAuthority",
      "discriminator": [
        199,
        120,
        38,
        136,
        200,
        42,
        67,
        86
      ],
      "accounts": [
        {
          "name": "authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  65,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  70,
                  111,
                  114,
                  65,
                  112,
                  112,
                  114,
                  111,
                  118,
                  105,
                  110,
                  103,
                  67,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "countryAuthority"
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "countryName"
              }
            ]
          }
        },
        {
          "name": "country",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "countryName"
              }
            ]
          }
        },
        {
          "name": "countryReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "country"
              },
              {
                "kind": "account",
                "path": "countryAuthority"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "addNewArbitrar",
      "discriminator": [
        133,
        121,
        17,
        35,
        36,
        15,
        127,
        32
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey"
              }
            ]
          }
        },
        {
          "name": "counter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "rankingAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "candidateKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "ranking",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addNewAuthorityForArbitrarRemoveProposal",
      "discriminator": [
        77,
        209,
        139,
        98,
        8,
        114,
        223,
        214
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "removalProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalKey"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey"
              }
            ]
          }
        },
        {
          "name": "counter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "removalProposal"
              }
            ]
          }
        },
        {
          "name": "rankingAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalKey",
          "type": "pubkey"
        },
        {
          "name": "candidateKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "ranking",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addNewAuthorityForTrusteeRemoveProposal",
      "discriminator": [
        136,
        201,
        97,
        67,
        42,
        34,
        127,
        3
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "removalProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalKey"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey"
              }
            ]
          }
        },
        {
          "name": "counter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "removalProposal"
              }
            ]
          }
        },
        {
          "name": "rankingAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalKey",
          "type": "pubkey"
        },
        {
          "name": "candidateKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "ranking",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addNewTrustee",
      "discriminator": [
        179,
        66,
        43,
        243,
        172,
        249,
        150,
        39
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey"
              }
            ]
          }
        },
        {
          "name": "counter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  95,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "rankingAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "candidateKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "ranking",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addStateAuhtority",
      "discriminator": [
        37,
        212,
        44,
        34,
        135,
        225,
        225,
        14
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "stateAuthority"
        },
        {
          "name": "country",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "countryName"
              }
            ]
          }
        },
        {
          "name": "countryAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "country"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "stateName"
              },
              {
                "kind": "account",
                "path": "country"
              }
            ]
          }
        },
        {
          "name": "state",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "stateName"
              },
              {
                "kind": "account",
                "path": "country"
              }
            ]
          }
        },
        {
          "name": "stateAuthorityReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "country"
              },
              {
                "kind": "account",
                "path": "stateAuthority"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "stateName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "addTrustee",
      "discriminator": [
        157,
        160,
        215,
        252,
        120,
        158,
        153,
        191
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystemAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "systemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              }
            ]
          }
        },
        {
          "name": "newTrustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "newTrusteeRecepit",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              },
              {
                "kind": "account",
                "path": "newTrustee"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "systemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addTrusteeForRemoval",
      "discriminator": [
        55,
        119,
        213,
        43,
        214,
        68,
        79,
        25
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "trustee"
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "challengeProposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "trusteeOffenderReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  102,
                  102,
                  101,
                  110,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "challengeProposal"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "resignation",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "removeProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "challengeProposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addTrusteeOffender",
      "discriminator": [
        64,
        1,
        229,
        237,
        211,
        140,
        30,
        137
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeOffender"
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trusteeOffender"
              }
            ]
          }
        },
        {
          "name": "offenderReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  102,
                  102,
                  101,
                  110,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "trusteeOffender"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "adjustArbitrarRanks",
      "discriminator": [
        18,
        93,
        196,
        100,
        38,
        190,
        206,
        61
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate1",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey1"
              }
            ]
          }
        },
        {
          "name": "rankingAcc1",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking1"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate2",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey2"
              }
            ]
          }
        },
        {
          "name": "rankingAcc2",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking2"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystem",
          "type": "pubkey"
        },
        {
          "name": "candidateKey1",
          "type": "pubkey"
        },
        {
          "name": "candidateKey2",
          "type": "pubkey"
        },
        {
          "name": "ranking1",
          "type": "u8"
        },
        {
          "name": "ranking2",
          "type": "u8"
        }
      ]
    },
    {
      "name": "adjustRankingOfNewAuthorityForRemoveProposal",
      "discriminator": [
        236,
        39,
        143,
        72,
        255,
        187,
        219,
        110
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "removalProposal",
          "writable": true
        },
        {
          "name": "authorityCandidate1",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey1"
              }
            ]
          }
        },
        {
          "name": "rankingAcc1",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking1"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate2",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey2"
              }
            ]
          }
        },
        {
          "name": "rankingAcc2",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking2"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystem",
          "type": "pubkey"
        },
        {
          "name": "candidateKey1",
          "type": "pubkey"
        },
        {
          "name": "candidateKey2",
          "type": "pubkey"
        },
        {
          "name": "ranking1",
          "type": "u8"
        },
        {
          "name": "ranking2",
          "type": "u8"
        }
      ]
    },
    {
      "name": "adjustRanks",
      "discriminator": [
        165,
        58,
        79,
        217,
        98,
        25,
        152,
        104
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate1",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey1"
              }
            ]
          }
        },
        {
          "name": "rankingAcc1",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking1"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate2",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey2"
              }
            ]
          }
        },
        {
          "name": "rankingAcc2",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking2"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystem",
          "type": "pubkey"
        },
        {
          "name": "candidateKey1",
          "type": "pubkey"
        },
        {
          "name": "candidateKey2",
          "type": "pubkey"
        },
        {
          "name": "ranking1",
          "type": "u8"
        },
        {
          "name": "ranking2",
          "type": "u8"
        }
      ]
    },
    {
      "name": "approveCountry",
      "discriminator": [
        228,
        180,
        250,
        201,
        137,
        223,
        22,
        146
      ],
      "accounts": [
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "countryName"
              }
            ]
          }
        },
        {
          "name": "authority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  65,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  70,
                  111,
                  114,
                  65,
                  112,
                  112,
                  114,
                  111,
                  118,
                  105,
                  110,
                  103,
                  67,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "authorityRecipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "approvePropertyProposal",
      "discriminator": [
        219,
        147,
        136,
        33,
        200,
        126,
        116,
        59
      ],
      "accounts": [
        {
          "name": "state",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "stateName"
              },
              {
                "kind": "arg",
                "path": "countryKey"
              }
            ]
          }
        },
        {
          "name": "propertyProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "propertyId"
              },
              {
                "kind": "account",
                "path": "state"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "stateAuthorityReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "countryKey"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "propertyApprovalReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  97,
                  112,
                  112,
                  114,
                  111,
                  118,
                  97,
                  108,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertyProposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryKey",
          "type": "pubkey"
        },
        {
          "name": "stateName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "propertyId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "arbitrarApprovalForLease",
      "discriminator": [
        147,
        11,
        73,
        143,
        165,
        189,
        211,
        134
      ],
      "accounts": [
        {
          "name": "arbitrar",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "arbitrarVoter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  65,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  76,
                  101,
                  97,
                  115,
                  101,
                  80,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108,
                  82,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              },
              {
                "kind": "account",
                "path": "leaseProposal"
              }
            ]
          }
        },
        {
          "name": "leaseProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  101,
                  97,
                  115,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "property"
              },
              {
                "kind": "arg",
                "path": "leaseId"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "leaseId",
          "type": "u64"
        },
        {
          "name": "property",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "arbitrarApproveTrusteeElection",
      "discriminator": [
        118,
        112,
        108,
        163,
        151,
        31,
        164,
        214
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "arbitrarVoterReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  101,
                  108,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "arbitrarResign",
      "discriminator": [
        245,
        141,
        179,
        25,
        12,
        103,
        67,
        147
      ],
      "accounts": [
        {
          "name": "arbitrar",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "resignation",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  114,
                  101,
                  115,
                  105,
                  103,
                  110,
                  97,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "arbitrarSalaryClaim",
      "discriminator": [
        148,
        115,
        252,
        109,
        115,
        74,
        168,
        218
      ],
      "accounts": [
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrar"
        },
        {
          "name": "arbitirarReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "arbitrarAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "arbitrar"
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
          "name": "arbitrarRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistryAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "arbitrarRegistry"
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
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "mint"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "askSnapshotForChallengeProposal",
      "discriminator": [
        252,
        204,
        128,
        11,
        9,
        191,
        67,
        2
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "challengeProposal"
        }
      ],
      "args": []
    },
    {
      "name": "askSnapshotForRemoveProposal",
      "discriminator": [
        60,
        230,
        249,
        171,
        228,
        251,
        204,
        67
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposedRemoveProposal"
        }
      ],
      "args": []
    },
    {
      "name": "buyProposalArbitrarVote",
      "discriminator": [
        72,
        156,
        113,
        190,
        108,
        152,
        247,
        248
      ],
      "accounts": [
        {
          "name": "arbitrar",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  85,
                  89,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "buyer",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "buyerPropertySystemId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              }
            ]
          }
        },
        {
          "name": "arbitrarVoter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  65,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  66,
                  117,
                  121,
                  80,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108,
                  82,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "buyerPropertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyProposalFinalize",
      "discriminator": [
        75,
        133,
        185,
        94,
        38,
        5,
        28,
        126
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  85,
                  89,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemAccount"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemAccount",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "buyProposalVoting",
      "discriminator": [
        218,
        81,
        193,
        111,
        112,
        159,
        147,
        172
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  85,
                  89,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "voterReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  111,
                  116,
                  101,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        },
        {
          "name": "yesOrNo",
          "type": "bool"
        }
      ]
    },
    {
      "name": "buySubmitSnapshot",
      "discriminator": [
        67,
        84,
        136,
        166,
        158,
        146,
        209,
        248
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  85,
                  89,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemAccount"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "propertySystemAccount",
          "type": "pubkey"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "merkleRoot",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "closingDaysGap",
          "type": "u8"
        },
        {
          "name": "paymentDeadlineDays",
          "type": "u8"
        },
        {
          "name": "voteThreshold",
          "type": "u64"
        }
      ]
    },
    {
      "name": "challengeAgainstNewArbitrar",
      "discriminator": [
        150,
        73,
        193,
        180,
        166,
        158,
        250,
        189
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "challengeFrom",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "challengeFromKey"
              }
            ]
          }
        },
        {
          "name": "challengeTo",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "challengeToKey"
              }
            ]
          }
        },
        {
          "name": "rankingAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "challengeFromKey",
          "type": "pubkey"
        },
        {
          "name": "challengeToKey",
          "type": "pubkey"
        },
        {
          "name": "ranking",
          "type": "u8"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "challengeAgainstNewTrustee",
      "discriminator": [
        20,
        189,
        121,
        234,
        68,
        100,
        66,
        162
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "challengeFrom",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "challengeFromKey"
              }
            ]
          }
        },
        {
          "name": "challengeTo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "challengeToKey"
              }
            ]
          }
        },
        {
          "name": "rankingAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "challengeFromKey",
          "type": "pubkey"
        },
        {
          "name": "challengeToKey",
          "type": "pubkey"
        },
        {
          "name": "ranking",
          "type": "u8"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "challengeAuthority",
      "discriminator": [
        26,
        132,
        34,
        241,
        166,
        111,
        214,
        3
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "ata",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "signer"
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
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "mint"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "chargesHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "evidenceHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "challengeNewAuthorityOfRemovalPrposal",
      "discriminator": [
        94,
        91,
        28,
        188,
        200,
        131,
        221,
        114
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "removalProposal",
          "writable": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "challengeFrom",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "challengeFromKey"
              }
            ]
          }
        },
        {
          "name": "challengeTo",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "challengeToKey"
              }
            ]
          }
        },
        {
          "name": "rankingAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  97,
                  110,
                  107,
                  105,
                  110,
                  103,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "ranking"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "challengeFromKey",
          "type": "pubkey"
        },
        {
          "name": "challengeToKey",
          "type": "pubkey"
        },
        {
          "name": "ranking",
          "type": "u8"
        }
      ]
    },
    {
      "name": "challengeNewThreshold",
      "discriminator": [
        114,
        20,
        50,
        108,
        135,
        244,
        209,
        85
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  116,
                  95,
                  99,
                  104,
                  97,
                  110,
                  103,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "existingNewThreshold",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  101,
                  95,
                  116,
                  104,
                  114,
                  101,
                  115,
                  104,
                  111,
                  108,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "existingNewThresholdSigner"
              }
            ]
          }
        },
        {
          "name": "challengeNewThreshold",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  101,
                  95,
                  116,
                  104,
                  114,
                  101,
                  115,
                  104,
                  111,
                  108,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "challengeNewThresholdSigner"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "existingNewThresholdSigner",
          "type": "pubkey"
        },
        {
          "name": "challengeNewThresholdSigner",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "changeToTheNewThreshold",
      "discriminator": [
        70,
        62,
        81,
        245,
        75,
        108,
        84,
        140
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  116,
                  95,
                  99,
                  104,
                  97,
                  110,
                  103,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "newThreshold",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  101,
                  95,
                  116,
                  104,
                  114,
                  101,
                  115,
                  104,
                  111,
                  108,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "newThresholdSigner"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "newThresholdSigner",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "claimDividendToken",
      "discriminator": [
        166,
        137,
        201,
        206,
        148,
        211,
        206,
        233
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "signerGovernanceMintAta",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "signer"
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
          "name": "signerAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "signer"
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
          "name": "dividendPda",
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
                "path": "governanceMint"
              }
            ]
          }
        },
        {
          "name": "dividendAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "dividendPda"
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
                "path": "governanceMint"
              },
              {
                "kind": "account",
                "path": "signerGovernanceMintAta"
              }
            ],
            "program": {
              "kind": "account",
              "path": "transferHookProgram"
            }
          }
        },
        {
          "name": "transferHookProgram",
          "address": "AHecjWfQz5pmfdcYNLkP34S3FLeCz1SNNkS6xxCC8qSv"
        },
        {
          "name": "mint"
        },
        {
          "name": "governanceMint"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "createApproveCountryAuthority",
      "discriminator": [
        154,
        159,
        123,
        184,
        92,
        224,
        61,
        250
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "authority",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  65,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  70,
                  111,
                  114,
                  65,
                  112,
                  112,
                  114,
                  111,
                  118,
                  105,
                  110,
                  103,
                  67,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "threshold",
          "type": "u8"
        },
        {
          "name": "authority",
          "type": {
            "vec": "pubkey"
          }
        }
      ]
    },
    {
      "name": "createBuyProposal",
      "discriminator": [
        2,
        115,
        11,
        100,
        47,
        22,
        13,
        175
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "buyer",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "buyerPropertySystemId"
              }
            ]
          }
        },
        {
          "name": "buyerReinvestmentPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              }
            ]
          }
        },
        {
          "name": "sellerProposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  83,
                  69,
                  76,
                  76,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "arg",
                "path": "sellerPropertySystemAccount"
              },
              {
                "kind": "arg",
                "path": "sellerProposalId"
              }
            ]
          }
        },
        {
          "name": "propertyAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "propertyId"
              },
              {
                "kind": "arg",
                "path": "statePubkey"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  85,
                  89,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "buyerPropertySystemId",
          "type": "u64"
        },
        {
          "name": "sellerPropertySystemAccount",
          "type": "pubkey"
        },
        {
          "name": "sellerProposalId",
          "type": "u64"
        },
        {
          "name": "statePubkey",
          "type": "pubkey"
        },
        {
          "name": "propertyId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createCandidateProfile",
      "discriminator": [
        151,
        122,
        144,
        52,
        42,
        4,
        7,
        219
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "candidate"
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "candidate"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "metadataHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "createCountryProposal",
      "discriminator": [
        7,
        13,
        170,
        141,
        43,
        101,
        206,
        30
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "countryAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "countryName"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "countryId",
          "type": "u16"
        },
        {
          "name": "totalAuthority",
          "type": "u8"
        },
        {
          "name": "countryPdaThreshold",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createPropertyProposal",
      "discriminator": [
        142,
        223,
        68,
        214,
        220,
        144,
        237,
        29
      ],
      "accounts": [
        {
          "name": "propertySystem",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "state",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "stateName"
              },
              {
                "kind": "arg",
                "path": "countryKey"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "stateAuthorityReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "countryKey"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "propertyId"
              },
              {
                "kind": "account",
                "path": "state"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryKey",
          "type": "pubkey"
        },
        {
          "name": "stateName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "propertyId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "legalDocHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "createPropertySystem",
      "discriminator": [
        123,
        66,
        235,
        111,
        231,
        101,
        114,
        189
      ],
      "accounts": [
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystemAcc",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "systemId"
              }
            ]
          }
        },
        {
          "name": "threshold",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  104,
                  114,
                  101,
                  115,
                  104,
                  111,
                  108,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              }
            ]
          }
        },
        {
          "name": "reinvestmentPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              }
            ]
          }
        },
        {
          "name": "safetyPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  97,
                  102,
                  101,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              }
            ]
          }
        },
        {
          "name": "dividendPda",
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
                "path": "governanceMint"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              }
            ]
          }
        },
        {
          "name": "arbitratorRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              }
            ]
          }
        },
        {
          "name": "governanceMint",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystemAcc"
              }
            ]
          }
        },
        {
          "name": "creatorAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "creator"
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
          "name": "tokenProgram"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "customProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "transferHookProgram",
          "address": "AHecjWfQz5pmfdcYNLkP34S3FLeCz1SNNkS6xxCC8qSv"
        },
        {
          "name": "extraAccountMetaList",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "systemId",
          "type": "u64"
        },
        {
          "name": "decimals",
          "type": "u8"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        },
        {
          "name": "numberOfTokens",
          "type": "u64"
        },
        {
          "name": "safetyThreshold",
          "type": "u8"
        },
        {
          "name": "trusteeSalaryThreshold",
          "type": "u8"
        },
        {
          "name": "arbitratorSalaryThreshold",
          "type": "u8"
        },
        {
          "name": "dividendThreshold",
          "type": "u8"
        },
        {
          "name": "reinvestmentThreshold",
          "type": "u8"
        },
        {
          "name": "totalTrustees",
          "type": "u8"
        },
        {
          "name": "trusteeVoteThreshold",
          "type": "u8"
        },
        {
          "name": "totalArbitrar",
          "type": "u8"
        },
        {
          "name": "arbitrarVoteThreshold",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createSellProposal",
      "discriminator": [
        244,
        114,
        210,
        39,
        237,
        213,
        42,
        211
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  83,
                  69,
                  76,
                  76,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "seller",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "sellerTreasury",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              }
            ]
          }
        },
        {
          "name": "propertyAccount",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "propertyId"
              },
              {
                "kind": "arg",
                "path": "statePubkey"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertyId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "statePubkey",
          "type": "pubkey"
        },
        {
          "name": "salePrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteBuyProposal",
      "discriminator": [
        190,
        121,
        237,
        44,
        195,
        95,
        203,
        64
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  85,
                  89,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "deleteSell",
      "discriminator": [
        107,
        28,
        228,
        47,
        183,
        254,
        124,
        209
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  83,
                  69,
                  76,
                  76,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "executeBuyProposal",
      "discriminator": [
        110,
        68,
        215,
        187,
        177,
        167,
        131,
        73
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "buyer",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "buyerPropertySystemId"
              }
            ]
          }
        },
        {
          "name": "buyerWallet",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  85,
                  89,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "account",
                "path": "buyer"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "buyerAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "buyerWallet"
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
          "name": "sellProposal",
          "docs": [
            "",
            "",
            "",
            ""
          ],
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  83,
                  69,
                  76,
                  76,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "arg",
                "path": "sellerProposalId"
              }
            ]
          }
        },
        {
          "name": "seller",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "sellerPropertySystemAccountId"
              }
            ]
          }
        },
        {
          "name": "sellerTreasury",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              }
            ]
          }
        },
        {
          "name": "sellerAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "sellerTreasury"
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
          "name": "propertyAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "propertyId"
              },
              {
                "kind": "arg",
                "path": "statePubkey"
              }
            ]
          }
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
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "buyerPropertySystemId",
          "type": "u64"
        },
        {
          "name": "sellerPropertySystemAccountId",
          "type": "u64"
        },
        {
          "name": "sellerProposalId",
          "type": "u64"
        },
        {
          "name": "statePubkey",
          "type": "pubkey"
        },
        {
          "name": "propertyId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "executeCountryPropsal",
      "discriminator": [
        25,
        138,
        240,
        244,
        191,
        58,
        196,
        106
      ],
      "accounts": [
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "countryName"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "countryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "proposal.country_name",
                "account": "proposalCountryPda"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "executePropertyProposal",
      "discriminator": [
        184,
        41,
        84,
        161,
        158,
        221,
        198,
        80
      ],
      "accounts": [
        {
          "name": "propertySystemAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "state",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "stateName"
              },
              {
                "kind": "arg",
                "path": "countryKey"
              }
            ]
          }
        },
        {
          "name": "propertyProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "propertyId"
              },
              {
                "kind": "account",
                "path": "state"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "stateAuthorityReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "countryKey"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "propertyPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "property_proposal.property_id",
                "account": "propertyProposal"
              },
              {
                "kind": "account",
                "path": "state"
              }
            ]
          }
        },
        {
          "name": "propertyMetadata",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "propertyPda"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "countryKey",
          "type": "pubkey"
        },
        {
          "name": "stateName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "propertyId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "finalizeArbitrarCandidateProfileForChallengeProposal",
      "discriminator": [
        54,
        108,
        216,
        40,
        144,
        209,
        127,
        235
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "candidateKey"
              }
            ]
          }
        },
        {
          "name": "arbitrarOffenderReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  102,
                  102,
                  101,
                  110,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "candidate_profile.candidate",
                "account": "candidateProfile"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "candidateKey",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "finalizeLease",
      "discriminator": [
        191,
        168,
        63,
        39,
        137,
        63,
        27,
        231
      ],
      "accounts": [
        {
          "name": "neutral",
          "signer": true
        },
        {
          "name": "lessee"
        },
        {
          "name": "lesseeAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "lessee"
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
          "name": "lease",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  101,
                  97,
                  115,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "property"
              },
              {
                "kind": "arg",
                "path": "leaseId"
              }
            ]
          }
        },
        {
          "name": "leaseAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "lease"
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
          "name": "property",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "propertyId"
              },
              {
                "kind": "arg",
                "path": "statePubkey"
              }
            ]
          }
        },
        {
          "name": "reinvestmentPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "reinvestmentAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "reinvestmentPda"
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
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
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
        }
      ],
      "args": [
        {
          "name": "propertySystem",
          "type": "pubkey"
        },
        {
          "name": "leaseId",
          "type": "u64"
        },
        {
          "name": "propertyId",
          "type": "u64"
        },
        {
          "name": "statePubkey",
          "type": "pubkey"
        },
        {
          "name": "sendSecurityDepositToLessee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "finalizeNewArbitrar",
      "discriminator": [
        51,
        111,
        15,
        121,
        54,
        114,
        202,
        7
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "candidate"
        },
        {
          "name": "arbitrarReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "candidatePubkey",
          "type": "pubkey"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "finalizeNewArbitrarForRemoveProposal",
      "discriminator": [
        203,
        24,
        75,
        104,
        118,
        0,
        47,
        73
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "candidate"
        },
        {
          "name": "arbitrarReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "removalProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalKey"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "candidatePubkey",
          "type": "pubkey"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proposalKey",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "finalizeNewThreshold",
      "discriminator": [
        2,
        180,
        56,
        103,
        233,
        0,
        213,
        182
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  116,
                  95,
                  99,
                  104,
                  97,
                  110,
                  103,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "existingThreshold",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  104,
                  114,
                  101,
                  115,
                  104,
                  111,
                  108,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "newThreshold",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  101,
                  95,
                  116,
                  104,
                  114,
                  101,
                  115,
                  104,
                  111,
                  108,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "newThresholdSigner"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "newThresholdSigner",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "finalizeNewTrustee",
      "discriminator": [
        8,
        233,
        227,
        152,
        103,
        135,
        65,
        0
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "candidate"
        },
        {
          "name": "trusteeReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "candidatePubkey",
          "type": "pubkey"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "finalizeNewTrusteeForRemoveProposal",
      "discriminator": [
        200,
        214,
        58,
        63,
        34,
        101,
        131,
        83
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "candidate"
        },
        {
          "name": "trusteeReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "removalProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalKey"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "candidatePubkey"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "candidatePubkey",
          "type": "pubkey"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proposalKey",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "finalizeOldArbitrar",
      "discriminator": [
        107,
        4,
        58,
        161,
        124,
        241,
        113,
        97
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "resignation",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  114,
                  101,
                  115,
                  105,
                  103,
                  110,
                  97,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "arbitrar"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "arbitrar",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "finalizeOldTrsutee",
      "discriminator": [
        117,
        247,
        237,
        9,
        63,
        54,
        58,
        117
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "resignation",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  115,
                  105,
                  103,
                  110,
                  97,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "trustee"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "trustee",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "finalizeRemoveProposal",
      "discriminator": [
        173,
        203,
        163,
        199,
        167,
        58,
        252,
        115
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "removeProposal",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "finalizeRtcProposal",
      "discriminator": [
        31,
        6,
        130,
        176,
        185,
        160,
        241,
        244
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  116,
                  95,
                  99,
                  104,
                  97,
                  110,
                  103,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemAccount"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemAccount",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "finalizeTrusteeCandidateProfileForChallengeProposal",
      "discriminator": [
        107,
        52,
        193,
        2,
        55,
        2,
        227,
        185
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "candidateKey"
              }
            ]
          }
        },
        {
          "name": "trusteeOffenderReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  102,
                  102,
                  101,
                  110,
                  100,
                  101,
                  114
                ]
              },
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "candidate_profile.candidate",
                "account": "candidateProfile"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "candidateKey",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initializeLeaseProposal",
      "discriminator": [
        247,
        227,
        80,
        175,
        240,
        83,
        31,
        104
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "lessee"
        },
        {
          "name": "neutral"
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "property",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "propertyId"
              },
              {
                "kind": "arg",
                "path": "statePubkey"
              }
            ]
          }
        },
        {
          "name": "leaseProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  101,
                  97,
                  115,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "property"
              },
              {
                "kind": "arg",
                "path": "leaseId"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "leaseId",
          "type": "u64"
        },
        {
          "name": "propertyId",
          "type": "u64"
        },
        {
          "name": "statePubkey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "rent",
          "type": "u64"
        },
        {
          "name": "securityDeposit",
          "type": "u64"
        },
        {
          "name": "agreementHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "endTimeInDays",
          "type": "u32"
        },
        {
          "name": "latePaymentFeePerDay",
          "type": "u64"
        },
        {
          "name": "periodicPay",
          "type": "i64"
        }
      ]
    },
    {
      "name": "leaseAccept",
      "discriminator": [
        202,
        141,
        148,
        28,
        72,
        56,
        123,
        79
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "lease",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  101,
                  97,
                  115,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "property"
              },
              {
                "kind": "arg",
                "path": "leaseId"
              }
            ]
          }
        },
        {
          "name": "neutral",
          "writable": true
        },
        {
          "name": "leaseAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "lease"
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
          "name": "signerAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "signer"
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
          "name": "property"
        },
        {
          "name": "propertySystem",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "treasuryAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "treasuryPda"
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
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  101,
                  97,
                  115,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "property"
              },
              {
                "kind": "arg",
                "path": "leaseId"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
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
        }
      ],
      "args": [
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "leaseId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "outcomeOfProposal",
      "discriminator": [
        220,
        139,
        183,
        169,
        132,
        230,
        192,
        129
      ],
      "accounts": [
        {
          "name": "authority",
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "outcome",
          "type": {
            "defined": {
              "name": "reasonType"
            }
          }
        }
      ]
    },
    {
      "name": "payRent",
      "discriminator": [
        69,
        155,
        112,
        183,
        178,
        234,
        94,
        100
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "signerAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "signer"
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
          "name": "treasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "treasuryAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "treasury"
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
          "name": "lease",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  101,
                  97,
                  115,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "leaseProperty"
              },
              {
                "kind": "arg",
                "path": "leaseId"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "propertySystem",
          "type": "pubkey"
        },
        {
          "name": "leaseId",
          "type": "u64"
        },
        {
          "name": "leaseProperty",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "proposeNewThreshold",
      "discriminator": [
        67,
        168,
        242,
        17,
        194,
        60,
        57,
        71
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint"
        },
        {
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  116,
                  95,
                  99,
                  104,
                  97,
                  110,
                  103,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "newThreshold",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  101,
                  95,
                  116,
                  104,
                  114,
                  101,
                  115,
                  104,
                  111,
                  108,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        },
        {
          "name": "newTrusteeSalaryThreshold",
          "type": "u8"
        },
        {
          "name": "newArbitratorSalaryThreshold",
          "type": "u8"
        },
        {
          "name": "newDividendThreshold",
          "type": "u8"
        },
        {
          "name": "newReinvestmentThreshold",
          "type": "u8"
        },
        {
          "name": "newSafetyThreshold",
          "type": "u8"
        }
      ]
    },
    {
      "name": "removeArbitrarGuiltAuthorityProposal",
      "discriminator": [
        149,
        194,
        231,
        39,
        243,
        140,
        78,
        244
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "ata",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "signer"
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
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "removalProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "mint"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeOldArbitrarRemoveProposal",
      "discriminator": [
        252,
        23,
        70,
        194,
        205,
        225,
        68,
        95
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalKey"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "resignation",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "arbitrar"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "proposalKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "arbitrar",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "removeOldTrusteeRemoveProposal",
      "discriminator": [
        90,
        76,
        254,
        119,
        94,
        71,
        218,
        161
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalKey"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "resignation",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "trustee"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "proposalKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "trustee",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "removeTrusteeGuiltAuthorityProposal",
      "discriminator": [
        235,
        61,
        221,
        255,
        103,
        199,
        45,
        74
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "ata",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "signer"
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
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "removalProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "mint"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "revenueChangeProposal",
      "discriminator": [
        109,
        252,
        102,
        213,
        119,
        136,
        170,
        69
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  116,
                  95,
                  99,
                  104,
                  97,
                  110,
                  103,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "revenueProposalArbitrarVote",
      "discriminator": [
        97,
        166,
        96,
        37,
        101,
        174,
        86,
        162
      ],
      "accounts": [
        {
          "name": "arbitrar",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  116,
                  95,
                  99,
                  104,
                  97,
                  110,
                  103,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "arbitrarVoter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  65,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  82,
                  84,
                  67,
                  104,
                  103,
                  80,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108,
                  82,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "revenueProposalSubmitSnapshot",
      "discriminator": [
        155,
        24,
        207,
        170,
        70,
        243,
        201,
        124
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  116,
                  95,
                  99,
                  104,
                  97,
                  110,
                  103,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemAccount"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "propertySystemAccount",
          "type": "pubkey"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "merkleRoot",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "closingDaysGap",
          "type": "u8"
        },
        {
          "name": "thresholdSubmissionDeadlineDays",
          "type": "u8"
        },
        {
          "name": "votingForThresholdDeadlineDays",
          "type": "u8"
        },
        {
          "name": "addNewThresholdDeadlineDays",
          "type": "u8"
        },
        {
          "name": "challengeNewThresholdDeadlineDays",
          "type": "u8"
        },
        {
          "name": "voteThreshold",
          "type": "u64"
        }
      ]
    },
    {
      "name": "revenueProposalVoting",
      "discriminator": [
        150,
        234,
        177,
        192,
        63,
        88,
        193,
        109
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  116,
                  95,
                  99,
                  104,
                  97,
                  110,
                  103,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "voterReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  111,
                  116,
                  101,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        },
        {
          "name": "yesOrNo",
          "type": "bool"
        }
      ]
    },
    {
      "name": "sellProposalArbitrarVote",
      "discriminator": [
        162,
        59,
        225,
        178,
        206,
        67,
        198,
        1
      ],
      "accounts": [
        {
          "name": "arbitrar",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  83,
                  69,
                  76,
                  76,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "seller",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              }
            ]
          }
        },
        {
          "name": "arbitrarVoter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  65,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  83,
                  101,
                  108,
                  108,
                  80,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108,
                  82,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "seller"
              },
              {
                "kind": "account",
                "path": "arbitrar"
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "sellProposalFinalize",
      "discriminator": [
        31,
        84,
        225,
        141,
        37,
        149,
        150,
        68
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  83,
                  69,
                  76,
                  76,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemAccount"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemAccount",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "stateCreationProposal",
      "discriminator": [
        136,
        235,
        161,
        143,
        148,
        80,
        131,
        94
      ],
      "accounts": [
        {
          "name": "country",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "countryName"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "countryAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "country"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "stateProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "stateName"
              },
              {
                "kind": "account",
                "path": "country"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "stateName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "countryName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "stateId",
          "type": "u16"
        },
        {
          "name": "stateTotalAuthorities",
          "type": "u8"
        },
        {
          "name": "stateAuthorityThreshold",
          "type": "u8"
        }
      ]
    },
    {
      "name": "stateProposalApproval",
      "discriminator": [
        60,
        44,
        10,
        145,
        211,
        4,
        149,
        68
      ],
      "accounts": [
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "stateName"
              },
              {
                "kind": "account",
                "path": "country"
              }
            ]
          }
        },
        {
          "name": "country",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "countryName"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "countryAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "country"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "stateCreationRecepit",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101,
                  95,
                  97,
                  112,
                  112,
                  114,
                  111,
                  118,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "stateName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "countryName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "stateProposalExecute",
      "discriminator": [
        161,
        12,
        229,
        147,
        94,
        31,
        196,
        85
      ],
      "accounts": [
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "stateName"
              },
              {
                "kind": "account",
                "path": "country"
              }
            ]
          }
        },
        {
          "name": "country",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  117,
                  110,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "countryName"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "state",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  116,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "stateName"
              },
              {
                "kind": "account",
                "path": "country"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "stateName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "countryName",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "submitArbitrarCandidate",
      "discriminator": [
        236,
        182,
        67,
        106,
        32,
        161,
        164,
        81
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "newRegistration",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proposalId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "submitCandidateForArbitrarAuthorityForRemoveProposal",
      "discriminator": [
        12,
        151,
        45,
        249,
        178,
        47,
        58,
        184
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "removalProposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalKey"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "newRegistration",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "submitCandidateForTrusteeAuthorityForRemoveProposal",
      "discriminator": [
        4,
        35,
        13,
        201,
        212,
        246,
        200,
        225
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "removalProposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalKey"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "newRegistration",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "submitSnaphotForVotingOnChallengeProposal",
      "discriminator": [
        0,
        221,
        173,
        227,
        209,
        172,
        153,
        17
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "merkleRoot",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "submitSnapshotForArbitrarElection",
      "discriminator": [
        121,
        254,
        70,
        28,
        46,
        154,
        137,
        61
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystem",
          "type": "pubkey"
        },
        {
          "name": "candidateSubmissionDeadline",
          "type": "u8"
        },
        {
          "name": "votingForAuthorityDeadline",
          "type": "u8"
        },
        {
          "name": "addNewAuthorityDeadline",
          "type": "u8"
        },
        {
          "name": "challengeNewAuthorityDeadline",
          "type": "u8"
        },
        {
          "name": "merkleRoot",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "submitSnapshotForAuthority",
      "discriminator": [
        163,
        219,
        207,
        144,
        170,
        46,
        75,
        136
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystem",
          "type": "pubkey"
        },
        {
          "name": "candidateSubmissionDeadline",
          "type": "u8"
        },
        {
          "name": "votingForAuthorityDeadline",
          "type": "u8"
        },
        {
          "name": "addNewAuthorityDeadline",
          "type": "u8"
        },
        {
          "name": "challengeNewAuthorityDeadline",
          "type": "u8"
        },
        {
          "name": "merkleRoot",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "submitSnapshotForRemovalProposal",
      "discriminator": [
        214,
        78,
        37,
        242,
        48,
        90,
        196,
        177
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "removalProposal",
          "writable": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "challengeProposalKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "merkleRoot",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "submitSnapshotForSellProposal",
      "discriminator": [
        19,
        170,
        47,
        114,
        167,
        71,
        63,
        86
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  83,
                  69,
                  76,
                  76,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemAccount"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "propertySystemAccount",
          "type": "pubkey"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "merkleRoot",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "closingDaysGap",
          "type": "u8"
        },
        {
          "name": "transferDeadlineDays",
          "type": "u8"
        },
        {
          "name": "voteThreshold",
          "type": "u64"
        }
      ]
    },
    {
      "name": "submitTrusteeCandidate",
      "discriminator": [
        251,
        81,
        142,
        208,
        184,
        99,
        174,
        236
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "candidateProfile",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101,
                  95,
                  112,
                  114,
                  111,
                  102,
                  105,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "newRegistration",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proposalId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "terminateLease",
      "discriminator": [
        231,
        193,
        141,
        128,
        136,
        197,
        83,
        86
      ],
      "accounts": [
        {
          "name": "neutral",
          "writable": true,
          "signer": true
        },
        {
          "name": "lesse"
        },
        {
          "name": "lesseeAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "lesse"
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
          "name": "lease",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  108,
                  101,
                  97,
                  115,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "property"
              },
              {
                "kind": "arg",
                "path": "leaseId"
              }
            ]
          }
        },
        {
          "name": "leaseAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "lease"
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
          "name": "property",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121
                ]
              },
              {
                "kind": "arg",
                "path": "propertyId"
              },
              {
                "kind": "arg",
                "path": "statePubkey"
              }
            ]
          }
        },
        {
          "name": "reinvestmentPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "reinvestmentAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "reinvestmentPda"
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
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
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
        }
      ],
      "args": [
        {
          "name": "propertySystem",
          "type": "pubkey"
        },
        {
          "name": "leaseId",
          "type": "u64"
        },
        {
          "name": "propertyId",
          "type": "u64"
        },
        {
          "name": "statePubkey",
          "type": "pubkey"
        },
        {
          "name": "sendSecurityDepositToLessee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenTransferArbitrarApprovalReinvestProposal",
      "discriminator": [
        82,
        123,
        1,
        46,
        41,
        18,
        146,
        163
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  95,
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "arbitrarVoter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  65,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  82,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  80,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108,
                  82,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenTransferArbitrarApprovalSafetyProposal",
      "discriminator": [
        68,
        146,
        253,
        132,
        191,
        129,
        159,
        127
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "arbitrarReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  97,
                  102,
                  101,
                  116,
                  121,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "arbitrarRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "arbitrarVoter",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  65,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  83,
                  97,
                  102,
                  101,
                  116,
                  121,
                  80,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108,
                  82,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenTransferCreateUseReinvestProposal",
      "discriminator": [
        154,
        45,
        108,
        38,
        173,
        15,
        68,
        184
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  95,
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "receipentWallet"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "amountRequired",
          "type": "u64"
        },
        {
          "name": "reasonHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "tokenTransferCreateUseSafetyProposal",
      "discriminator": [
        130,
        212,
        55,
        110,
        63,
        125,
        129,
        6
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  97,
                  102,
                  101,
                  116,
                  121,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "receipentWallet"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "amountRequired",
          "type": "u64"
        },
        {
          "name": "reasonHash",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        }
      ]
    },
    {
      "name": "tokenTransferDeleteReinvestProposal",
      "discriminator": [
        103,
        226,
        60,
        210,
        89,
        93,
        161,
        81
      ],
      "accounts": [
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  95,
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenTransferDeleteSafetyProposal",
      "discriminator": [
        126,
        144,
        252,
        186,
        173,
        78,
        219,
        242
      ],
      "accounts": [
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  97,
                  102,
                  101,
                  116,
                  121,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenTransferExecuteReinvestProposal",
      "discriminator": [
        219,
        212,
        225,
        141,
        173,
        107,
        164,
        144
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  95,
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "reinvestmentTreasury",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "reinvestmentAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "reinvestmentTreasury"
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
          "name": "recepientWallet"
        },
        {
          "name": "recepientAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "recepientWallet"
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
          "name": "mint"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenTransferExecuteSafetyProposal",
      "discriminator": [
        150,
        49,
        126,
        54,
        180,
        76,
        9,
        102
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  97,
                  102,
                  101,
                  116,
                  121,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "safetyTreasury",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  97,
                  102,
                  101,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "safetyAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "safetyTreasury"
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
          "name": "recepientWallet",
          "writable": true
        },
        {
          "name": "recepientAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "recepientWallet"
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
          "name": "mint"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenTransferFinalizeReinvestProposal",
      "discriminator": [
        218,
        77,
        46,
        148,
        104,
        147,
        44,
        118
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  95,
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystem",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "tokenTransferFinalizeSafetyProposal",
      "discriminator": [
        115,
        140,
        70,
        206,
        237,
        253,
        93,
        6
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  97,
                  102,
                  101,
                  116,
                  121,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystem",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "tokenTransferSubmitSnapshotReinvestProposal",
      "discriminator": [
        154,
        181,
        140,
        20,
        12,
        192,
        124,
        180
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  95,
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemAccount"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "propertySystemAccount",
          "type": "pubkey"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "merkleRoot",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "closingDaysGap",
          "type": "u8"
        },
        {
          "name": "deadlineDays",
          "type": "u8"
        },
        {
          "name": "voteThreshold",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenTransferSubmitSnapshotSafetyProposal",
      "discriminator": [
        22,
        110,
        150,
        111,
        239,
        44,
        12,
        56
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true,
          "address": "DdwqwHJW5om5r6G51cY8aUBpjUt2xMwYcqm2tLKUgUFz"
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  97,
                  102,
                  101,
                  116,
                  121,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemAccount"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "propertySystemAccount",
          "type": "pubkey"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "merkleRoot",
          "type": {
            "array": [
              "u8",
              32
            ]
          }
        },
        {
          "name": "closingDaysGap",
          "type": "u8"
        },
        {
          "name": "deadlineDays",
          "type": "u8"
        },
        {
          "name": "voteThreshold",
          "type": "u64"
        }
      ]
    },
    {
      "name": "tokenTransferVoteForReinvestProposal",
      "discriminator": [
        77,
        76,
        205,
        192,
        76,
        49,
        236,
        244
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  95,
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116,
                  95,
                  116,
                  111,
                  107,
                  101,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "voterReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  111,
                  116,
                  101,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        },
        {
          "name": "yesOrNo",
          "type": "bool"
        }
      ]
    },
    {
      "name": "tokenTransferVoteForSubmitProposal",
      "discriminator": [
        46,
        54,
        41,
        37,
        39,
        132,
        56,
        147
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  97,
                  102,
                  101,
                  116,
                  121,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "voterReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  111,
                  116,
                  101,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        },
        {
          "name": "yesOrNo",
          "type": "bool"
        }
      ]
    },
    {
      "name": "treasuryDistribution",
      "discriminator": [
        220,
        158,
        25,
        221,
        253,
        40,
        102,
        65
      ],
      "accounts": [
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "thershold",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  104,
                  114,
                  101,
                  115,
                  104,
                  111,
                  108,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "treasuryPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  101,
                  97,
                  115,
                  117,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "treasuryAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "treasuryPda"
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
          "name": "dividendPda",
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
                "path": "property_system.governance_mint",
                "account": "propertySystemAccount"
              }
            ]
          }
        },
        {
          "name": "dividendAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "dividendPda"
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
          "name": "reinvestmentPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  105,
                  110,
                  118,
                  101,
                  115,
                  116,
                  109,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "reinvestmentAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "reinvestmentPda"
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
          "name": "safetyPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  97,
                  102,
                  101,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "safetyAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "safetyPda"
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
          "name": "trusteePda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "trusteeAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "trusteePda"
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
          "name": "arbitrarPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  116,
                  111,
                  114,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "arbitrarAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "arbitrarPda"
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
          "name": "mint"
        },
        {
          "name": "governanceMint"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "trusteeApproveArbitrarElection",
      "discriminator": [
        207,
        88,
        23,
        13,
        118,
        28,
        59,
        221
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "arbitrarVoterReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  101,
                  108,
                  101,
                  99,
                  116,
                  105,
                  111,
                  110,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "trusteeResign",
      "discriminator": [
        24,
        48,
        239,
        226,
        170,
        81,
        235,
        118
      ],
      "accounts": [
        {
          "name": "trustee",
          "writable": true,
          "signer": true
        },
        {
          "name": "trusteeReceipt",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "resignation",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  115,
                  105,
                  103,
                  110,
                  97,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "trusteeSalaryClaim",
      "discriminator": [
        204,
        157,
        50,
        11,
        255,
        145,
        20,
        252
      ],
      "accounts": [
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "mint"
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "trustee"
        },
        {
          "name": "trusteeAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "trustee"
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
          "name": "trusteeReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  112,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "trustee"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  114,
                  101,
                  103,
                  105,
                  115,
                  116,
                  114,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              }
            ]
          }
        },
        {
          "name": "trusteeRegistryAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "trusteeRegistry"
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
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "propertySystemId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteForArbitrarCandiate",
      "discriminator": [
        138,
        44,
        191,
        70,
        30,
        247,
        234,
        234
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey"
              }
            ]
          }
        },
        {
          "name": "authorityVoteReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  118,
                  111,
                  116,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "candidateKey",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteForChallengeProposal",
      "discriminator": [
        145,
        121,
        52,
        109,
        216,
        164,
        112,
        59
      ],
      "accounts": [
        {
          "name": "signer",
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  104,
                  97,
                  108,
                  108,
                  101,
                  110,
                  103,
                  101,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteForNewArbitrarAuthorityForRemovalProposal",
      "discriminator": [
        91,
        5,
        14,
        173,
        192,
        134,
        174,
        63
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey"
              }
            ]
          }
        },
        {
          "name": "removalProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  97,
                  114,
                  98,
                  105,
                  116,
                  114,
                  97,
                  114,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalKey"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "authorityVoteReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  118,
                  111,
                  116,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "candidateKey",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteForNewThreshold",
      "discriminator": [
        120,
        84,
        76,
        185,
        215,
        88,
        148,
        38
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint"
        },
        {
          "name": "newThreshold",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  101,
                  95,
                  116,
                  104,
                  114,
                  101,
                  115,
                  104,
                  111,
                  108,
                  100
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "newThresholdCreator"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  116,
                  95,
                  99,
                  104,
                  97,
                  110,
                  103,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "newThresholdVoteReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  116,
                  104,
                  114,
                  101,
                  115,
                  104,
                  111,
                  108,
                  100,
                  95,
                  118,
                  111,
                  116,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "newThresholdCreator",
          "type": "pubkey"
        },
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteForNewTrusteeAuthorityForRemovalProposal",
      "discriminator": [
        72,
        193,
        179,
        114,
        81,
        238,
        172,
        173
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey"
              }
            ]
          }
        },
        {
          "name": "removalProposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  109,
                  111,
                  118,
                  101,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101,
                  95,
                  112,
                  114,
                  111,
                  112,
                  111,
                  115,
                  97,
                  108
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalKey"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "authorityVoteReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  118,
                  111,
                  116,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "removalProposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalKey",
          "type": "pubkey"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "candidateKey",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteForTrusteeCandiate",
      "discriminator": [
        130,
        45,
        157,
        253,
        56,
        170,
        219,
        67
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "proposal",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  108,
                  101,
                  99,
                  116,
                  95,
                  116,
                  114,
                  117,
                  115,
                  116,
                  101,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "authorityCandidate",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  99,
                  97,
                  110,
                  100,
                  105,
                  100,
                  97,
                  116,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "arg",
                "path": "candidateKey"
              }
            ]
          }
        },
        {
          "name": "authorityVoteReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121,
                  95,
                  118,
                  111,
                  116,
                  101,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "account",
                "path": "proposal"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "candidateKey",
          "type": "pubkey"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        }
      ]
    },
    {
      "name": "votingForSellProposal",
      "discriminator": [
        170,
        75,
        217,
        40,
        13,
        118,
        93,
        188
      ],
      "accounts": [
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "proposal",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  83,
                  69,
                  76,
                  76,
                  80,
                  82,
                  79,
                  80,
                  69,
                  82,
                  84,
                  89
                ]
              },
              {
                "kind": "account",
                "path": "propertySystem"
              },
              {
                "kind": "arg",
                "path": "proposalId"
              }
            ]
          }
        },
        {
          "name": "propertySystem",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  112,
                  101,
                  114,
                  116,
                  121,
                  95,
                  115,
                  121,
                  115,
                  116,
                  101,
                  109,
                  95,
                  97,
                  99,
                  99,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "propertySystemId"
              }
            ]
          }
        },
        {
          "name": "tokenHolderVoterReceipt",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  111,
                  116,
                  101,
                  114,
                  95,
                  114,
                  101,
                  99,
                  101,
                  105,
                  112,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "proposal"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "proposalId",
          "type": "u64"
        },
        {
          "name": "propertySystemId",
          "type": "u64"
        },
        {
          "name": "proof",
          "type": {
            "vec": {
              "array": [
                "u8",
                32
              ]
            }
          }
        },
        {
          "name": "votingPower",
          "type": "u64"
        },
        {
          "name": "yesOrNo",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "approveCountryAuthority",
      "discriminator": [
        58,
        162,
        163,
        109,
        201,
        118,
        170,
        150
      ]
    },
    {
      "name": "approveCountryAuthorityReceipt",
      "discriminator": [
        181,
        153,
        167,
        26,
        245,
        197,
        238,
        7
      ]
    },
    {
      "name": "arbitratorRecepit",
      "discriminator": [
        109,
        145,
        29,
        207,
        204,
        65,
        253,
        250
      ]
    },
    {
      "name": "arbitratorRegistry",
      "discriminator": [
        252,
        241,
        152,
        150,
        74,
        0,
        119,
        175
      ]
    },
    {
      "name": "arbitratorVoteReceipts",
      "discriminator": [
        225,
        40,
        45,
        73,
        250,
        206,
        195,
        66
      ]
    },
    {
      "name": "authorityCandidate",
      "discriminator": [
        232,
        62,
        210,
        103,
        234,
        156,
        195,
        223
      ]
    },
    {
      "name": "authorityVoteReceipt",
      "discriminator": [
        46,
        234,
        112,
        232,
        0,
        243,
        53,
        71
      ]
    },
    {
      "name": "candidateProfile",
      "discriminator": [
        49,
        166,
        124,
        251,
        136,
        193,
        223,
        251
      ]
    },
    {
      "name": "challengeProposal",
      "discriminator": [
        57,
        21,
        213,
        238,
        226,
        124,
        106,
        242
      ]
    },
    {
      "name": "country",
      "discriminator": [
        164,
        237,
        10,
        6,
        41,
        234,
        56,
        158
      ]
    },
    {
      "name": "countryAuthority",
      "discriminator": [
        188,
        136,
        71,
        12,
        254,
        50,
        15,
        218
      ]
    },
    {
      "name": "dividendPda",
      "discriminator": [
        59,
        246,
        152,
        134,
        13,
        216,
        19,
        4
      ]
    },
    {
      "name": "electAuthority",
      "discriminator": [
        112,
        129,
        236,
        61,
        220,
        210,
        197,
        32
      ]
    },
    {
      "name": "leaseProperty",
      "discriminator": [
        132,
        119,
        14,
        16,
        190,
        166,
        109,
        72
      ]
    },
    {
      "name": "leaseProposal",
      "discriminator": [
        36,
        246,
        90,
        120,
        152,
        136,
        246,
        74
      ]
    },
    {
      "name": "newthresholdproposal",
      "discriminator": [
        74,
        110,
        231,
        128,
        17,
        63,
        96,
        77
      ]
    },
    {
      "name": "offenderReceipt",
      "discriminator": [
        2,
        152,
        201,
        104,
        245,
        138,
        185,
        151
      ]
    },
    {
      "name": "propertyAccount",
      "discriminator": [
        193,
        89,
        151,
        121,
        84,
        43,
        4,
        71
      ]
    },
    {
      "name": "propertyAccountMetadata",
      "discriminator": [
        215,
        97,
        38,
        149,
        165,
        117,
        53,
        24
      ]
    },
    {
      "name": "propertyBuyProposal",
      "discriminator": [
        238,
        207,
        6,
        247,
        113,
        193,
        172,
        126
      ]
    },
    {
      "name": "propertyProposal",
      "discriminator": [
        174,
        140,
        61,
        142,
        186,
        51,
        14,
        71
      ]
    },
    {
      "name": "propertyProposalReceipt",
      "discriminator": [
        123,
        191,
        32,
        10,
        144,
        47,
        85,
        169
      ]
    },
    {
      "name": "propertySellProposal",
      "discriminator": [
        189,
        188,
        124,
        207,
        173,
        181,
        175,
        181
      ]
    },
    {
      "name": "propertySystemAccount",
      "discriminator": [
        124,
        248,
        210,
        239,
        200,
        18,
        89,
        65
      ]
    },
    {
      "name": "proposalCountryPda",
      "discriminator": [
        178,
        148,
        68,
        10,
        118,
        209,
        93,
        47
      ]
    },
    {
      "name": "proposeRemoveProposal",
      "discriminator": [
        139,
        242,
        12,
        183,
        233,
        228,
        96,
        194
      ]
    },
    {
      "name": "rtChgProposal",
      "discriminator": [
        225,
        116,
        225,
        141,
        47,
        182,
        77,
        56
      ]
    },
    {
      "name": "rankCounter",
      "discriminator": [
        163,
        57,
        177,
        203,
        152,
        214,
        160,
        227
      ]
    },
    {
      "name": "rankingAccount",
      "discriminator": [
        211,
        84,
        32,
        141,
        98,
        4,
        204,
        77
      ]
    },
    {
      "name": "reinvestmentPda",
      "discriminator": [
        225,
        135,
        24,
        82,
        176,
        20,
        23,
        127
      ]
    },
    {
      "name": "resignation",
      "discriminator": [
        53,
        50,
        153,
        121,
        88,
        27,
        118,
        14
      ]
    },
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
    },
    {
      "name": "safetyPda",
      "discriminator": [
        41,
        186,
        238,
        152,
        49,
        25,
        110,
        213
      ]
    },
    {
      "name": "state",
      "discriminator": [
        216,
        146,
        107,
        94,
        104,
        75,
        182,
        177
      ]
    },
    {
      "name": "stateAuthority",
      "discriminator": [
        212,
        163,
        162,
        99,
        248,
        246,
        248,
        118
      ]
    },
    {
      "name": "stateProposalAprroveReceipt",
      "discriminator": [
        230,
        173,
        238,
        11,
        222,
        213,
        237,
        212
      ]
    },
    {
      "name": "stateProposalPda",
      "discriminator": [
        49,
        193,
        82,
        239,
        234,
        32,
        38,
        9
      ]
    },
    {
      "name": "threshold",
      "discriminator": [
        43,
        204,
        216,
        149,
        87,
        95,
        181,
        72
      ]
    },
    {
      "name": "thresholdVoteReceipt",
      "discriminator": [
        146,
        206,
        41,
        226,
        177,
        46,
        92,
        64
      ]
    },
    {
      "name": "tokenTransferProposal",
      "discriminator": [
        239,
        162,
        204,
        230,
        3,
        31,
        144,
        53
      ]
    },
    {
      "name": "treasuryPda",
      "discriminator": [
        38,
        3,
        184,
        123,
        2,
        73,
        242,
        154
      ]
    },
    {
      "name": "trusteeRecepit",
      "discriminator": [
        48,
        248,
        169,
        22,
        184,
        204,
        203,
        107
      ]
    },
    {
      "name": "trusteeRegistry",
      "discriminator": [
        36,
        222,
        166,
        2,
        236,
        175,
        235,
        31
      ]
    },
    {
      "name": "voteReceiptForAuthorityElection",
      "discriminator": [
        8,
        179,
        39,
        227,
        148,
        72,
        140,
        66
      ]
    },
    {
      "name": "voterReciept",
      "discriminator": [
        65,
        148,
        25,
        27,
        88,
        222,
        28,
        36
      ]
    }
  ],
  "events": [
    {
      "name": "addedAuthorityForRemoval",
      "discriminator": [
        181,
        43,
        67,
        2,
        15,
        167,
        203,
        178
      ]
    },
    {
      "name": "addedNewAuthority",
      "discriminator": [
        195,
        4,
        70,
        52,
        38,
        235,
        17,
        14
      ]
    },
    {
      "name": "addedStateAuthority",
      "discriminator": [
        154,
        77,
        156,
        23,
        176,
        218,
        59,
        179
      ]
    },
    {
      "name": "approveByAuthority",
      "discriminator": [
        160,
        162,
        168,
        80,
        11,
        242,
        88,
        99
      ]
    },
    {
      "name": "arbitrarVoteForLease",
      "discriminator": [
        135,
        252,
        239,
        21,
        88,
        182,
        30,
        20
      ]
    },
    {
      "name": "authorityAddedForPropertySystem",
      "discriminator": [
        96,
        126,
        39,
        103,
        249,
        145,
        130,
        191
      ]
    },
    {
      "name": "authorityOfCountryCreated",
      "discriminator": [
        216,
        199,
        123,
        175,
        247,
        79,
        169,
        82
      ]
    },
    {
      "name": "authorityRevise",
      "discriminator": [
        24,
        28,
        166,
        67,
        200,
        192,
        79,
        214
      ]
    },
    {
      "name": "authorityToApproveCountryCreated",
      "discriminator": [
        146,
        45,
        17,
        165,
        70,
        195,
        69,
        223
      ]
    },
    {
      "name": "buyPropertyProposalArbitrarVote",
      "discriminator": [
        49,
        78,
        232,
        54,
        51,
        227,
        236,
        145
      ]
    },
    {
      "name": "buyPropertyProposalExecuted",
      "discriminator": [
        17,
        239,
        73,
        79,
        233,
        0,
        168,
        143
      ]
    },
    {
      "name": "buyPropertyProposalSnapshotRequest",
      "discriminator": [
        229,
        218,
        167,
        232,
        122,
        94,
        125,
        8
      ]
    },
    {
      "name": "candidateProfileCreated",
      "discriminator": [
        86,
        113,
        115,
        96,
        105,
        219,
        242,
        106
      ]
    },
    {
      "name": "candidateSubmitedForProposal",
      "discriminator": [
        210,
        74,
        156,
        60,
        137,
        97,
        96,
        43
      ]
    },
    {
      "name": "challengeProposalCreated",
      "discriminator": [
        16,
        67,
        35,
        9,
        193,
        172,
        229,
        191
      ]
    },
    {
      "name": "challengeProposalExecuted",
      "discriminator": [
        72,
        76,
        105,
        26,
        7,
        100,
        138,
        107
      ]
    },
    {
      "name": "challengeProposalOffenderAuthorityAdded",
      "discriminator": [
        200,
        204,
        68,
        41,
        154,
        29,
        0,
        246
      ]
    },
    {
      "name": "challengeThresholdAccepted",
      "discriminator": [
        173,
        41,
        66,
        124,
        22,
        80,
        103,
        82
      ]
    },
    {
      "name": "countryApprovedBySigner",
      "discriminator": [
        183,
        179,
        215,
        16,
        185,
        169,
        211,
        98
      ]
    },
    {
      "name": "countryCreated",
      "discriminator": [
        139,
        62,
        58,
        174,
        78,
        230,
        65,
        131
      ]
    },
    {
      "name": "countryProposalCreated",
      "discriminator": [
        47,
        14,
        160,
        13,
        73,
        77,
        139,
        191
      ]
    },
    {
      "name": "createBuyPropertyProposal",
      "discriminator": [
        244,
        21,
        108,
        116,
        58,
        9,
        208,
        63
      ]
    },
    {
      "name": "createProposalForTokenTransfer",
      "discriminator": [
        240,
        58,
        64,
        111,
        67,
        155,
        233,
        73
      ]
    },
    {
      "name": "createSellPropertyProposal",
      "discriminator": [
        80,
        137,
        226,
        138,
        139,
        184,
        74,
        49
      ]
    },
    {
      "name": "deleteProposal",
      "discriminator": [
        11,
        239,
        36,
        12,
        54,
        132,
        136,
        110
      ]
    },
    {
      "name": "executeStateProposal",
      "discriminator": [
        68,
        144,
        151,
        151,
        128,
        250,
        224,
        121
      ]
    },
    {
      "name": "finalizeAccusedAuthority",
      "discriminator": [
        187,
        151,
        31,
        51,
        121,
        238,
        136,
        189
      ]
    },
    {
      "name": "finalizeAuthority",
      "discriminator": [
        188,
        0,
        227,
        74,
        129,
        25,
        80,
        21
      ]
    },
    {
      "name": "finalizeProposal",
      "discriminator": [
        179,
        2,
        53,
        215,
        111,
        236,
        123,
        246
      ]
    },
    {
      "name": "landAccountCreated",
      "discriminator": [
        255,
        106,
        115,
        28,
        20,
        39,
        216,
        143
      ]
    },
    {
      "name": "leaseAcceptedByLesse",
      "discriminator": [
        15,
        233,
        135,
        222,
        14,
        188,
        127,
        202
      ]
    },
    {
      "name": "leaseFinalize",
      "discriminator": [
        234,
        62,
        191,
        66,
        196,
        63,
        46,
        126
      ]
    },
    {
      "name": "leaseProposalCreated",
      "discriminator": [
        251,
        202,
        208,
        154,
        117,
        2,
        50,
        136
      ]
    },
    {
      "name": "newThresholdAdopted",
      "discriminator": [
        107,
        246,
        47,
        126,
        117,
        71,
        213,
        168
      ]
    },
    {
      "name": "newThresholdSelected",
      "discriminator": [
        201,
        228,
        141,
        26,
        75,
        245,
        205,
        150
      ]
    },
    {
      "name": "propertyCreated",
      "discriminator": [
        106,
        97,
        20,
        82,
        86,
        26,
        248,
        10
      ]
    },
    {
      "name": "propertyProposalCreated",
      "discriminator": [
        1,
        242,
        225,
        90,
        207,
        52,
        31,
        91
      ]
    },
    {
      "name": "propertySystemCreated",
      "discriminator": [
        254,
        229,
        154,
        56,
        95,
        142,
        34,
        102
      ]
    },
    {
      "name": "proposedNewThreshold",
      "discriminator": [
        189,
        244,
        130,
        187,
        13,
        245,
        128,
        143
      ]
    },
    {
      "name": "removeGuiltyAuthority",
      "discriminator": [
        157,
        21,
        213,
        105,
        71,
        140,
        231,
        244
      ]
    },
    {
      "name": "rentPaid",
      "discriminator": [
        140,
        29,
        172,
        69,
        152,
        38,
        73,
        241
      ]
    },
    {
      "name": "resignationCreated",
      "discriminator": [
        92,
        68,
        108,
        32,
        60,
        241,
        99,
        27
      ]
    },
    {
      "name": "resignationOfAuthority",
      "discriminator": [
        243,
        55,
        59,
        83,
        110,
        249,
        178,
        76
      ]
    },
    {
      "name": "revenueChangeProposalCreated",
      "discriminator": [
        74,
        228,
        130,
        169,
        31,
        211,
        113,
        120
      ]
    },
    {
      "name": "salaryClaimed",
      "discriminator": [
        132,
        182,
        8,
        72,
        197,
        182,
        189,
        105
      ]
    },
    {
      "name": "snapshotRequested",
      "discriminator": [
        6,
        9,
        168,
        170,
        148,
        197,
        192,
        85
      ]
    },
    {
      "name": "snapshotRequestedForAuthority",
      "discriminator": [
        123,
        126,
        165,
        164,
        214,
        190,
        208,
        211
      ]
    },
    {
      "name": "snapshotSubmitted",
      "discriminator": [
        254,
        45,
        92,
        130,
        12,
        79,
        160,
        23
      ]
    },
    {
      "name": "stateCreated",
      "discriminator": [
        15,
        240,
        80,
        182,
        161,
        12,
        137,
        26
      ]
    },
    {
      "name": "submitForTokenTransfer",
      "discriminator": [
        215,
        251,
        146,
        26,
        121,
        102,
        70,
        114
      ]
    },
    {
      "name": "submitSnapshotForRemoveAuthority",
      "discriminator": [
        169,
        135,
        151,
        160,
        237,
        241,
        196,
        163
      ]
    },
    {
      "name": "submitSnapshotForResignAuthority",
      "discriminator": [
        236,
        238,
        47,
        38,
        169,
        241,
        4,
        207
      ]
    },
    {
      "name": "submitSnapshotForRevenueChangeProposal",
      "discriminator": [
        40,
        211,
        7,
        209,
        161,
        96,
        94,
        183
      ]
    },
    {
      "name": "submitSnapshotForSellProposal",
      "discriminator": [
        58,
        204,
        125,
        227,
        100,
        14,
        223,
        16
      ]
    },
    {
      "name": "tokenTransferExecuted",
      "discriminator": [
        70,
        251,
        125,
        145,
        91,
        46,
        198,
        82
      ]
    },
    {
      "name": "treasuryDistributionEvent",
      "discriminator": [
        15,
        230,
        235,
        99,
        249,
        161,
        232,
        118
      ]
    },
    {
      "name": "voteForAuthority",
      "discriminator": [
        188,
        207,
        55,
        64,
        175,
        207,
        210,
        60
      ]
    },
    {
      "name": "voteForProposal",
      "discriminator": [
        137,
        80,
        41,
        250,
        117,
        52,
        166,
        24
      ]
    },
    {
      "name": "voteForStateProposal",
      "discriminator": [
        121,
        223,
        162,
        150,
        63,
        100,
        138,
        46
      ]
    },
    {
      "name": "votedForNewThreshold",
      "discriminator": [
        3,
        130,
        143,
        67,
        69,
        31,
        156,
        2
      ]
    },
    {
      "name": "votedForPropertyProposal",
      "discriminator": [
        154,
        49,
        77,
        197,
        68,
        152,
        157,
        175
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "extraAccountMetaListSizeError"
    },
    {
      "code": 6001,
      "name": "extraAccountMetaListInitError"
    },
    {
      "code": 6002,
      "name": "instructionUnpackError"
    },
    {
      "code": 6003,
      "name": "overflow"
    },
    {
      "code": 6004,
      "name": "underflow"
    }
  ],
  "types": [
    {
      "name": "addedAuthorityForRemoval",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "addedNewAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "candidate",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          },
          {
            "name": "rank",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "addedStateAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "approveByAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "approveCountryAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "threshold",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "approveCountryAuthorityReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "countryProposal",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "arbitrarVoteForLease",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "leaseProposal",
            "type": "pubkey"
          },
          {
            "name": "arbitrar",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "arbitratorRecepit",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystemAccount",
            "type": "pubkey"
          },
          {
            "name": "newTransactionTime",
            "type": "i64"
          },
          {
            "name": "arbitrator",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "arbitratorRegistry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystemAccount",
            "type": "pubkey"
          },
          {
            "name": "currentNumberOfArbitrators",
            "type": "u8"
          },
          {
            "name": "totalArbitrators",
            "type": "u8"
          },
          {
            "name": "voteThreshold",
            "type": "u8"
          },
          {
            "name": "claimDeadlineTs",
            "type": "i64"
          },
          {
            "name": "totalSalaryAllocated",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "arbitratorVoteReceipts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystemKey",
            "type": "pubkey"
          },
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "arbitratorKey",
            "type": "pubkey"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "authorityAddedForPropertySystem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "authorityCandidate",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "candidate",
            "type": "pubkey"
          },
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "selected",
            "type": "bool"
          },
          {
            "name": "selectedTime",
            "type": "i64"
          },
          {
            "name": "voteGained",
            "type": "u64"
          },
          {
            "name": "isFinalized",
            "type": "bool"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "authorityOfCountryCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "country",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "authorityRevise",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "newAuthority",
            "type": "pubkey"
          },
          {
            "name": "oldAuthority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "authorityToApproveCountryCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authorityAccount",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "authorityType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "trustee"
          },
          {
            "name": "arbitrator"
          }
        ]
      }
    },
    {
      "name": "authorityVoteReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "voter",
            "type": "pubkey"
          },
          {
            "name": "candidatePubkey",
            "type": "pubkey"
          },
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "votingPower",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "buyPropertyProposalArbitrarVote",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "voter",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "buyPropertyProposalExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "buyer",
            "type": "pubkey"
          },
          {
            "name": "buyerProposal",
            "type": "pubkey"
          },
          {
            "name": "seller",
            "type": "pubkey"
          },
          {
            "name": "sellerProposal",
            "type": "pubkey"
          },
          {
            "name": "sellerAta",
            "type": "pubkey"
          },
          {
            "name": "property",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "buyPropertyProposalSnapshotRequest",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "voter",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "candidateProfile",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "candidate",
            "type": "pubkey"
          },
          {
            "name": "totalApplied",
            "type": "u16"
          },
          {
            "name": "totalSelectedAsTrustee",
            "type": "u16"
          },
          {
            "name": "totalSelectedAsArbitrar",
            "type": "u16"
          },
          {
            "name": "isBlacklisted",
            "type": "bool"
          },
          {
            "name": "removalCount",
            "type": "u16"
          },
          {
            "name": "actionsHistory",
            "type": {
              "defined": {
                "name": "reasonType"
              }
            }
          },
          {
            "name": "metadataHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "candidateProfileCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "candidateKey",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "candidateSubmitedForProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "candidate",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "challengeProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "trusteeOffenderTotalNumber",
            "type": "u8"
          },
          {
            "name": "arbitrarOffenderTotalNumber",
            "type": "u8"
          },
          {
            "name": "requiredVoteToActive",
            "type": "u64"
          },
          {
            "name": "voteGained",
            "type": "u64"
          },
          {
            "name": "chargesHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "evidenceHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "proposalStatus"
              }
            }
          },
          {
            "name": "merkleRoot",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "guilty",
            "type": {
              "defined": {
                "name": "reasonType"
              }
            }
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "resultTime",
            "type": "i64"
          },
          {
            "name": "votingDeadline",
            "type": "i64"
          },
          {
            "name": "index",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "challengeProposalCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "challengeProposalExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "outcoome",
            "type": {
              "defined": {
                "name": "reasonType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "challengeProposalOffenderAuthorityAdded",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "challengeThresholdAccepted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "newThreshold",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "country",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "countryId",
            "type": "u16"
          },
          {
            "name": "countryName",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "threshold",
            "type": "u8"
          },
          {
            "name": "totalAuthority",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "countryApprovedBySigner",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "countryAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "countryPda",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "countryCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "country",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "countryProposalCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "createBuyPropertyProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "buyer",
            "type": "pubkey"
          },
          {
            "name": "buyerProposal",
            "type": "pubkey"
          },
          {
            "name": "seller",
            "type": "pubkey"
          },
          {
            "name": "sellerProposal",
            "type": "pubkey"
          },
          {
            "name": "property",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "createProposalForTokenTransfer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "createSellPropertyProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "seller",
            "type": "pubkey"
          },
          {
            "name": "sellerProposal",
            "type": "pubkey"
          },
          {
            "name": "property",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "deleteProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "deletedBy",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "dividendPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "dividendPerToken",
            "type": "u128"
          },
          {
            "name": "lastUpdatedTs",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "electAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "totalAuthorityToResign",
            "type": "u8"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "proposalStatus"
              }
            }
          },
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "merkleRoot",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "arbitrarApprovalsCount",
            "type": "u8"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "name": "isArbitrarApproved",
            "type": "bool"
          },
          {
            "name": "snapshotSubmitted",
            "type": "bool"
          },
          {
            "name": "candidateSubmissionDeadline",
            "type": "i64"
          },
          {
            "name": "votingForAuthorityDeadline",
            "type": "i64"
          },
          {
            "name": "addNewAuthorityDeadline",
            "type": "i64"
          },
          {
            "name": "challengeNewAuthorityDeadline",
            "type": "i64"
          },
          {
            "name": "isFinalize",
            "type": "bool"
          },
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "rmVotingThreshold",
            "type": "u64"
          },
          {
            "name": "rmTotalVotingPowerGained",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "executeStateProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "state",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "finalizeAccusedAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          },
          {
            "name": "outcoome",
            "type": {
              "defined": {
                "name": "reasonType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "finalizeAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "finalizeProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "proposalStatus",
            "type": {
              "defined": {
                "name": "proposalStatus"
              }
            }
          }
        ]
      }
    },
    {
      "name": "landAccountCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "landAccount",
            "type": "pubkey"
          },
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "issuedBy",
            "type": "pubkey"
          },
          {
            "name": "landMetadata",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "leaseAcceptedByLesse",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "leaseProposal",
            "type": "pubkey"
          },
          {
            "name": "lesse",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "leaseFinalize",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "leaseProposal",
            "type": "pubkey"
          },
          {
            "name": "leaseStatus",
            "type": {
              "defined": {
                "name": "leaseStatus"
              }
            }
          }
        ]
      }
    },
    {
      "name": "leaseProperty",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "leaseId",
            "type": "u64"
          },
          {
            "name": "property",
            "type": "pubkey"
          },
          {
            "name": "lessee",
            "type": "pubkey"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "leaseStatus"
              }
            }
          },
          {
            "name": "rentAmount",
            "type": "u64"
          },
          {
            "name": "securityDeposit",
            "type": "u64"
          },
          {
            "name": "periodicPay",
            "type": "i64"
          },
          {
            "name": "nextPayment",
            "type": "i64"
          },
          {
            "name": "latePaymentFeePerDay",
            "type": "u64"
          },
          {
            "name": "lastPayement",
            "type": "i64"
          },
          {
            "name": "agreemenbtHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "leaseStartTime",
            "type": "i64"
          },
          {
            "name": "leaseEndTime",
            "type": "i64"
          },
          {
            "name": "neutral",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "leaseProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "leaseId",
            "type": "u64"
          },
          {
            "name": "isArbitrarApproved",
            "type": "bool"
          },
          {
            "name": "arbitrarApprovalCount",
            "type": "u8"
          },
          {
            "name": "initailizedAt",
            "type": "i64"
          },
          {
            "name": "property",
            "type": "pubkey"
          },
          {
            "name": "lessee",
            "type": "pubkey"
          },
          {
            "name": "periodicPay",
            "type": "i64"
          },
          {
            "name": "latePaymentFeePerDay",
            "type": "u64"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "proposalStatus"
              }
            }
          },
          {
            "name": "rentAmount",
            "type": "u64"
          },
          {
            "name": "securityDeposit",
            "type": "u64"
          },
          {
            "name": "lastPayement",
            "type": "i64"
          },
          {
            "name": "agreemenbtHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "lesseeAcceptanceDeadline",
            "type": "i64"
          },
          {
            "name": "leaseEndTime",
            "type": "i64"
          },
          {
            "name": "neutral",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "leaseProposalCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "leaseProposal",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "lessee",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "leaseStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "active"
          },
          {
            "name": "terminated"
          },
          {
            "name": "expired"
          }
        ]
      }
    },
    {
      "name": "newthresholdproposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "newThreshold",
            "type": "pubkey"
          },
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "signer",
            "type": "pubkey"
          },
          {
            "name": "voteGained",
            "type": "u64"
          },
          {
            "name": "newTrusteeSalaryThreshold",
            "type": "u8"
          },
          {
            "name": "newArbitratorSalaryThreshold",
            "type": "u8"
          },
          {
            "name": "newDividendThreshold",
            "type": "u8"
          },
          {
            "name": "newReinvestmentThreshold",
            "type": "u8"
          },
          {
            "name": "newSafetyThreshold",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "newThresholdAdopted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "newThreshold",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "newThresholdSelected",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "newThreshold",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "offenderReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "offenderKey",
            "type": "pubkey"
          },
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "propertySystemKey",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          },
          {
            "name": "isFinalized",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "propertyAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertyId",
            "type": "u64"
          },
          {
            "name": "isLeased",
            "type": "bool"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "stateId",
            "type": "u16"
          },
          {
            "name": "statePubkey",
            "type": "pubkey"
          },
          {
            "name": "countryId",
            "type": "u16"
          },
          {
            "name": "countryPubkey",
            "type": "pubkey"
          },
          {
            "name": "issuedAt",
            "type": "i64"
          },
          {
            "name": "issuedBy",
            "type": "pubkey"
          },
          {
            "name": "metadata",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "propertyAccountMetadata",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "property",
            "type": "pubkey"
          },
          {
            "name": "legalDocHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "lastUpdated",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "propertyBuyProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "buyer",
            "type": "pubkey"
          },
          {
            "name": "buyerWallet",
            "type": "pubkey"
          },
          {
            "name": "sellProposal",
            "type": "pubkey"
          },
          {
            "name": "property",
            "type": "pubkey"
          },
          {
            "name": "salePrice",
            "type": "u64"
          },
          {
            "name": "merkleRoot",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "arbitrarApprovalsCount",
            "type": "u8"
          },
          {
            "name": "isArbitrarApproved",
            "type": "bool"
          },
          {
            "name": "totalVotingPower",
            "type": "u64"
          },
          {
            "name": "votesFor",
            "type": "u64"
          },
          {
            "name": "votesAgainst",
            "type": "u64"
          },
          {
            "name": "voteThreshold",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "paymentDeadline",
            "type": "i64"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "proposalStatus"
              }
            }
          },
          {
            "name": "snapshotSubmitted",
            "type": "bool"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          },
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "propertyCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "propertyKey",
            "type": "pubkey"
          },
          {
            "name": "propoertySystem",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "propertyProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertyId",
            "type": "u64"
          },
          {
            "name": "propertySystemPubkey",
            "type": "pubkey"
          },
          {
            "name": "stateId",
            "type": "u16"
          },
          {
            "name": "statePubkey",
            "type": "pubkey"
          },
          {
            "name": "countryId",
            "type": "u16"
          },
          {
            "name": "countryPubkey",
            "type": "pubkey"
          },
          {
            "name": "legalDocHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "issuedBy",
            "type": "pubkey"
          },
          {
            "name": "approvalCount",
            "type": "u8"
          },
          {
            "name": "approved",
            "type": "bool"
          },
          {
            "name": "executed",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "propertyProposalCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "createdBy",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "propertyProposalReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalPubkey",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "propertySellProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "propertyAccount",
            "type": "pubkey"
          },
          {
            "name": "salePrice",
            "type": "u64"
          },
          {
            "name": "propertySystemAccount",
            "type": "pubkey"
          },
          {
            "name": "depositAccountPda",
            "type": "pubkey"
          },
          {
            "name": "merkleRoot",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "arbitrarApprovalsCount",
            "type": "u8"
          },
          {
            "name": "isArbitrarApproved",
            "type": "bool"
          },
          {
            "name": "totalVotingPower",
            "type": "u64"
          },
          {
            "name": "votesFor",
            "type": "u64"
          },
          {
            "name": "votesAgainst",
            "type": "u64"
          },
          {
            "name": "voteThreshold",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "transferDeadline",
            "type": "i64"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "proposalStatus"
              }
            }
          },
          {
            "name": "snapshotSubmitted",
            "type": "bool"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          },
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "propertySystemAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystemId",
            "type": "u64"
          },
          {
            "name": "governanceMint",
            "type": "pubkey"
          },
          {
            "name": "treasury",
            "type": "pubkey"
          },
          {
            "name": "trusteeRegistry",
            "type": "pubkey"
          },
          {
            "name": "arbitratorRegistry",
            "type": "pubkey"
          },
          {
            "name": "totalProperties",
            "type": "u64"
          },
          {
            "name": "totalTokenSupply",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "readyForListing",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "propertySystemCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          },
          {
            "name": "governanceMint",
            "type": "pubkey"
          },
          {
            "name": "treasury",
            "type": "pubkey"
          },
          {
            "name": "reinvestment",
            "type": "pubkey"
          },
          {
            "name": "safety",
            "type": "pubkey"
          },
          {
            "name": "dividend",
            "type": "pubkey"
          },
          {
            "name": "safetyThreshold",
            "type": "u8"
          },
          {
            "name": "trusteeSalaryThreshold",
            "type": "u8"
          },
          {
            "name": "arbitratorSalaryThreshold",
            "type": "u8"
          },
          {
            "name": "dividendThreshold",
            "type": "u8"
          },
          {
            "name": "reinvestmentThreshold",
            "type": "u8"
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "proposalCountryPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "countryId",
            "type": "u16"
          },
          {
            "name": "countryName",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "countryPdaThreshold",
            "type": "u8"
          },
          {
            "name": "approvals",
            "type": "u8"
          },
          {
            "name": "approved",
            "type": "bool"
          },
          {
            "name": "executed",
            "type": "bool"
          },
          {
            "name": "totalAuthority",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "proposalStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "draft"
          },
          {
            "name": "active"
          },
          {
            "name": "passed"
          },
          {
            "name": "failed"
          },
          {
            "name": "rejected"
          },
          {
            "name": "executed"
          },
          {
            "name": "pending"
          },
          {
            "name": "approved"
          }
        ]
      }
    },
    {
      "name": "proposalType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "sellproperty"
          },
          {
            "name": "buyproperty"
          },
          {
            "name": "usesafety"
          },
          {
            "name": "usereinvestment"
          },
          {
            "name": "revenuethresholdchange"
          },
          {
            "name": "challlengeauthority"
          },
          {
            "name": "removeauthority"
          },
          {
            "name": "proposeremoveproposal"
          }
        ]
      }
    },
    {
      "name": "proposeRemoveProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "challengeProposal",
            "type": "pubkey"
          },
          {
            "name": "merkleRoot",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "totalVotingPower",
            "type": "u64"
          },
          {
            "name": "votesFor",
            "type": "u64"
          },
          {
            "name": "votesAgainst",
            "type": "u64"
          },
          {
            "name": "voteThreshold",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "proposalStatus"
              }
            }
          },
          {
            "name": "snapshotSubmitted",
            "type": "bool"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          },
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "proposedNewThreshold",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "proposer",
            "type": "pubkey"
          },
          {
            "name": "proposedRevenueThreshold",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "rtChgProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "newThreshold",
            "type": "pubkey"
          },
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "merkleRoot",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "arbitrarApprovalsCount",
            "type": "u8"
          },
          {
            "name": "isArbitrarApproved",
            "type": "bool"
          },
          {
            "name": "totalVotingPower",
            "type": "u64"
          },
          {
            "name": "votesFor",
            "type": "u64"
          },
          {
            "name": "votesAgainst",
            "type": "u64"
          },
          {
            "name": "voteThreshold",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "proposalStatus"
              }
            }
          },
          {
            "name": "snapshotSubmitted",
            "type": "bool"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          },
          {
            "name": "thresholdSubmissionDeadline",
            "type": "i64"
          },
          {
            "name": "votingForThresholdDeadline",
            "type": "i64"
          },
          {
            "name": "addNewThresholdDeadline",
            "type": "i64"
          },
          {
            "name": "challengeNewThresholdDeadline",
            "type": "i64"
          },
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "rankCounter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "count",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "rankingAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "candidateKey",
            "type": "pubkey"
          },
          {
            "name": "rank",
            "type": "u8"
          },
          {
            "name": "electProposal",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "reasonType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "none"
          },
          {
            "name": "inactivity"
          },
          {
            "name": "other"
          },
          {
            "name": "invalidDocuments"
          },
          {
            "name": "duplicateIdentity"
          },
          {
            "name": "misconduct"
          },
          {
            "name": "maliciousVoting"
          },
          {
            "name": "fraud"
          },
          {
            "name": "governanceDecision"
          }
        ]
      }
    },
    {
      "name": "reinvestmentPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "reinvestementUsed",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "removeGuiltyAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "challengeProposalKey",
            "type": "pubkey"
          },
          {
            "name": "removalGuiltyAuthorityProposal",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "rentPaid",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "leaseProposal",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "resignation",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          },
          {
            "name": "time",
            "type": "i64"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "proposalStatus"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "resignationCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "resignationOfAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "revenueChangeProposalCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "trustee",
            "type": "pubkey"
          }
        ]
      }
    },
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
    },
    {
      "name": "safetyPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "safetyFundUsed",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "salaryClaimed",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "snapshotRequested",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "slot",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "snapshotRequestedForAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          },
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "slot",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "snapshotSubmitted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          },
          {
            "name": "proposalKey",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "state",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stateId",
            "type": "u16"
          },
          {
            "name": "stateName",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "countryId",
            "type": "u16"
          },
          {
            "name": "countryPubkey",
            "type": "pubkey"
          },
          {
            "name": "totalAuthorities",
            "type": "u8"
          },
          {
            "name": "threshold",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "stateAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "statePubkey",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "stateCreated",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "country",
            "type": "pubkey"
          },
          {
            "name": "creator",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "stateProposalAprroveReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "stateProposalPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stateId",
            "type": "u16"
          },
          {
            "name": "stateName",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "stateTotalAuthorities",
            "type": "u8"
          },
          {
            "name": "stateAuthorityThreshold",
            "type": "u8"
          },
          {
            "name": "countryId",
            "type": "u16"
          },
          {
            "name": "countryPubkey",
            "type": "pubkey"
          },
          {
            "name": "approval",
            "type": "u8"
          },
          {
            "name": "approved",
            "type": "bool"
          },
          {
            "name": "executed",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "submitForTokenTransfer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "submitSnapshotForRemoveAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "candidateSubmisionDeadline",
            "type": "i64"
          },
          {
            "name": "votingForAuthorityDeadline",
            "type": "i64"
          },
          {
            "name": "addNewAuthorityDeadline",
            "type": "i64"
          },
          {
            "name": "challengeNewAuthorityDeadline",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "submitSnapshotForResignAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "candidateSubmisionDeadline",
            "type": "i64"
          },
          {
            "name": "votingForAuthorityDeadline",
            "type": "i64"
          },
          {
            "name": "addNewAuthorityDeadline",
            "type": "i64"
          },
          {
            "name": "challengeNewAuthorityDeadline",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "submitSnapshotForRevenueChangeProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "thresholdSubmissionDeadlineDays",
            "type": "i64"
          },
          {
            "name": "votingForThresholdDeadline",
            "type": "i64"
          },
          {
            "name": "addNewThresholdDeadline",
            "type": "i64"
          },
          {
            "name": "challengeNewThresholdDeadline",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "submitSnapshotForSellProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "transferDeadlineDays",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "threshold",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "trusteeSalaryThreshold",
            "type": "u8"
          },
          {
            "name": "arbitratorSalaryThreshold",
            "type": "u8"
          },
          {
            "name": "dividendThreshold",
            "type": "u8"
          },
          {
            "name": "reinvestmentThreshold",
            "type": "u8"
          },
          {
            "name": "safetyThreshold",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "thresholdVoteReceipt",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "thresholdvoted",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "tokenTransferExecuted",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "creditedAccount",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "tokenTransferProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalId",
            "type": "u64"
          },
          {
            "name": "amountRequired",
            "type": "u64"
          },
          {
            "name": "reasonHash",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "recepientWallet",
            "type": "pubkey"
          },
          {
            "name": "merkleRoot",
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          },
          {
            "name": "arbitrarApprovalsCount",
            "type": "u8"
          },
          {
            "name": "isArbitrarApproved",
            "type": "bool"
          },
          {
            "name": "totalVotingPower",
            "type": "u64"
          },
          {
            "name": "votesFor",
            "type": "u64"
          },
          {
            "name": "votesAgainst",
            "type": "u64"
          },
          {
            "name": "voteThreshold",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "i64"
          },
          {
            "name": "endTime",
            "type": "i64"
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "proposalStatus"
              }
            }
          },
          {
            "name": "snapshotSubmitted",
            "type": "bool"
          },
          {
            "name": "proposalType",
            "type": {
              "defined": {
                "name": "proposalType"
              }
            }
          },
          {
            "name": "deadline",
            "type": "i64"
          },
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "treasuryDistributionEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "time",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "treasuryPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystemAccout",
            "type": "pubkey"
          },
          {
            "name": "lastDistributionTs",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "trusteeRecepit",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystemAccount",
            "type": "pubkey"
          },
          {
            "name": "newTransactionTime",
            "type": "i64"
          },
          {
            "name": "trustee",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "trusteeRegistry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "propertySystemAccount",
            "type": "pubkey"
          },
          {
            "name": "currentNumberOfTrustees",
            "type": "u8"
          },
          {
            "name": "totalTrustees",
            "type": "u8"
          },
          {
            "name": "voteThreshold",
            "type": "u8"
          },
          {
            "name": "claimDeadlineTs",
            "type": "i64"
          },
          {
            "name": "totalSalaryAllocated",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "voteForAuthority",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "voter",
            "type": "pubkey"
          },
          {
            "name": "candidate",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "voteForProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "voter",
            "type": "pubkey"
          },
          {
            "name": "forAgainst",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "voteForStateProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "voteReceiptForAuthorityElection",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "propertySystem",
            "type": "pubkey"
          },
          {
            "name": "authorityKey",
            "type": "pubkey"
          },
          {
            "name": "authorityType",
            "type": {
              "defined": {
                "name": "authorityType"
              }
            }
          }
        ]
      }
    },
    {
      "name": "votedForNewThreshold",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "newThreshold",
            "type": "pubkey"
          },
          {
            "name": "voter",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "votedForPropertyProposal",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposalKey",
            "type": "pubkey"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "voterReciept",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "proposal",
            "type": "pubkey"
          },
          {
            "name": "voter",
            "type": "pubkey"
          },
          {
            "name": "votingPower",
            "type": "u64"
          },
          {
            "name": "vote",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
