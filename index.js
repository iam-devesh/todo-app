const express = require("express");
const { PORT } = require("./ config");
const { sequelize } = require("./database");

const app = express();
app.use(express.json());

const main = async () => {
  try {
    await sequelize.sync();
    console.log("Connection with DB established");

    app.listen(PORT || 8081, () => {
      console.log("server is running on port ", PORT);
    });
  } catch (err) {
    console.error("Unable to connect with DB", err);
  }
};
main();
