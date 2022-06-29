const express = require('express');
const loggerMiddleware = require('pino-http');
const helmetMiddleware = require('helmet');
const logger = require('./logger');
const { apiRouter, staticRouter } = require('./routes');

const app = express();

app.use(loggerMiddleware({ logger }));
app.use(helmetMiddleware());

app.use('/api', apiRouter);
app.use(staticRouter);

module.exports = app;
