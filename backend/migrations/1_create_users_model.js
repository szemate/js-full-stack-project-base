const db = require('../src/db');

exports.migrate = async () => {
  await db.query(`
    CREATE TABLE users (
      id INT AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    )
  `);
};

exports.rollback = async () => {
  await db.query('DROP TABLE users');
};
