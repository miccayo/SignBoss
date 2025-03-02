// Modules
const logger = require('pino')()
const messages = require('./config/messages')

// Variables
const app = require('./app')
const port = process.env.WEB_PORT || 8080

// App start
logger.info(messages('startRequested', `${port}.`))

app.listen(port, () => {
  logger.info(messages('startSuccess', `${port}.`))
})

process.on('uncaughtException', err => {
  logger.error(messages('unhandledException', `${err}`))
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  logger.error(messages('unhandledRejection', `at ${promise}. Reason: ${reason}.`))
  process.exit(1)
})
