const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Character = sequelize.define('Character', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  health: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mana: {
    type: DataTypes.INTEGER,
    allowNull: true  // Assurez-vous que la colonne mana est incluse ici
  },
  strength: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  agility: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  intelligence: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  experienceToNextLevel: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gold: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  weaponId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  armorId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'characters',
  timestamps: false
});

module.exports = Character;
