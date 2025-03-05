import express from 'express';
const siteRoutes = express.Router();

// Import API routes
import { usersPages } from './site/users.ts';

// Set routes
siteRoutes.use('/users', usersPages);

// Index page
siteRoutes.get('/', (req, res) => {
  res.render('landing', { title: 'Home' });
});

export { siteRoutes };
