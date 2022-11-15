const { nanoid } = require('nanoid');
const urlDao = require('../dao/urlDao.js');
const {logger} = require("../middleware/logger");
const { isUrlValid } = require('../util/urlUtil')

const getUrl = async (url) => {
    logger.debug(`BEGIN business - getUrl`);
    const result = await urlDao.getShortUrl(url);
    if (!result) return result;

    await urlDao.addClick(result.short_url, result.nb_clicks);

    return {
        originalUrl:result.original_url,
        shortUrl: result.short_url,
    };
};

const getUrlAlls = async () => {
    logger.debug(`BEGIN business - getUrlAlls`);
    return await urlDao.getUrlAlls();
};

const setUrl = async (url) => {
    logger.debug(`BEGIN business - setUrl`);
    if (!isUrlValid(url)) return false;
    let shortUrl = nanoid(6);

    // Collision detection
    const alreadyExists = await urlDao.getShortUrl(shortUrl);
    if (alreadyExists) {
        logger.warn('ID already exists');
        shortUrl = nanoid(6);
    }

    await urlDao.setUrl(url, shortUrl);
    return { originalUrl: url, shortUrl };
};

const addClick = async (shortUrl) => {
    logger.debug(`BEGIN business - addClick`);


    return await urlDao.getUrlAlls();
};

module.exports = { getUrl, getUrlAlls, setUrl };