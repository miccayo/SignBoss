// View-related routes for user profiles, etc.
// const logger = require('pino')()
const express = require('express')
const router = express.Router()
const { User } = require('../../models')

// View a user's profile
router.get('/:id', async (req, res) => {
  // TODO: Check session for authentication before rendering user profiles
  if (req.params.id >= 0) {
    const user = await User.findOne({ where: { userId: req.params.id } })
    if (user) return res.render('userprofile', { user })
  }
  return res.render('404')
})

module.exports = router
