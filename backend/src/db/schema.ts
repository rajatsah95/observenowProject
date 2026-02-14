import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const savedContacts = sqliteTable("saved_contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone"),
  company: text("company"),
  createdAt: text("created_at").default(new Date().toISOString())
});
