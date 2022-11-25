const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Todo = sequelize.define("todos", {
  id: {
    autoIncrement,
    primaryKey,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Todo;
