
import { Sequelize } from "sequelize";
import { sequelize } from "./models/db.js";
import "./models/userModel.js";
import "./models/Device.js";

const database = process.env.DB_NAME || "dwayne-routing";
const rootSequelize = new Sequelize({
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),
  dialect: "mysql",
});

try {
  const quotedDatabase =
    rootSequelize.getQueryInterface().quoteIdentifier(database);
  await rootSequelize.query(`CREATE DATABASE IF NOT EXISTS ${quotedDatabase};`);
  console.log(`Database '${database}' is ready`);
  await sequelize.authenticate();
  console.log("Connected to MySQL database");
  await sequelize.sync();
  console.log("Tables created for all models");
} catch (err) {
  console.error("Migration failed:", err);
  process.exitCode = 1;
} finally {
  await rootSequelize.close();
  await sequelize.close();
}
