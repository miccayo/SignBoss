// Node modules
const logger = require('pino')()
const express = require('express')
const router = express.Router()
const { User } = require('../../models')
// const argon2 = require('argon2')

// To create a new user
router.post('/signup', (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Invalid data' })
  }
  // User data validation

  // User creation
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).then(user => {
    res.status(201).json(user)
  }).catch(err => {
    res.status(400).json({ error: err.message })
  })
})

// To get user information
router.get('/:id', (req, res) => {
  logger.info(`User ID: ${req.params.id}`)
  // User data retrieval
  User.findAll({
    where: { userId: req.params.id }
  }).then(users => {
    res.status(200).json(users)
  }).catch(err => {
    res.status(400).json({ error: err.message })
  })
})

// To update user information
router.put('/:id', (req, res) => {})

// To delete user information
router.delete('/:id', (req, res) => {})

module.exports = router
