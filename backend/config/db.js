import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

// const db = new pg.Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "testAccounts",
//   password: "123",
//   port: 5432,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// });

export default db;
