import { defineConfig } from "drizzle-kit";
import * as env from "./src/env.ts"
export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DB_FILE_NAME
  }
})

