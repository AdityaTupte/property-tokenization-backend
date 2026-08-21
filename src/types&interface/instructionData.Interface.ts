import type { instructionsSchema, messageSchema } from "../helius/findProgramIndex";

export interface InstructionNameAndData {
    name: string,
    data: instructionsSchema
}



export interface InstructionDataInterface {
    transaction : messageSchema,
    InstructionNameAndData : InstructionNameAndData[]
    blockTime : number
}





