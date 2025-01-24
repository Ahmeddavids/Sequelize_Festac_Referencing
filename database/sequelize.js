const { Sequelize } = require('sequelize');


const sequelize = new Sequelize("sql10759408", 'sql10759408', 'cY6rgRDbKz', {
    host: 'sql10.freesqldatabase.com',
    dialect: 'mysql'
  });

module.exports = sequelize;