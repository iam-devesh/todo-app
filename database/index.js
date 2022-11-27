const { Sequelize } = require("sequelize");
const {
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
} = require("../ config");

exports.sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: "localhost",
    port: 5435,
    dialect: "postgres",
  }
);
