import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";
// import { PrismaClient } from "@prisma/client";
import { error } from "node:console";
const connectionString = `${process.env.DATABASE_URL}`;
// const adapter = new PrismaPg({ 
//   connectionString,
// });
// const prisma = new PrismaClient({ adapter });
const adapter = new PrismaPg({
    connectionString,
    // connectionTimeoutMillis:5000
});
export const prisma = new PrismaClient({ adapter });
export const connectionDB = async () => {
    try {
        await prisma.$connect();
        await prisma.$queryRaw `SELECT 1`;
        // throw error;
        console.log("Backend connected to the Database Successfully");
    }
    catch (error) {
        console.log("Postgresql Database connection error", error);
        process.exit(1);
    }
};
//# sourceMappingURL=prismaclient.js.map