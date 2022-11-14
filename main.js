import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './src/api-doc/swagger.json' assert { type: "json" };

import { logger } from './src/middleware/logger.js';
import { httpLogger } from './src/middleware/http-logger.js';
import { port } from './src/config/server.js'

const app = express();

app.use(httpLogger);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(port, () => {
    logger.debug('App is running');
})