const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  type: Sequelize.STRING,
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = User;
