const db = require('../db');

exports.getUsers = async () => {
  const [users] = await db.query('SELECT * FROM USERS');
  return users;
};

exports.getUser = async (userId) => {
  const [users] = await db.query(
    'SELECT * FROM USERS WHERE id = ?',
    [userId],
  );
  return users[0];
};
