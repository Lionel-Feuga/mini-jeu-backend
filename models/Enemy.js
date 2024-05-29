const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Enemy = sequelize.define("Enemy", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: DataTypes.STRING,
  },
  {
    tableName: "enemies",
  }
);

module.exports = Enemy;
