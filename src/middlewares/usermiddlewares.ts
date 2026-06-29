import bcrypt from "bcrypt";
// import { PrismaClient } from "../generated/prisma/client.js";
import type { StringValue } from "ms";
// const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
import { prisma } from "../prismaclient.js";
import { User } from "@prisma/client";

const user = prisma.$extends({
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

      generateAccessToken(,user: {
        id: string;
        email: string;
        username: string;
        fullname: string;
      }): string {
        return jwt.sign(
          {
            id: user.id,
            email: user.email,
            username: user.username,
            fullname: user.fullname,
          },
          process.env.ACCESS_TOKEN_SECRET!,
          {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY as StringValue,
          }
        );
      },

      generateRefreshToken(id: string) {
        return jwt.sign(
          {
            id: id,
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
