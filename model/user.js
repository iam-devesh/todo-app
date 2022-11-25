const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const todo = require("./todo");

const User = sequelize.define("User", {
  id: {
    autoIncrement,
    primaryKey,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwordhash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(todo, {
  foreignKey: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

todo.belongsTo(User);
module.exports = User;
