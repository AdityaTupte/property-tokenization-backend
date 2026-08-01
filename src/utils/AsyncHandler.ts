import type { NextFunction,Response,RequestHandler, Request } from "express"
import { ApiError } from "./ApiError.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";


const asyncHandler =
 (requestHandler:RequestHandler):RequestHandler =>
    async (req,res,next)=>{

    try {
        
    await requestHandler(req,res,next)
        
    } catch (error:unknown) {
        
      if (error instanceof ApiError) {
        res.status(error.statusCode).json({
          success: error.success,
          message: error.message,
          errors: error.errors,
        });
        return;
  }
      // if(error instanceof PrismaClientKnownRequestError)
  

        res.status(500).json({
            success:false,
            message:"Internal server Error"
        });
    }
}


export default asyncHandler;