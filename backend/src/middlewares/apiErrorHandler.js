const logger = require('../logger');

module.exports = (err, req, res, next) => {
  logger.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).send({
    message: process.env.NODE_ENV === 'production' ? 'Server error' : err,
  });
};
