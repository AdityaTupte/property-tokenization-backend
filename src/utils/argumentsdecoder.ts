import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { decoder } from "../idl.schema/SolanaProgramHelper/anchorIdlHelper";
import type { Instruction } from "@coral-xyz/anchor";

export const solanaArgs = (
    data:string,
):Instruction | null => {

    const bytes = Buffer.from(bs58.decode(data));
    
    const decodedData = decoder.decode(bytes)

    return decodedData;

}