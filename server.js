// Node modules
const { Sequelize } = require('@sequelize/core')
const { PostgresDialect } = require('@sequelize/postgres')
const logger = require('pino')()

// User-defined modules
const errorMessages = require('./error-messages')

// Variables
const port = process.env.PORT || 8080

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  url: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  ssl: (process.env.DB_USE_SSL === 'true'),
  clientMinMessages: 'notice'
})

logger.info(`Server start requested on port ${port}.`)

// Validate PostgreSQL connection
sequelize.sync().then(() => {
  logger.info('Database test connection successful.')

  sequelize.close().catch(err => {
    logger.error(errorMessages('dbConnectionFailed', `${err}.`))
    process.exit(1)
  })

  const app = require('./app')
  app.listen(port, () => {
    logger.info(`Server has been started on port ${port}.`)
  })
}).catch(err => {
  logger.error(errorMessages('dbConnectionFailed', `${err}.`))
  logger.error('The server cannot be started without a functioning database.')
  process.exit(1)
})

process.on('uncaughtException', err => {
  logger.error(errorMessages('unhandledException', err))
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  logger.error(errorMessages('unhandledRejection', `at ${promise}. Reason: ${reason}.`))
  process.exit(1)
})
