import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
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
// import "dotenv/config";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "@prisma/client";
// export async function createPrismaClient() {
//   try {
//     const adapter = new PrismaPg({
//       connectionString: process.env.DATABASE_URL!,
//     });
//     const prisma = new PrismaClient({
//       adapter,
//     });
//     await prisma.$connect();
//     console.log("Connected successfully");
//     return prisma;
//   } catch (error) {
//     console.error("Prisma initialization failed:", error);
//     throw error;
//   }
// }
// import "dotenv/config";
// // import pg from "pg";
// import { Client,Pool } from "pg";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "@prisma/client";
// // const { Pool } = pg;
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
// const adapter = new PrismaPg(
//   pool,
//   // { schema: "mySchema" }
// );
// const client = pool.connect()
// client
// export const prisma = new PrismaClient({
//   adapter,
// });
//# sourceMappingURL=prismaclient.js.map