/* This file is used to initialize all models */
// Node modules
const { Sequelize } = require('@sequelize/core')
const { PostgresDialect } = require('@sequelize/postgres')
const fileSystem = require('node:fs')
const path = require('path')

// Variables
const baseName = path.basename(__filename)
const db = {}
const sequelize = new Sequelize({
  dialect: PostgresDialect,
  url: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  ssl: (process.env.DB_USE_SSL === 'true'),
  clientMinMessages: 'notice'
})

fileSystem.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== baseName) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
