import { PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import type { propertySystemAccountType } from "../../types&interface/PdaTypes/propertySystem";
import { BN } from "bn.js";

export function ConversionFunction ( data: Record<string, unknown>)  {

    return   Object.entries(data).map(
      ([key,val]: [string,unknown] )  =>{
          if(anchor.BN.isBN(val)) return val.toNumber();

          if(val instanceof anchor.web3.PublicKey) return val.toString();

      }
    )

     ;


}  