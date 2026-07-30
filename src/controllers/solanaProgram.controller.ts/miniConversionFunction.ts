import { PublicKey } from "@solana/web3.js";
import {BN} from "bn.js";

export function ConversionFunction<T extends Record<string, any>>(account: T) {
  return Object.fromEntries(
    Object.entries(account).map(([key, value]) => {
      if (value instanceof PublicKey) {
        return [key, value.toBase58()];
      }

      if (BN.isBN(value)) {
        return [key, value.toNumber()]; 
      }

      return [key, value];
    })
  );
}