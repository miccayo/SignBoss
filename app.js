// Node modules
const express = require('express')
const bodyParser = require('body-parser')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')
// const passport = require('passport')
// const logger = require('pino')()
const path = require('path')
const routes = require('./routes')
// const messages = require('./config/messages')

const app = express()

// App enables
app.enable('json escape')
app.enable('strict routing')
app.enable('case sensitive routing')

// App disables
app.disable('x-powered-by')

// App set
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))

// App use
app.use('/', routes)

module.exports = app
