import type { Request, Response } from "express";
import asyncHandler from "../utils/AsyncHandler";



export const heliusRawDataAccept = asyncHandler(

    async (
        req:Request,
        res:Response,
    ) => {
        
        console.log("Webhook received!");

        console.dir(req.body, { depth: null });

        res.sendStatus(200);

    }


);