import type { instructionsSchema, messageSchema,metaSchema } from "../helius/findProgramIndex";
import type { CompletedExecution } from "./solanaLogParser.interface";

export interface InstructionNameAndData {
    name: string,
    data: instructionsSchema,
}



export interface InstructionDataInterface {
    TransactionAccountskey : string[],
    InstructionNameAndData : InstructionNameAndData[]
    blockTime : number,
    log:CompletedExecution[],
}







