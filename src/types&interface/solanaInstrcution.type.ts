import type { Instructions, messageSchema } from "../helius/findProgramIndex";

export type InstructionHandler = (data: messageSchema, instruction :Instructions) => unknown;