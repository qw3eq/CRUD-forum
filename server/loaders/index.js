const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../db');
const config = require('../config');

module.exports = {
    loader: function(app) {
        app.use(bodyParser.urlencoded({ extended: true }));

        const corsOptions = {
            origin: config.clientUrl,
            optionsSuccessStatus: 200
        }
        app.use(cors(corsOptions));

        app.use(express.json({
            type: ['application/json', 'text/plain']
        }))

        db.connect(config.dbUrl);
        
    }
}
