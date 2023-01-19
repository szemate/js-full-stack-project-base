import status from 'http-status';
import * as errors from '../helpers/errors';
import logger from '../logger';

export default function apiErrorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err); // Skip if a response has already been sent
  }

  if (err instanceof errors.ParameterError) {
    return res.sendStatus(status.NOT_FOUND);
  }
  if (err instanceof errors.NotFoundError) {
    return res.sendStatus(status.NOT_FOUND);
  }
  if (err instanceof errors.ValidationError) {
    return res.status(status.BAD_REQUEST).send({ message: err.message });
  }

  logger.error(err.stack);
  return res.sendStatus(status.INTERNAL_SERVER_ERROR);
}
