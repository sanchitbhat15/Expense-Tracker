const Sequelize = require('sequelize')

const sequelize = new Sequelize('ExpenseTracker', 'root', 'Samsung007@',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;
