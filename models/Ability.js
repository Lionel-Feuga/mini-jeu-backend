const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Ability = sequelize.define(
  "Ability",
  {
    characterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    manaCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  {
    tableName: "abilities",
  }
);

module.exports = Ability;
