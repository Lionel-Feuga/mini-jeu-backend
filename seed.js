const { Character, Ability, Enemy, Inventory, Weapon, Armor } = require('./models');

async function seedDatabase() {
  const characterCount = await Character.count();
  const abilityCount = await Ability.count();
  const enemyCount = await Enemy.count();
  const inventoryCount = await Inventory.count();
  const weaponCount = await Weapon.count();
  const armorCount = await Armor.count();

  if (weaponCount === 0) {
    await Weapon.bulkCreate([
      { name: 'Épée de Fer', damageBonus: 8 },
      { name: 'Bâton de Disciple', damageBonus: 4 },
      { name: 'Arc de Chasseur', damageBonus: 7 },
      { name: 'Dagues de Fer', damageBonus: 10 },
    ]);
  }

  if (armorCount === 0) {
    await Armor.bulkCreate([
      { name: 'Armure Simple', defenseBonus: 5 },
      { name: 'Robe en Tissu', defenseBonus: 2 },
      { name: 'Armure Légère', defenseBonus: 3 },
      { name: 'Armure de Cuir', defenseBonus: 4 },
    ]);
  }

  if (characterCount === 0) {
    await Character.bulkCreate([
      {
        name: 'Guerrier',
        health: 100,
        mana: 30,
        strength: 19,
        agility: 10,
        intelligence: 5,
        level: 1,
        experience: 0,
        experienceToNextLevel: 100,
        gold: 100,
        imageUrl: 'warriorInGame-noBg.png',
        weaponId: 1,
        armorId: 1
      },
      {
        name: 'Mage',
        health: 80,
        mana: 100,
        strength: 8,
        agility: 10,
        intelligence: 20,
        level: 1,
        experience: 0,
        experienceToNextLevel: 100,
        gold: 100,
        imageUrl: 'mageInGame-noBg.png',
        weaponId: 2,
        armorId: 2
      },
      {
        name: 'Archer',
        health: 90,
        mana: 20,
        strength: 10,
        agility: 20,
        intelligence: 5,
        level: 1,
        experience: 0,
        experienceToNextLevel: 100,
        gold: 100,
        imageUrl: 'archerInGame-noBg.png',
        weaponId: 3,
        armorId: 3
      },
      {
        name: 'Assassin',
        health: 85,
        mana: 30,
        strength: 20,
        agility: 15,
        intelligence: 5,
        level: 1,
        experience: 0,
        experienceToNextLevel: 100,
        gold: 100,
        imageUrl: 'assassinInGame-noBg.png',
        weaponId: 4,
        armorId: 4
      },
    ]);
  }

  // Only create abilities after characters are created to ensure foreign keys are valid
  if (abilityCount === 0) {
    await Ability.bulkCreate([
      {
        characterId: 1,
        name: "Attaque à l'épée",
        description: "Inflige des dégâts en fonction de la force.",
        manaCost: 0
      },
      {
        characterId: 1,
        name: "Renforcement",
        description: "Augmente les dégâts infligés de 30% pour les deux prochains coups.",
        manaCost: 10
      },{
        characterId: 1,
        name: "Frappe de bouclier",
        description: "Étourdit l'ennemie en infligeant des dégâts amoindris",
        manaCost: 10
      },
      {
        characterId: 2,
        name: "Attaque au bâton",
        description: "Inflige des dégâts en fonction de la force.",
        manaCost: 0
      },
      {
        characterId: 2,
        name: "Boule de feu",
        description: "Inflige des dégâts en fonction de l'intelligence.",
        manaCost: 25
      },
      {
        characterId: 3,
        name: "Tir à l'arc",
        description: "Inflige des dégâts en fonction de l'agilité.",
        manaCost: 0
      },
      {
        characterId: 3,
        name: "Oeil perçant",
        description: "Augmente les chances de coups critiques pendant 5 tours.",
        manaCost: 0
      },
      {
        characterId: 4,
        name: "Coup de dague",
        description: "Inflige des dégâts en fonction de la force.",
        manaCost: 0
      },
      {
        characterId: 4,
        name: "Poison",
        description: "Empoisonne l'ennemi, infligeant des dégâts sur la durée.",
        manaCost: 0
      }
    ]);
  }

  if (enemyCount === 0) {
    await Enemy.bulkCreate([
      {
        name: 'Jeune Gobelin',
        health: 50,
        strength: 10,
        imageUrl: 'gobelin-noBp.png'
      },
      {
        name: 'Gobelin Adulte',
        health: 75,
        strength: 15,
        imageUrl: 'gobelinAdult-noBg.png'
      },
    ]);
  }

  if (inventoryCount === 0) {
    await Inventory.bulkCreate([
      {
        characterId: 1,
        weaponId: 1,
        armorId: 1,
        gold: 130
      },
    ]);
  }
}

module.exports = seedDatabase;
