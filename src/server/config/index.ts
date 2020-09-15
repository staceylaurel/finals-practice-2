import * as dotenv from "dotenv";

dotenv.config();

export default {
  mysql: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
    host: process.env.DB_HOST,
  },
};
