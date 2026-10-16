import { GetMultipleAccountsResponseSchema } from "../schemaValidation/heliusGetTokenOwnerAddressFromAtaSchema";
import { ApiError } from "../utils/errors/ApiError";
import { helius } from "./heliusConnection";
import { type Address } from "@solana/kit";

export const getOwnerFromHeliusRpc = async (ataWithoutOwners: Address[]) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "1",
      method: "getMultipleAccounts",
      params: [ataWithoutOwners, { encoding: "jsonParsed" }],
    }),
  };

  try {
    const data = await helius.getMultipleAccounts(ataWithoutOwners, {
      commitment: "finalized",
      encoding: "jsonParsed",
    });

    const parsedResponse = GetMultipleAccountsResponseSchema.parse(data);

    const ataToOwner = new Map<string, string>();

    parsedResponse.value.flatMap((account, index) => {
      if (!account) return [];

      const owner = account.data.parsed.info.owner;

      const ataKey = ataWithoutOwners[index]!.toString();

      ataToOwner.set(ataKey, owner);
    });
    return ataToOwner;
  } catch (error) {
    throw new ApiError(500, "Helius Server Busy");
  }
};
