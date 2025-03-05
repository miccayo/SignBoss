import pino from 'pino';
import pino_pretty from 'pino-pretty';
import express from 'express';
const usersPages = express.Router();
const logger = pino(pino_pretty());

// Fetch user information
usersPages.get('/:id', (req, res) => {
  res.render('user', { id: req.params.id });
});

// View authenticated user's profile
usersPages.get('/profile', (req, res) => {
  res.send('Hello World!');
});

export { usersPages };
