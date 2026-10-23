import type {
  instructionsSchema,
  messageSchema,
  metaSchema,
} from "../helius/findProgramIndex";
import type { CompletedExecution } from "./solanaLogParser.interface";

export interface InstructionNameAndData {
  name: string;
  data: instructionsSchema;
}

export interface InstructionDataInterface {
  TransactionAccountskey: string[];
  InstructionNameAndData: InstructionNameAndData[];
  blockTime: number;
  log: CompletedExecution[];
}

export interface TokenTransferInstructionInterface {
    InnerInstructions : instructionsSchema[]
    slot: number;
    TransactionAccountskey: string[];
    programData?:string[]  
  };
export interface TokenTransferDbEventSchema  {

            sourceOwner:string | undefined | null,
            sourceAta:string| undefined | null,
            mint:string| undefined | null,
            recieverOwner:string| undefined | null,
            recieverAta:string| undefined | null,
            programEventData:string| undefined | null,
            slot : number,
          }
