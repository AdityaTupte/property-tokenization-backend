
import type { CompletedExecution, EventData, ExecutionFrame } from "../types&interface/solanaLogParser.interface";

const INVOKE_REGEX = /^Program (\S+) invoke \[(\d+)\]$/;
const SUCCESS_REGEX = /^Program (\S+) success$/;
const INSTRUCTION_REGEX = /^Program log: Instruction: (.+)$/;
const PROGRAM_DATA_PREFIX = "Program data: ";

export function parseSolanaLogs(
  logMessages: string[]
  // targetProgramId: string
): CompletedExecution[] {
  const stack: ExecutionFrame[] = [];
  const roots: CompletedExecution[] = [];

  for (const log of logMessages) {
    // ================================================== // INVOKE // ==================================================
    const invoke = log.match(INVOKE_REGEX);
    if (invoke) {
      
      const [, programId, depthString] = invoke;
      const depth = Number(depthString);
      if (programId === undefined || depthString === undefined) {
        continue;
      }
     

      const frame: ExecutionFrame = {
        programId,
        depth,
        events: [],
        children: [],
      };
      if (stack.length > 0) {
        stack[stack.length - 1]?.children.push(frame);
      }

      stack.push(frame);
    }

    // ================================================== // INSTRUCTION LOG // ==================================================
    const instruction = log.match(INSTRUCTION_REGEX);
    if (instruction) {
      const [, instructionName] = instruction;
      const current = stack[stack.length - 1];
      if (!current) {
        continue;
      }
      current.instructionName = instructionName;
      continue;
    } // ================================================== // PROGRAM DATA // ==================================================
    if (log.startsWith(PROGRAM_DATA_PREFIX)) {
      const encoded = log.slice(PROGRAM_DATA_PREFIX.length);
      const current = stack[stack.length - 1];
      if (!current) {
        continue;
      }
      const event = decodeProgramData(encoded);
      current.events.push(event);
      continue;
    } // ================================================== // SUCCESS // ==================================================
    const success = log.match(SUCCESS_REGEX);
    if (success) {
      const [, programId] = success;
      const current = stack[stack.length - 1];
      if (!current) {
        continue;
      }
      if (current.programId !== programId) {
        console.warn("Execution stack mismatch", {
          expected: current.programId,
          received: programId,
          depth: current.depth,
        });
        continue;
      }
      const completed = stack.pop()!;

      if (stack.length > 0) {
        const parent = stack[stack.length - 1];
      } else {
        roots.push({
          ...completed,
        });
      }
      continue;
    }
  }
  return roots;
}

function decodeProgramData(encoded: string): EventData {
  const buffer = Buffer.from(encoded, "base64");
  const discriminator = buffer.subarray(0, 8).toString("hex");
  const data = buffer.subarray(8).toString("base64");
  return {
    raw: encoded,
    discriminator,
    data,
  };
}
