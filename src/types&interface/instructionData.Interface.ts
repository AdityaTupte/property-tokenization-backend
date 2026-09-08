import type { instructionsSchema, messageSchema,metaSchema } from "../helius/findProgramIndex";

export interface InstructionNameAndData {
    name: string,
    data: instructionsSchema,
}



export interface InstructionDataInterface {
    transaction : messageSchema,
    InstructionNameAndData : InstructionNameAndData[]
    blockTime : number,
    meta:metaSchema,
}





