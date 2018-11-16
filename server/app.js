'use strict';

require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const DbConnector = require('./db/DbConnector');
const UrlController = require('./url/UrlController');
const AnalyticsController = require('./analytics/AnalyticsController');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new DbConnector();

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started. Listening on port %s", process.env.PORT || 3000);

    db.connect()
        .then(() => {
            console.log('Db connected successfully');
        })
        .catch((err) => {
            console.log(err);
            process.exit(1);
        });
});

app.get('/', (req, res) => {
    res.send('Greetings, young one! This application is alive and well O:)');
});

app.use('/url', UrlController);
app.use('/analytics', AnalyticsController);
