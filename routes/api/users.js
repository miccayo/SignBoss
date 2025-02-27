const express = require('express')
const router = express.Router()

const users = require('../../models/user.js')

// To create a new user
router.post('/signup', (req, res) => {
  // User data validation

  // User creation
  users.create({
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
  // User data retrieval
  users.findOne({
    where: { userId: req.params.id }
  }).then(user => {
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ error: 'User not found' })
    }
  }).catch(err => {
    res.status(400).json({ error: err.message })
  })
})

// To update user information
router.put('/:id', (req, res) => {})

// To delete user information
router.delete('/:id', (req, res) => {})

module.exports = router
