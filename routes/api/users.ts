import pino from 'pino';
import pino_pretty from 'pino-pretty';
import express from 'express';
const usersApi = express.Router();
const logger = pino(pino_pretty());

import { db } from '../../models';

// Fetch user information
usersApi.get('/:id', (req, res) => {
  db.user.findOne({
    where: {
      user_id: req.params.id
    }
  }).then((user) => {
    if (user === null) {
      res.json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  }).catch((err: any) => {
    logger.error(err);
    res.json({ error: 'An error occurred' });
  });
});

// Create new users
usersApi.post('/signup', (req, res) => {
  res.send('Hello World!');
});

// Update user information
usersApi.put('/:id', (req, res) => {
  res.send('Hello World!');
});

// Delete user information
usersApi.delete('/:id', (req, res) => {
  res.send('Hello World!');
});

export { usersApi };
