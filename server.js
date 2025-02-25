// Node modules
const { Sequelize } = require('@sequelize/core')
const { PostgresDialect } = require('@sequelize/postgres')
const logger = require('pino')()

// User-defined modules
const messages = require('./messages.js')

// Variables
const port = process.env.WEB_PORT || 8080

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  url: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  ssl: (process.env.DB_USE_SSL === 'true'),
  clientMinMessages: 'notice'
})

logger.info(messages('startRequested', `${port}.`))

// Validate database connection
sequelize
  .authenticate()
  .then(() => {
    logger.info(messages('dbTestConnectionSuccess'))

    sequelize.close().catch(err => {
      logger.error(messages('dbTestCloseConnectionFail', `${err}.`))
      process.exit(1)
    })

    const app = require('./app')
    app.listen(port, () => {
      logger.info(`Server has been started on port ${port}.`)
    })
  })
  .catch(err => {
    logger.error(messages('dbTestConnectionFail', `${err}.`))
    logger.error('The server cannot be started without a functioning database.')
    process.exit(1)
  })

process.on('uncaughtException', err => {
  logger.error(messages('unhandledException', `${err}`))
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  logger.error(messages('unhandledRejection', `at ${promise}. Reason: ${reason}.`))
  process.exit(1)
})
