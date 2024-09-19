import { timestamp, text, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const LinksTable = pgTable("links", {
    id: serial('id').primaryKey().notNull(),
    url: text('url').notNull(),
    short: varchar('short', { length: 50 }),
    createdAt: timestamp('created_at').defaultNow()
})

export const LinksTable2 = pgTable("links2", {
    id: serial('id').primaryKey().notNull(),
    url: text('url').notNull(),
    short: varchar('short', { length: 10 }),
    createdAt: timestamp('created_at').defaultNow()
})