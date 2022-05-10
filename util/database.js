const Sequelize = require('sequelize');

const sequelize = new Sequelize('express_demo', 'root', '123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;