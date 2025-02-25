// Node modules
const { Sequelize } = require('@sequelize/core')
const { PostgresDialect } = require('@sequelize/postgres')
const logger = require('pino')()

// User-defined modules
const errorMessages = require('./error-messages.js')

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  url: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  ssl: (process.env.DB_USE_SSL === 'true'),
  clientMinMessages: 'notice'
})

const express = require('express')
const app = express()

// App enables
app.enable('json escape')
app.enable('strict routing')
app.enable('case sensitive routing')

// App disables
app.disable('x-powered-by')

// App set
app.set('view engine', 'pug')

module.exports = app
