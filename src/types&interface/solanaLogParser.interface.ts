export type EventData = {
  raw: string;
  discriminator: string;
  data: string;
};

export type ExecutionFrame = {
  programId: string;
  depth: number;
  instructionName?: string;
  events: EventData[];
  children: ExecutionFrame[];
};
export type CompletedExecution = ExecutionFrame & { parent?: CompletedExecution };