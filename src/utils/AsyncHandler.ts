import type { NextFunction,Response,RequestHandler, Request } from "express"
import { ApiError } from "./ApiError.js";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/client";



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

      if (error instanceof PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":

        res.status(409).json({
          message:error.meta,
          success: false,
          cause:error.cause 
        })
         break
        case "P2003":
          res.status(400).json({
          message:error.meta,
          success: false,
          cause:error.cause
        })
          break
        case "P2025":
          res.status(404).json({
          message:error.meta,
          success: false,
          cause:error.cause
        })
         break
        default:
          res.status(400).json({
          error:error,
          message:`Database error code: ${error.code}`  
        })
      }
      return;
    }

    if (error instanceof PrismaClientValidationError) {
      throw { status: 400, message: "Invalid data format or missing required fields." };
    }
     
  

        res.status(500).json({
            success:false,
            message:"Internal server Error"
        });
    }
}


export default asyncHandler;