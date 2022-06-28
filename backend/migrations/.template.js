const db = require('../src/db');

exports.migrate = async () => {
  await db.query();
};

exports.rollback = async () => {
  await db.query();
};
