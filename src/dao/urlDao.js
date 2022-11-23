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

const getUrlAlls = async (shortUrl) => {
    logger.debug(`BEGIN DAO - getUrlAlls`);
    const result = await pool.query('SELECT * FROM mapping');
    if (result?.rows.length > 0) return result.rows;
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

const addClick = async (shortUrl, existingClicks) => {
    logger.debug(`BEGIN DAO - addClick`);

    const result = await pool.query(
        'UPDATE mapping SET nb_clicks = $1 WHERE short_url = $2',
        [existingClicks +=1, shortUrl]
    );
    return result;
};

module.exports = { getShortUrl, getUrlAlls, setUrl, addClick };