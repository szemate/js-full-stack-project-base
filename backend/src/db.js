const { Sequelize } = require('sequelize');

const databaseUrl = process.env.NODE_ENV === 'test' ? 'sqlite::memory:'
  : process.env.JAWSDB_URL // Heroku
  || process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Missing environment variable DATABASE_URL');
}

const db = new Sequelize(databaseUrl);

db.authenticate();

module.exports = db;
