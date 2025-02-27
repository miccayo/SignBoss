// Node modules
const { Sequelize, DataTypes } = require('@sequelize/core')
const { PostgresDialect } = require('@sequelize/postgres')
const express = require('express')
// const logger = require('pino')()

// User-defined modules
// const messages = require('./config/messages.js')
// const db = require('./models')

// Routes
const userApiRoutes = require('./routes/api/users.js')

const app = express()

// Establish database connection
const sequelize = new Sequelize({
  dialect: PostgresDialect,
  url: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  ssl: (process.env.DB_USE_SSL === 'true'),
  clientMinMessages: 'notice'
})

// Database Models
require('./models/user')(sequelize, DataTypes) // Users table model

// App enables
app.enable('json escape')
app.enable('strict routing')
app.enable('case sensitive routing')

// App disables
app.disable('x-powered-by')

// App set
app.set('view engine', 'pug')

// App use
app.use('/api/users', userApiRoutes)

module.exports = app
