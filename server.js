// Node modules
const logger = require('pino')()

// User-defined modules
const messages = require('./config/messages.js')

// Variables
const port = process.env.WEB_PORT || 8080

logger.info(messages('startRequested', `${port}.`))

const app = require('./app.js')
app.listen(port, () => {
  logger.info(`Server has been started on port ${port}.`)
})

process.on('uncaughtException', err => {
  logger.error(messages('unhandledException', `${err}`))
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  logger.error(messages('unhandledRejection', `at ${promise}. Reason: ${reason}.`))
  process.exit(1)
})
