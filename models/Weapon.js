const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Weapon = sequelize.define('Weapon', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  damageBonus: DataTypes.INTEGER
}, {
  tableName: 'weapons'
});

module.exports = Weapon;
