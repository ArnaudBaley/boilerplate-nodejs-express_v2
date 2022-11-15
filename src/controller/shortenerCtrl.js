const { logger } = require('../middleware/logger.js');
const urlBusiness = require('../business/urlBusiness.js');

const errorMessage = 'Something went wrong';

const getUrl = async (req, res) => {
    logger.debug(`BEGIN shortener controller - getUrl`);
    if (!req.params?.url || req.params.url === '') {
        return res.status(400).send({error: 'Missing parameter : url'});
    }

    const url = req.params.url;

    logger.debug(`get url for param : ${url}`);

    try {
        const result = await urlBusiness.getUrl(url);

        if (!result) {
            logger.debug(`param ${url} -> Not found`);
            return res.send({error: 'Not found'});
        }

        logger.debug(`Found -> ${JSON.stringify(result)}`);

        return res.send(result);
    } catch (error) {
        logger.error(error.message);
        res.status(500).send({error: errorMessage});
    }
};

const setUrl = async (req, res) => {
    logger.debug(`BEGIN shortener controller - setUrl`);
    if (!req.body.originalUrl || req.body.originalUrl === '') {
        return res.status(400).send({error: 'Missing body parameter : originalUrl'});
    }

    const url = req.body.originalUrl;

    logger.debug(`set url for originalUrl : ${url}`);

    try {
        const result = await urlBusiness.setUrl(url);

        if (!result) {
            logger.debug(`invalid URL for : ${url}`);
            return res.send({error: 'invalid URL'});
        }

        logger.debug(`OK -> ${JSON.stringify(result)}`);
        return res.send(result);
    } catch (error) {
        logger.error(error.stack);
        res.status(500).send({error: errorMessage});
    }
};

module.exports = { getUrl, setUrl };