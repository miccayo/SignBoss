import pino from 'pino';
import pino_pretty from 'pino-pretty';
import express from 'express';
const usersApi = express.Router();
const logger = pino(pino_pretty());

// Fetch user information
usersApi.get('/:id', (req, res) => {
  res.send('Hello World!');
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
