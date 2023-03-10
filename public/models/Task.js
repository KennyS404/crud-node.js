 const { Sequelize, DataTypes } = require('sequelize')
 const path = require('path')

 const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname,'..','..', 'db.sqlite')
 })
 const Task = sequelize.define('Task',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(120),
        allowNull: false,
    }
 })
 Task.sync()
    
module.exports = Task
