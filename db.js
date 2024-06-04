const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mds', 'gabirelul', 'alexgab', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;