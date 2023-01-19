import app from './app';
import db from './db';
import logger from './logger';

const port = process.env.PORT || 4000;

app.listen(port, async () => {
  logger.info(`Listening on port ${port}`);

  await db.sync({ alter: true }); // Apply database schema changes
  logger.info('DB has been initialized');
});
