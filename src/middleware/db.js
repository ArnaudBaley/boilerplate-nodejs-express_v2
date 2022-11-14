const { Pool } = require("pg");
const dbConfig = require("../config/db");

const pool = new Pool({
        user: dbConfig.dbUsername,
        host: dbConfig.dbHost,
        database: dbConfig.dbName,
        password: dbConfig.dbPassword,
        port: dbConfig.dbPort,
});

module.exports = { pool };
