import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { LinksTable } from "./schema";

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

export async function helloworld() {
  const [dbResponse] = await sql`SELECT NOW()`;
  return dbResponse;
}

async function configureDatebase() {
  await sql`CREATE TABLE IF NOT EXISTS "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"short" varchar(10),
	"created_at" timestamp DEFAULT now()
);`;
}

configureDatebase().catch((err) => console.log("db error", err));

export async function addLink(url) {
  const newLink = { url: url };
  return await db.insert(LinksTable).values(newLink).returning();
}

export async function getLinks(limit, offset) {
  const lookupLimit = limit || 10;
  const lookupOffset = offset || 0;
  return await db
    .select()
    .from(LinksTable)
    .limit(lookupLimit)
    .offset(lookupOffset);
}

export async function getMinLinks(limit, offset) {
  const lookupLimit = limit || 10;
  const lookupOffset = offset || 0;
  return await db
    .select({
      id: LinksTable.id,
      url: LinksTable.url,
      timestamp: LinksTable.createdAt,
    })
    .from(LinksTable)
    .limit(lookupLimit)
    .offset(lookupOffset);
}
