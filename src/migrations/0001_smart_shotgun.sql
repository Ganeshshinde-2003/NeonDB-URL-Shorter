CREATE TABLE IF NOT EXISTS "links2" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"short" varchar(10),
	"created_at" timestamp DEFAULT now()
);
