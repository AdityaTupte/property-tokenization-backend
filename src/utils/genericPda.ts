import { program } from "../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import { type Address } from "@solana/kit";
import { ApiError } from "./ApiError.js";

type AccountName = keyof typeof program.account;

export const GenericPda = async (name: AccountName, public_key: Address) => {
  try {
    const account = await program.account[name].fetch(public_key);

    return account;
  } catch (error) {
    throw new ApiError(404, ` pda account not found `);
  }
};
