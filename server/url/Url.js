'use strict';

const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    short_id: { type: String, required: true },
    long_url: { type: String, required: true },
    short_url: { type: String, required: true },
    created_at: { type: String, required: true },
    expiry: Number,
    last_accessed: String,
    access_count: Number
});

module.exports = mongoose.model('Url', urlSchema);
