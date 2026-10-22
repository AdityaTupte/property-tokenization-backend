
import { BorshEventCoder } from "@coral-xyz/anchor";
import bs58 from "bs58";
import type { HeliusWebhook } from "../schemaValidation/heliusWebhookDataSchema";
import type { ExecutionFrame,EventData } from "../types&interface/solanaLogParser.interface";

interface CombinedInstruction {
  name: string;
  data: {
    raw: string;
    accounts: number[];
    programId: string;
    programIdIndex: number;
    discriminator: string;
    event?: EventData;
  };
}


const INVOKE_REGEX = /^Program (\S+) invoke \[(\d+)\]$/;
const SUCCESS_REGEX = /^Program (\S+) success$/;
const FAILED_REGEX = /^Program (\S+) failed(?::.*)?$/;
const INSTRUCTION_REGEX = /^Program log: Instruction: (.+)$/;

function parseExecutionFrames(
  logs: string[],
  eventCoder: BorshEventCoder,
): ExecutionFrame[] {
  const stack: ExecutionFrame[] = [];
  const roots: ExecutionFrame[] = [];

  for (const log of logs) {
    const invoke = log.match(INVOKE_REGEX);

    if (invoke) {
      const frame: ExecutionFrame = {
        programId: invoke[1]!,
        depth: Number(invoke[2]),
        events: [],
        children: [],
      };

      const parent = stack[stack.length - 1];

      if (parent) {
        parent.children.push(frame);
      } else {
        roots.push(frame);
      }

      stack.push(frame);
      continue;
    }

    const current = stack[stack.length - 1];

    if (!current) continue;

    const instruction = log.match(INSTRUCTION_REGEX);

    if (instruction) {
      current.instructionName = instruction[1];
      continue;
    }

    if (log.startsWith("Program data: ")) {
      const encoded = log.slice("Program data: ".length);

      const decoded = eventCoder.decode(encoded);

      if (decoded && current.programId) {
        current.events.push({
          data: encoded,
        });
      }

      continue;
    }

    const completion = log.match(SUCCESS_REGEX) ?? log.match(FAILED_REGEX);

    if (completion) {
      const completed = stack.pop();

      if (completed?.programId !== completion[1]) {
        throw new Error(
          `Execution stack mismatch: expected ${completed?.programId}, received ${completion[1]}`,
        );
      }
    }
  }

  return roots;
}

export function combineInnerInstructionsWithEvents(
  webhook: HeliusWebhook,
  targetProgramId: string,
  eventCoder: BorshEventCoder,
): CombinedInstruction[] {
  const { logMessages, innerInstructions } = webhook.transaction.meta;

  const accountKeys =
    webhook.transaction.transaction.message.accountKeys;

  if (!innerInstructions?.length) {
    return [];
  }

  const roots = parseExecutionFrames(logMessages, eventCoder);
  const results: CombinedInstruction[] = [];

  for (const group of innerInstructions) {
    const root = roots[group.index];

    if (!root) continue;

    const innerFrames: ExecutionFrame[] = [];

    function collectChildren(frame: ExecutionFrame): void {
      for (const child of frame.children) {
        innerFrames.push(child);
        collectChildren(child);
      }
    }

    collectChildren(root);

    const usedFrames = new Set<ExecutionFrame>();

    for (const instruction of group.instructions) {
      const programId = accountKeys[instruction.programIdIndex];

      if (!programId || programId !== targetProgramId) {
        continue;
      }

      const frame = innerFrames.find(
        (candidate) =>
          !usedFrames.has(candidate) &&
          candidate.programId === programId &&
          candidate.depth === instruction.stackHeight,
      );

      if (!frame) continue;

      usedFrames.add(frame);

      const instructionBytes = bs58.decode(instruction.data);
      const discriminator = Buffer.from(
        instructionBytes.subarray(0, 8),
      ).toString("hex");

      const event = frame.events[0];

      results.push({
        name: frame.instructionName ?? "Unknown",
        data: {
          raw: instruction.data,
          accounts: instruction.accounts,
          programId,
          programIdIndex: instruction.programIdIndex,
          discriminator,
          ...(event ? { event } : {}),
        },
      });
    }
  }

  return results;
}

