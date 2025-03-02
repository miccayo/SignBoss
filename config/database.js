const { Sequelize } = require('@sequelize/core')
const { PostgresDialect } = require('@sequelize/postgres')
const logger = require('pino')()
const messages = require('./messages')

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  url: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  ssl: (process.env.DB_USE_SSL === 'true'),
  clientMinMessages: 'notice',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

async function testConnection () {
  try {
    await sequelize.authenticate()
    logger.info(messages('dbConnectionSuccess'))
  } catch (err) {
    logger.error(messages('dbConnectionFailure', `Error: ${err}.`))
  }
}

testConnection()

module.exports = sequelize
