import jwt from "jsonwebtoken"

export type RegisterUserBody = {
  fullName: string;
  email: string;
  username: string;
  password: string;
};



export interface AccessTokenPayload extends jwt.JwtPayload {
  id: string;
  email: string;
}

export interface RefreshTokenPayload extends jwt.JwtPayload {
  id: string;
}