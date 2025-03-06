import express from 'express';
const apiRoutes = express.Router();

// Import API routes
import { usersApi } from './api/users.ts';
import { authApi } from './api/auth.ts';
// Set routes
apiRoutes.use('/users', usersApi);
apiRoutes.use('/auth', authApi);

export { apiRoutes };
