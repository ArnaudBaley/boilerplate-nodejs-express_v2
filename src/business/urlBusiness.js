const { nanoid } = require('nanoid');
const urlDao = require('../dao/urlDao.js');
const {logger} = require("../middleware/logger");
const { isUrlValid } = require('../util/urlUtil')

const getUrl = async (url) => {
    logger.debug(`BEGIN business - getUrl`);
    const result = await urlDao.getShortUrl(url);
    if (!result) return result;
    return {
        originalUrl:result.original_url,
        shortUrl: result.short_url,
    };
};

const setUrl = async (url) => {
    logger.debug(`BEGIN business - setUrl`);
    if (!isUrlValid(url)) return false;
    const shortUrl = nanoid(6);
    await urlDao.setUrl(url, shortUrl);
    return { originalUrl: url, shortUrl };
};

module.exports = { getUrl , setUrl };