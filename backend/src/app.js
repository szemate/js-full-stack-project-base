import express from 'express';
import status from 'http-status';
import compressionMiddleware from 'compression';
import helmetMiddleware from 'helmet';
import loggingMiddleware from 'pino-http';
import logger from './logger';
import apiRouter from './routes/api';
import staticRouter from './routes/static';

const app = express();

app.response.sendStatus = function sendStatus(statusCode) {
  return this.status(statusCode).send({ message: status[statusCode] });
};

// Middlewares
app.use(loggingMiddleware({ logger }));
app.use(compressionMiddleware());
app.use(helmetMiddleware());

// Routers
app.use('/api', apiRouter);
app.use(staticRouter);

export default app;
