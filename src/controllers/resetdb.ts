import { prisma } from "../prismaclient";



(  async () =>{
  try {
    // 1. Fetch all table names dynamically from the PostgreSQL 'public' schema
    const tablenames = await prisma.$queryRaw<
      Array<{ tablename: string }>
    >`SELECT tablename FROM pg_tables WHERE schemaname='public'`;

    // 2. Format names, exclude Prisma's migration tracking table, and wrap safely
    const tables = tablenames
      .map(({ tablename }) => tablename)
      .filter((name) => name !== "_prisma_migrations")
      .map((name) => `"public"."${name}"`)
      .join(", ");

    if (!tables) {
      console.log("No tables found to truncate.");
      return;
    }

    // 3. Truncate all tables simultaneously, reset IDs, and cascade foreign keys
    await prisma.$executeRawUnsafe(
      `TRUNCATE TABLE ${tables} RESTART IDENTITY CASCADE;`
    );
    
    console.log("PostgreSQL database successfully reset (tables maintained)!");
  } catch (error) {
    console.error("Failed to reset PostgreSQL database:", error);
    throw error;
  }
}


)();