'use strict';

const express = require('express');
const Url = require('../url/Url');

const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        // endpoint that returns all urls

        if (req.query.shorturl) {
            next();
        } else {
            Url.find()
            .then((data) => {
                res.status(200).send(data);
                console.log('All urls returned');
            })
            .catch(err => next(err));
        }
    })
    .get((req, res, next) => {
        // endpoint that returns data about a specific url

        const shortUrl = req.query.shorturl;
        Url.findOne(
            { "short_url": shortUrl }
        )
        .then((data) => {
            if (!data) {
                console.log('Data about short url %s does not exist in db', shortUrl);
                return res
                    .status(404)
                    .send("No such resource exists!");
            } else {
                res.status(200).send(data);
                console.log("Analytics data for %s returned", shortUrl);
            }
        })
        .catch(err => next(err));
    });

module.exports = router;
