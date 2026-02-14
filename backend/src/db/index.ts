import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

const sqlite = new Database("contacts.db");

sqlite.exec(`
CREATE TABLE IF NOT EXISTS saved_contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  company TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
`);

export const db = drizzle(sqlite);
