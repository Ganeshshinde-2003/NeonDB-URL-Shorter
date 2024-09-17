import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/app/lib/schema.js",
  out: "./src/migrations",
  dbCredentials: {
    url: "postgresql://neondb_owner:0srAdXlpRe8i@ep-sweet-rice-a54dtdnr.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
