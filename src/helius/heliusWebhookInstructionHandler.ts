import type { Request, Response } from "express";
import asyncHandler from "../utils/AsyncHandler";
import { HeliusWebhookSchema } from "../schemaValidation/heliusWebhookDataSchema";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { FindProgramIdIndex } from "./findProgramIndex";

export const heliusRaWDataHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const webhookSchema = HeliusWebhookSchema.safeParse(req.body);

    if (!webhookSchema.success) {
      throw new ApiError(400, "check your json schema");
    }

   await FindProgramIdIndex(webhookSchema.data.transaction.transaction.message);

    return res.status(200).json(
      new ApiResponse(
        200,
        {
         message:"instruction Parse SuccessFully"
        },
       
      )
    );
  }
);
