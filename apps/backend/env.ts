export const DB_FILE_NAME = "file:sqlite.db";
export const SECRET_KEY_BASE = process.env.SECRET_KEY_BASE ?? (process.env.NODE_ENV !== "production" ? "hello, world" : new Error("please provide secret key base as an env in prod"));

if(SECRET_KEY_BASE instanceof Error) {
  throw SECRET_KEY_BASE;
}