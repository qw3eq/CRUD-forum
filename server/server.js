const express = require('express');
const app = express();

const config = require('./config');
const { loader } = require('./loaders');
const routes = require('./api');

loader(app);
routes.setRoutes(app);

app.listen(config.port, (err) => {
    if(err) throw new Error(`Could not start server on port ${config.port}`);

    console.log(`Server is listening on port ${config.port}`);
})