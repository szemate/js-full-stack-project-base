const express = require('express');
const requestLogger = require('pino-http');
const logger = require('./logger');
const { apiRouter, staticRouter } = require('./routes');

const app = express();

app.use(requestLogger({ logger }));
app.use('/api', apiRouter);
app.use(staticRouter);

module.exports = app;
