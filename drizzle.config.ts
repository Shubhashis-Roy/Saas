import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("Can't find database url");
}

export default defineConfig({
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionSring: process.env.DATABASE_URL || "",
  },
} satisfies Config);
