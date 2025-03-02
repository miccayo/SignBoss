// Sequelize model loader
// Modules
const sequelize = require('../config/database')
const messages = require('../config/messages')
const logger = require('pino')()

// Models
const User = require('./user')(sequelize)

const db = {
  sequelize,
  User
  // Models extendable here
}

async function syncDatabase () {
  try {
    await sequelize.sync({ force: false })
    logger.info(messages('dbSyncSuccess'))
  } catch (error) {
    logger.error(messages('dbSyncFailure', `${error}.`))
  }
}

syncDatabase()

module.exports = db
