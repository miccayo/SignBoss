import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'
const app = express();

// App enables
app.enable('case sensitive routing');
app.enable('strict routing');
app.enable('json escape');

// App disables
app.disable('x-powered-by');

// App sets
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
import { apiRoutes } from './routes/api.ts';
app.use('/api', apiRoutes);
import { siteRoutes } from './routes/site.ts';
app.use('/', siteRoutes);

export { app };
