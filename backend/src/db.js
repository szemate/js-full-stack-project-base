import { Sequelize } from 'sequelize';
import logger from './logger';

const databaseUrl = process.env.NODE_ENV === 'test' ? 'sqlite:memory:'
  : process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Missing environment variable DATABASE_URL');
}

const db = new Sequelize(databaseUrl, {
  logging: (sql) => logger.debug(sql),
});

db.authenticate();

export default db;