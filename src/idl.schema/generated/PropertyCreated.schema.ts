import { z } from "zod";

export const PropertyCreatedSchema = z.object({
    proposal_key: z.string(),
    property_key: z.string(),
    propoerty_system: z.string(),
});