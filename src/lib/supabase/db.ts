import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("No DB Url");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });
const migrarateDB = async () => {
  try {
    console.log("Migrating client");
    await migrate(db as any, { migrationsFolder: "./migrations" });
    console.log("Successfully Migrating");
  } catch (error) {
    console.log("Error Migrating client: ", error);
  }
};
migrarateDB();
export default db;
