const { pool } = require('../middleware/db.js');
const {logger} = require("../middleware/logger");

const getShortUrl = async (shortUrl) => {
    logger.debug(`BEGIN DAO - getShortUrl`);
    const result = await pool.query(
        'SELECT * FROM mapping WHERE short_url = $1',
        [shortUrl]
    );

    if (result?.rows.length > 0) return result.rows[0];

    return false;
};

const setUrl = async (originalUrl, shortUrl) => {
    logger.debug(`BEGIN DAO - setUrl`);
    const result = await pool.query(
        'INSERT INTO mapping (original_url, short_url) VALUES ($1, $2)',
        [originalUrl, shortUrl]
    );
    return result;
};

module.exports = { getShortUrl, setUrl };