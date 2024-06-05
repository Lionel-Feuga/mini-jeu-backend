const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('game_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  }
});

module.exports = sequelize;
