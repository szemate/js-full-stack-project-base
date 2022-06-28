const db = require('../db');

const userService = {
  async getUsers() {
    const [users] = await db.query('SELECT * FROM USERS');
    return users;
  },

  async getUser(userId) {
    const [users] = await db.query(
      'SELECT * FROM USERS WHERE id = ?',
      [userId],
    );
    return users[0];
  },
};

module.exports = userService;
