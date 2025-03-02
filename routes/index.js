// Routes initializer
const express = require('express')
const router = express.Router()

const userApi = require('./api/users')
const userViews = require('./view/users')

// View routes (routes which render views)
router.use('/users', userViews)

// API routes (routes which return JSON data)
router.use('/api/users', userApi)

router.get('/', async (req, res) => {
  res.render('index')
})

router.get('/403', async (req, res) => {
  res.render('403')
})
router.get('/404', async (req, res) => {
  res.render('404')
})
router.get('/500', async (req, res) => {
  res.render('500')
})

router.use((req, res, next) => {
  res.status(404).render('404')
})

module.exports = router
