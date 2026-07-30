import { ApiError } from "../utils/ApiError";

import type { InstructionHandler } from "../types&interface/solanaInstrcution.type";

import { handleCreatePropertySystem } from "../controllers/solanaProgram.controller.ts/propertySystemCreation.controller/createPropertySystem";

const instructionMap: Record<string, InstructionHandler> = {
  create_property_system: handleCreatePropertySystem,
};

export const solanaInstructionHandler = (
  instruction: string
) => {
  const handler = instructionMap[instruction];

  if (!handler) throw new ApiError(500, "No instructionHandler Available");

  return handler;
};
