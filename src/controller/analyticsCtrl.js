const { logger } = require('../middleware/logger.js');
const urlBusiness = require('../business/urlBusiness.js');

const errorMessage = 'Something went wrong';

const getAllUrls = async (req, res) => {
    logger.debug(`BEGIN analytics controller - getAllUrls`);
    try {
        const result = await urlBusiness.getUrlAlls();
        return res.send(result);
    } catch (error) {
        logger.error(error.message);
        res.status(500).send({error: errorMessage});
    }
};

module.exports = { getAllUrls };