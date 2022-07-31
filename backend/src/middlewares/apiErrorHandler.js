const status = require('http-status');
const logger = require('../logger');

module.exports = (err, req, res, next) => {
  logger.error(err.stack);

  if (res.headersSent) {
    return next(err);
  }

  return res
    .status(status.INTERNAL_SERVER_ERROR)
    .send({
      message: process.env.NODE_ENV === 'production'
        ? status[status.INTERNAL_SERVER_ERROR]
        : err,
    });
};
