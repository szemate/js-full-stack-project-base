import { Sequelize } from 'sequelize';
import logger from './logger';

const databaseUrl = process.env.NODE_ENV === 'test' ? 'sqlite:test.sqlite'
  : process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Missing environment variable DATABASE_URL');
}

const db = new Sequelize(databaseUrl, {
  logging: (sql) => logger.debug(sql), // Log all SQL queries at DEBUG level
});

db.authenticate();

export default db;
