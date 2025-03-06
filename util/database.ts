import { Sequelize } from '@sequelize/core'
import { PostgresDialect } from '@sequelize/postgres'
import pino from 'pino';
import pino_pretty from 'pino-pretty';
const logger = pino(pino_pretty());
import { getMessage } from '../messages';

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
    logger.info(getMessage('DbConnectionSuccess', ''))
  } catch (err: any) {
    logger.error(getMessage('DbConnectionFailure', err.message))
  }
}

testConnection()

export { sequelize }
