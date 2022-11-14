const morgan = require("morgan");
const { logger } = require('./logger.js');

// Use custom logger
const stream = {
    write: (message) => logger.http(message),
};

const httpLogger = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    { stream }
);

module.exports = { httpLogger };