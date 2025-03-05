import express from 'express';
const apiRoutes = express.Router();

// Import API routes
import { usersApi } from './api/users.ts';
// Set routes
apiRoutes.use('/users', usersApi);

export { apiRoutes };
