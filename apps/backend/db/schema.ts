import { index, int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  username: text().notNull().unique(),
  email: text().notNull(),
  password: text().notNull()
}, (table) => [
  index("user_username_idx").on(table.username)
])

export const userRegisterSchema = createInsertSchema(userTable);


