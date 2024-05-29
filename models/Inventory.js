const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Inventory = sequelize.define('Inventory', {
  characterId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weaponId: DataTypes.INTEGER,
  armorId: DataTypes.INTEGER,
  gold: DataTypes.INTEGER
}, {
  tableName: 'inventory'
});

module.exports = Inventory;
