'use strict';

const mongoose = require('mongoose');

class DbConnector {
    constructor() {
        this.dbBaseUrl = process.env.DB_BASE_URL;
        this.dbPort = process.env.DB_PORT;
        this.dbName = process.env.DB_NAME;
        this.dbUser = process.env.DB_USER;
        this.dbPwd = process.env.DB_PWD;
    }

    connect() {
        const dbUri = `${this.dbBaseUrl}:${this.dbPort}`;

        return mongoose.connect(`mongodb://${this.dbUser}:${this.dbPwd}@ds039231.${dbUri}/${this.dbName}`,
            { useNewUrlParser: true }
        );
    }
}

module.exports = DbConnector;
