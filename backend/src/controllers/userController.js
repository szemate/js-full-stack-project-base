const status = require('http-status');
const { userService } = require('../services');

exports.getUsers = async (req, res, next) => {
  let users;

  try {
    users = await userService.getUsers();
  } catch (err) {
    return next(err);
  }

  return res.send(users);
};

exports.getUser = async (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);

  if (Number.isNaN(userId)) {
    return res
      .status(status.NOT_FOUND)
      .send({ message: status[status.NOT_FOUND] });
  }

  let user;

  try {
    user = await userService.getUser(userId);
  } catch (err) {
    return next(err);
  }

  if (!user) {
    return res
      .status(status.NOT_FOUND)
      .send({ message: status[status.NOT_FOUND] });
  }

  return res.send(user);
};
