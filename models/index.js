const sequelize = require('../db');
const Character = require('./Character');
const Ability = require('./Ability');
const Weapon = require('./Weapon');
const Armor = require('./Armor');
const Inventory = require('./Inventory');
const Enemy = require('./Enemy');

Character.hasMany(Ability, { foreignKey: 'characterId' });
Ability.belongsTo(Character, { foreignKey: 'characterId' });

Character.belongsTo(Weapon, { foreignKey: 'weaponId' });
Weapon.hasMany(Character, { foreignKey: 'weaponId' });

Character.belongsTo(Armor, { foreignKey: 'armorId' });
Armor.hasMany(Character, { foreignKey: 'armorId' });

Character.hasOne(Inventory, { foreignKey: 'characterId' });
Inventory.belongsTo(Character, { foreignKey: 'characterId' });

sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  sequelize,
  Character,
  Ability,
  Weapon,
  Armor,
  Inventory,
  Enemy
};
