import express from 'express';
const siteRoutes = express.Router();

// Import API routes
import { usersPages } from './site/users.ts';
import { authPages } from './site/auth.ts';

// Set routes
siteRoutes.use('/users', usersPages);
siteRoutes.use('/auth', authPages);

// Index page
siteRoutes.get('/', (req, res) => {
  res.render('landing', { title: 'Home', redirectTime: 3 });
});

export { siteRoutes };
