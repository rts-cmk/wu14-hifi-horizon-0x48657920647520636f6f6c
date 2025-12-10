import { defineConfig } from "drizzle-kit";
import * as env from "./env.ts"
export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DB_FILE_NAME
  }
})

