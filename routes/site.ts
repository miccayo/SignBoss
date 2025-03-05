import express from 'express';
const siteRoutes = express.Router();

// Import API routes
import { usersPages } from './site/users.ts';
// Set routes
siteRoutes.use('/users', usersPages);

export { siteRoutes };
