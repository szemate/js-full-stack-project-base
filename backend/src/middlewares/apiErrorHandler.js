import status from 'http-status';
import logger from '../logger';

export default function apiErrorHandler(err, req, res, next) {
  logger.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  return res.sendStatus(status.INTERNAL_SERVER_ERROR);
}
