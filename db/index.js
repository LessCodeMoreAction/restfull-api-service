const promise = require('bluebird');
const pgPromise = require('pg-promise');
const dbConfig = require('../config/db-config.json');
const {Diagnostics} = require('../db/diagnostics');



const initOptions = {

    promiseLib: promise,
};



const pgp = pgPromise(initOptions);

// Creating the database instance:
const db = pgp(dbConfig);

// Initializing optional diagnostics:
Diagnostics.init(initOptions);

// Alternatively, you can get access to pgp via db.$config.pgp
// See: https://vitaly-t.github.io/pg-promise/Database.html#$config
module.exports = db;
