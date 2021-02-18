const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

//  Add the routes to the Express application by importing with the other imports in backend/app.js
const routes = require('./routes');

const { ValidationError } = require('sequelize');

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

// catch unhandled requests and forward to error handler
app.use((_req, _res, next) => {
    const err = new Error('The requested resource couldn\'t be found.');
    err.title = 'Resource Not Found';
    err.errors = ['The requested resource couldn\'t be found.'];
    err.status = 404;
    next(err); // if no argument was passed in, then the next middleware would not be invoked
});

app.use((err, _req, _res, next) => {
    // check if the error is a Sequelize error
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
    }
    next(err);
})

//  The last error handler is for formatting all the errors before returning a JSON
//  response with the error message, the errors array, and the error stack trace (if
//  the environment is in development) with the status code of the error message.
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});
//  ^this should be the last middleware for the app

module.exports = app;
