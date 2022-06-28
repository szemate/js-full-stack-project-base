const app = require('./app');
const logger = require('./logger');

const port = process.env.PORT || 4000;

app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});
