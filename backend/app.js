const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
//  Add the routes to the Express application by importing with the other imports in backend/app.js
const routes = require('./routes');

//  Create a variable called isProduction that will be true
//  if the environment is in production or not by checking
//  the environment key in the configuration file (backend/config/index.js).
const { environment } = require('./config');
const isProduction = environment === 'production';

//  Initialize the express application
const app = express();

//  Connect the morgan middleware for logging information about requests and responses
app.use(morgan('dev'));

//  Add the cookie-parser middleware for parsing cookies
app.use(cookieParser());

//  and the express.json middleware for parsing JSON bodies of requests with Content-Type of "application/json".
app.use(express.json());


//  enable cors only in development
if (!isProduction) app.use(cors());

//  helmet helps aset a variety of headers to better secur your app
app.use(helmet({
    contentSecurityPolicy: false
}));

//  set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        },
    })
    );

//  connect all the routes from the exported router to app
app.use(routes);

module.exports = app;
