import status from 'http-status';
import * as errors from '../helpers/errors';
import * as userService from '../services/userService';

export async function getAllUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    return res.send({ results: users });
  } catch (err) {
    return next(err);
  }
}

export async function createUser(req, res, next) {
  try {
    const user = await userService.createUser(req.body);
    return res.status(status.CREATED).send(user);
  } catch (err) {
    if (err instanceof errors.ValidationError) {
      return res.status(status.BAD_REQUEST).sendMessage(err.message);
    }

    return next(err);
  }
}

export async function deleteUser(req, res, next) {
  try {
    const user = await userService.deleteUserById(Number(req.params.id));
    return res.send(user);
  } catch (err) {
    if (err instanceof errors.ParameterError) {
      return res.sendStatus(status.NOT_FOUND);
    }

    if (err instanceof errors.NotFoundError) {
      return res.sendStatus(status.NOT_FOUND);
    }

    return next(err);
  }
}
