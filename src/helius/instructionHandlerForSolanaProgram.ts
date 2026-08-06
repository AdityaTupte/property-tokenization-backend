import { ApiError } from "../utils/ApiError";

import type { InstructionHandler } from "../types&interface/solanaInstrcution.type";

import { handleCreatePropertySystem } from "../controllers/solanaProgram.controller.ts/propertySystemCreation.controller/createPropertySystem.controller";
import { handleAddTrustee } from "../controllers/solanaProgram.controller.ts/propertySystemCreation.controller/addTrustee.controller";
import { handleAddArbitrator } from "../controllers/solanaProgram.controller.ts/propertySystemCreation.controller/addArbitrator.controller";

const instructionMap: Record<string, InstructionHandler> = {
  create_property_system: handleCreatePropertySystem,
  add_trustee : handleAddTrustee,
  add_arbitrator: handleAddArbitrator
};

export const solanaInstructionHandler =  (
  instruction: string
) => {
  const handler =  instructionMap[instruction];

  if (!handler) throw new ApiError(500, "No instructionHandler Available");

  return handler;

};
