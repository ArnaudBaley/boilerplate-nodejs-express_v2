const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');

const { logger } = require('./middleware/logger.js');
const { httpLogger } = require('./middleware/http-logger.js');
const shortenerCtrl = require('./controller/shortenerCtrl.js');
const analyticsCtrl = require('./controller/analyticsCtrl.js');
const swaggerDocument = require('./api-doc/swagger.json');
const { port } = require('./config/server.js');
const { appName } = require('./config/app.js');

const app = express();

app.use(httpLogger);
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get(`/${appName}/api/shorturl/analytics`, function(req, res) {
    analyticsCtrl.getAllUrls(req, res);
});

app.get(`/${appName}/api/shorturl/:url`, function(req, res) {
    shortenerCtrl.getUrl(req, res);
});

app.post(`/${appName}/api/shorturl`, function(req, res) {
    shortenerCtrl.setUrl(req, res);
});

app.listen(port, () => {
    logger.debug('App is running');
})