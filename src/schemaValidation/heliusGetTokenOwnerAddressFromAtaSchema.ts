import { z } from "zod";

const ExtensionSchema = z.object({
  extension: z.string(),
  state: z
    .object({
      transferring: z.boolean(),
    })
    .optional(),
});

const TokenAmountSchema = z.object({
  amount: z.string(),
  decimals: z.number(),
  uiAmount: z.number().nullable(),
  uiAmountString: z.string(),
});

const ParsedInfoSchema = z.object({
  extensions: z.array(ExtensionSchema),
  isNative: z.boolean(),
  mint: z.string(),
  owner: z.string(),
  state: z.string(),
  tokenAmount: TokenAmountSchema,
});

const ParsedDataSchema = z.object({
  program: z.string(),
  parsed: z.object({
    info: ParsedInfoSchema,
    type: z.string(),
  }),
  space: z.bigint(),
});

const AccountSchema = z.object({
  lamports: z.bigint(),
  data: ParsedDataSchema,
  owner: z.string(),
  executable: z.boolean(),
  rentEpoch: z.bigint(),
  space: z.bigint(),
});

export const GetMultipleAccountsResponseSchema = z.object({
  context: z.object({
    slot: z.bigint(),
    apiVersion: z.string().optional(),
  }),
  value: z.array(AccountSchema.nullable()),
});

export type GetMultipleAccountsResponse = z.infer<
  typeof GetMultipleAccountsResponseSchema
>;