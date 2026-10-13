// import z from "zod";



// export const instructionsSchema  = z.object({
//                     accounts: z.array(z.number()),
//                     data: z.string(),
//                     programIdIndex: z.number(),
//                     stackHeight: z.number().optional(),
//                 })


// export const messageSchema = z.object({
//                 accountKeys : z.array(z.string()),
//                 instructions : z.array(
//                 instructionsSchema
//             )            
//             })

// export const metaData = z.object({
//                 logMessages:z.array(z.string()),
// })

// export const HeliusWebhookSchema = z.object({
//     signature:z.string(),

//     transaction : z.object({
//         blockTime : z.number(),
//         slot:z.number(),
//         version:z.string(),
//         meta:metaData,
//         transaction:z.object({
//             message:messageSchema
            
//         })
//     })
// })



import z from "zod";

export const instructionsSchema = z.object({
  accounts: z.array(z.number()),
  data: z.string(),
  programIdIndex: z.number(),
  stackHeight: z.number(),
});

export const innerInstructionsSchema = z.object({
  index: z.number(),
  instructions: z.array(instructionsSchema),
});

export const tokenAmountSchema = z.object({
  amount: z.string(),
  decimals: z.number(),
  uiAmount: z.number().nullable(),
  uiAmountString: z.string(),
});

export const tokenBalanceSchema = z.object({
  accountIndex: z.number(),
  mint: z.string(),
  owner: z.string().optional(),
  programId: z.string().optional(),
  uiTokenAmount: tokenAmountSchema,
});

export const messageSchema = z.object({
  accountKeys: z.array(z.string()),
  instructions: z.array(instructionsSchema),
});

export const metaData = z.object({
  err: z.unknown().nullable().optional(),
  fee: z.number().optional(),

  logMessages: z.array(z.string()),

  innerInstructions: z
    .array(innerInstructionsSchema)
    .nullable()
    .optional(),

  preTokenBalances: z
    .array(tokenBalanceSchema)
    .optional(),

  postTokenBalances: z
    .array(tokenBalanceSchema)
    .optional(),
});

export const HeliusWebhookSchema = z.object({
  signature: z.string(),

  transaction: z.object({
    blockTime: z.number(),
    slot: z.number(),
    version: z.union([z.string(), z.number()]),

    meta: metaData,

    transaction: z.object({
      message: messageSchema,
      signatures: z.array(z.string()).optional(),
    }),
  }),
});

export type HeliusWebhook = z.infer<
  typeof HeliusWebhookSchema
>;

export type InnerInstruction = z.infer<
  typeof innerInstructionsSchema
>;



// for HELIUS RPC

// export const instructionsSchema = z.object({
//     accounts: z.array(z.number()),
//     data: z.string(),
//     programIdIndex: z.number(),
//     stackHeight: z.number().optional(),
// });

// export const messageSchema = z.object({
//     accountKeys: z.array(z.string()),
//     instructions: z.array(instructionsSchema),
// });

// export const metaData = z.object({
//     logMessages: z.array(z.string()),
// });

// export const HeliusWebhookSchema = z.array(
//     z.object({
//         blockTime: z.number(),
//         slot: z.number(),
//         version: z.string(),

//         meta: metaData,

//         transaction: z.object({
//             message: messageSchema,

//             // ✅ Signature is here
//             signatures: z.array(z.string()),
//         }),
//     })
// );
export default instructionsSchema;
