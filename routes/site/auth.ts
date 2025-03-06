import pino from 'pino';
import pino_pretty from 'pino-pretty';
import express from 'express';
const authPages = express.Router();
const logger = pino(pino_pretty());

// Login
authPages.get('/login', (req, res) => {
  res.render('auth/login', { title: 'Login' });
});

// Sign up
authPages.get('/signup', (req, res) => {
  res.render('auth/signup', { title: 'Sign Up' });
});

// Forgot password
authPages.get('/forgot-password', (req, res) => {
  // TODO: If has token, render reset password page
  res.render('auth/forgot-password', { title: 'Forgot Password' });
});

export { authPages };
