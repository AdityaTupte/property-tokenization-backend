import type { Request, Response } from "express";
// import { readdir, writeFile } from "node:fs/promises";
import asyncHandler from "../utils/AsyncHandler";
import { HeliusWebhookSchema } from "../schemaValidation/heliusWebhookDataSchema";
import { ApiError } from "../utils/errors/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { FindProgramIdIndex } from "./findProgramIndex";
import { prisma } from "../prismaclient";
import { TransactionContext } from "../utils/prisamTransactionClass";


export const heliusRaWDataHandler = asyncHandler(
  async (req: Request, res: Response) => {
    // console.log("REQUEST BODY : =>>>>>>>");
    // console.dir(req.body, { depth: null });
    // const bodyFiles = await readdir(process.cwd());
    // const nextBodyNumber =
    //   bodyFiles.reduce((max, file) => {
    //     const match = /^body(\d+)\.json$/.exec(file);
    //     return match ? Math.max(max, Number(match[1])) : max;
    //   }, 0) + 1;
    // await writeFile(
    //   `body${nextBodyNumber}.json`,
    //   JSON.stringify(req.body, null, 2)
    // );

    const webhookSchema = HeliusWebhookSchema.safeParse(req.body);

    if (!webhookSchema.success) {
      throw new ApiError(400, "check your json schema",webhookSchema.error.issues);
    }

    //TODO use rediis to check th signature if not resent then check in the db and save in redis

  

    console.log("PARSED DATA :=>>>>>>>>>", webhookSchema);
    
    const signature = await prisma.signature.findFirst({
      where: {
        signature: webhookSchema.data.signature,
      },
    });

    if (signature)
      throw new ApiError(
        400,
        "Since the signature is already provided, signature parsing is not required."
      );

    await FindProgramIdIndex(
      webhookSchema.data.transaction.transaction.message,
      webhookSchema.data.transaction.blockTime,
      webhookSchema.data.transaction.meta
    );

     const ctx = new TransactionContext();

       ctx.add(async(tx) =>{

        await  tx.signature.create({
            data:{
              signature:webhookSchema.data.signature
            }
          })

        })

    await ctx.execute();

    return res.status(200).json(
      new ApiResponse(200, {
        message: "instruction Parse SuccessFully",
      })
    );
  }
);
