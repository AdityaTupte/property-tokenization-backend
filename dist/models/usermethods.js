import bcrypt from "bcrypt";
// const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
import { prisma } from "../prismaclient.js";
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
            async isPasswordcorrect(password, hashPassword) {
                return await bcrypt.compare(password, hashPassword);
            },
            generateAccessToken(user) {
                return jwt.sign({
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    fullname: user.fullName,
                }, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
                });
            },
            generateRefreshToken(user) {
                return jwt.sign({
                    id: user.id,
                }, process.env.REFRESH_TOKEN_SECRET, {
                    expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
                });
            },
        },
    },
});
//# sourceMappingURL=usermethods.js.map