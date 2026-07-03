import bcrypt from "bcrypt";
// import { PrismaClient } from "../generated/prisma/client.js";
import type { StringValue } from "ms";
// const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
import { prisma } from "../prismaclient.js";
import type  {User} from "../generated/prisma/client.js";


export const UserDb = prisma.$extends({
  query: {
    user: {
      async create({ args, query }) {
        const data = args.data;

        if (typeof data.password === "string" && data.password) {
          data.password = await bcrypt.hash(data.password, 10);
        }

        return query(args);
      },
    },
  },
  model: {
    user: {
      async isPasswordcorrect(
        password: string,
        hashPassword: string
      ): Promise<boolean> {
        return await bcrypt.compare(password, hashPassword);
      },

      generateAccessToken(user: Pick<User, "id" | "email" | "fullName" | "username">): string {
        return jwt.sign(
          {
            id: user.id,
            email: user.email,
            username:user.username,
            fullName: user.fullName,
          },
          process.env.ACCESS_TOKEN_SECRET!,
          {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY as StringValue,
          }
        );
      },

      generateRefreshToken(user: Pick<User, "id">):string {
        return jwt.sign(
          {
            id: user.id,
          },
          process.env.REFRESH_TOKEN_SECRET!,
          {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY as StringValue,
          }
        );
      },
    },
  },
});
