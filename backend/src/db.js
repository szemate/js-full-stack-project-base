const mysql = require('mysql2');

if (process.env.NODE_ENV !== 'test') {
  const databaseUrl = process.env.JAWSDB_URL || process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('Missing environment variable DATABASE_URL');
  }

  const pool = mysql.createPool(databaseUrl).promise();

  pool.query('SELECT 1'); // Test connection

  module.exports = pool;
}
