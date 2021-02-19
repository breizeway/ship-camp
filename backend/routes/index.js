const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const { environment } = require('../config');
const isProduction = environment === 'production';

router.use('/api', apiRouter);

//  Static routes
//  Serve React build files in production
if (isProduction) {
    const path = require('path');

    //  Serve the frontend's index.html file at the root route
    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });

    //  Serve the static assets in the frontend's build folder
    router.use(express.static(path.resolve('../frontend/build')));

    //  Serve the frontend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}

if (!isProduction) {
    router.get('/api/csrf/restore', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.json({});
    });
}

module.exports = router;
