// Node modules
const logger = require('pino')()

// User-defined modules
const messages = require('./messages.js')
const db = require('./models')

const express = require('express')
const app = express()

// Establish database connection
db.sequelize.sync({ force: true }).then(() => {
  logger.info('Database connection established and synchronized.')
}).catch(err => {
  logger.error(messages('dbConnectionFailed', `${err}.`))
})

// App enables
app.enable('json escape')
app.enable('strict routing')
app.enable('case sensitive routing')

// App disables
app.disable('x-powered-by')

// App set
app.set('view engine', 'pug')

module.exports = app
