const db = require('../db');
const User = require('./user');

db.sync({ alter: true });

module.exports = {
  User,
};
