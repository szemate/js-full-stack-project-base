const { userService } = require('../services');

exports.getUsers = async (req, res, next) => {
  let users;

  try {
    users = await userService.getUsers();
  } catch (err) {
    return next(err);
  }

  return res.status(200).send(users);
};

exports.getUser = async (req, res, next) => {
  const userId = parseInt(req.params.userId, 10);

  if (Number.isNaN(userId)) {
    return res.status(404).send({ message: 'Not found' });
  }

  let user;

  try {
    user = await userService.getUser(userId);
  } catch (err) {
    return next(err);
  }

  if (!user) {
    return res.status(404).send({ message: 'Not found' });
  }

  return res.status(200).send(user);
};
