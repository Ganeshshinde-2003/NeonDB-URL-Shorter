import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/app/lib/schema.js",
  out: "./src/migrations",
  dbCredentials: {
    url: "postgresql://neondb_owner:mUH2NbtvXij3@ep-shrill-mud-a50ebozi.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
