import pino from 'pino';
import pino_pretty from 'pino-pretty';
import express from 'express';
import bodyParser from 'body-parser';
const authApi = express.Router();
const logger = pino(pino_pretty());

authApi.use(bodyParser.json());

function sendBadRequest(req: any, res: any) {
  res.status(400).json({ error: 'Bad request' });
}

// Authenticate user
authApi.get('/login', (req, res) => {
  res.send('Attempt to authenticate user');
});

// Create new user(s)
authApi.post('/signup', (req, res) => {
  // Verify all required fields are present
  let username: string = req.body.username;
  let email: string = req.body.email;

  // Username must be 20 characters, alphanumeric, and not empty
  if (username === undefined || username === '' || username.length > 20 || 
      username.length < 3 ||  !username.match(/^[a-zA-Z0-9]+$/)) {
    sendBadRequest(req, res);
    return;
  }

  if (email === undefined || email.indexOf('@') === -1) {
    sendBadRequest(req, res);
    return;
  }

  res.status(200).json( {message: "Success"} );
});

// Create reset token
authApi.post('/forgot-password', (req, res) => {
  res.send('Attempt to create reset token');
  // Send email with reset token
});

export { authApi };
