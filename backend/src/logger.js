import pino from 'pino';
import pretty from 'pino-pretty';

const env = process.env.NODE_ENV;

function getLogLevel() {
  if (env === 'test') {
    return 'debug';
  }

  if (env === 'development' && process.env.LOG_LEVEL !== undefined) {
    return process.env.LOG_LEVEL;
  }

  return 'info';
}

function getPrettyPrinter() {
  if (env === 'test' || env === 'development') {
    return pretty({
      colorize: true,
      sync: env === 'test',
    });
  }

  return undefined;
}

const logger = pino(
  { level: getLogLevel() },
  getPrettyPrinter(),
);

export default logger;
