import { UserDb } from "../models/usermethods.js";
import { ApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsyncHandler.js";
import type { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";

import type  {User} from "../generated/prisma/client.js";

export interface AuthRequest extends Request {
  user?: Omit<User, "password" | "refreshToken">;
}

type AccessTokenPayload = {
  id: string;
  email: string;
  username: string;
  fullName: string;
}

export const verifyJWT = asyncHandler(
    async (
        req:AuthRequest,
        _:Response,
        next:NextFunction
    )=>{


   try {

     const token = req.cookies?.accessToken ||  req.header("Authorization")?.replace("Bearer ", "")
 
    


     if (!token){
         throw new ApiError(401,"Unauthorized request")
     }
 
     const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET!) as AccessTokenPayload
 
     const user = await UserDb.user.findUnique({
         where:{
             id:decodedToken?.id
         },
         omit:{
             password:true,
             refreshToken:true
         }
    } )
 
    if(!user){
     throw new ApiError(401,"Incalid Access Token")
    }
 
     req.user = user
 
     next()
 
     }
    catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
    throw new ApiError(401, error.message);
  }

  throw error;    }
}
)