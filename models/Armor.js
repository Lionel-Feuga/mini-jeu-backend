const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Armor = sequelize.define('Armor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  defenseBonus: DataTypes.INTEGER
}, {
  tableName: 'armors'
});

module.exports = Armor;
