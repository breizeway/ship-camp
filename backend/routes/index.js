const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const { environment } = require('../config');
const isProduction = environment === 'production';

router.use('/api', apiRouter);

//  In this test route, you are setting a cookie on the response
//  with the name of XSRF-TOKEN to the value of the req.csrfToken
//  method's return. Then, you are sending the text, Hello World!
//  as the response's body.

// router.get('/hello/world', function(req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     !isProduction && console.log('XSRF-TOKEN::: ', req.cookies['XSRF-TOKEN'])
//     res.send('Hello World!');
// });

module.exports = router;
