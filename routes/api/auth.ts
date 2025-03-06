import pino from 'pino';
import pino_pretty from 'pino-pretty';
import express from 'express';
const authApi = express.Router();
const logger = pino(pino_pretty());

// Authenticate user
authApi.get('/login', (req, res) => {
  res.send('Attempt to authenticate user');
});

// Create new user(s)
authApi.post('/signup', (req, res) => {
  res.send('Attempt to create user');
});

// Create reset token
authApi.post('/forgot-password', (req, res) => {
  res.send('Attempt to create reset token');
  // Send email with reset token
});

export { authApi };
