const { User } = require('../models');

const userService = {
  getUsers() {
    return User.findAll({ attributes: ['id', 'name'] });
  },

  getUser(userId) {
    return User.findByPk(userId, { attributes: ['id', 'name'] });
  },
};

module.exports = userService;
