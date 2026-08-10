import { ApiError } from "../utils/ApiError";

import type { InstructionHandler } from "../types&interface/solanaInstrcution.type";
import * as country from "../controllers/solanaProgram.controller.ts/countryCreation.controller/countryImportLib" 
import * as propertySystem from "../controllers/solanaProgram.controller.ts/propertySystemCreation.controller/propertySystemImporLib"


const instructionMap: Record<string, InstructionHandler> = {
  create_property_system: propertySystem.handleCreatePropertySystem,
  add_trustee :  propertySystem.handleAddTrustee,
  add_arbitrator:  propertySystem.handleAddArbitrator,

  create_country_proposal:country.handleCreateCountryProposal,
  create_approve_country_authority:country.handlerCreateAuthorityToApproveCountry,
  approve_country:country.handleApproveCountryProposal,
  execute_country_propsal:country.handleExecuteCountryProposal,
  add_country_authority:country.handleAddAuthorityForCountry,
  
};

export const solanaInstructionHandler =  (
  instruction: string
) => {
  const handler =  instructionMap[instruction];

  if (!handler) throw new ApiError(500, "No instructionHandler Available");

  return handler;

};
