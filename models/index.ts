// Sequelize model loader
import { sequelize } from '../util/database'
import { getMessage } from '../messages'
import pino from 'pino';
import pino_pretty from 'pino-pretty';
const logger = pino(pino_pretty());

// Models
import { loadModel as userModel } from './user'
const user = userModel(sequelize)

const db = {
  sequelize,
  user
  // Models extendable here
}

async function syncDatabase () {
  try {
    await sequelize.sync({ force: process.env.DB_SYNCHRONIZE === 'true' })
    logger.info(getMessage('DbSyncSuccess', ''))
  } catch (err: any) {
    logger.error(getMessage('dbSyncFailure', err.message))
  }
}

syncDatabase()

export { db }
