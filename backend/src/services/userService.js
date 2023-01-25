import { pick } from 'lodash';
import logger from '../logger';
import * as errors from '../helpers/errors';
import * as userRepo from '../repositories/userRepo';
import { userSchema } from '../helpers/validators';

const fields = ['id', 'name', 'email'];

export async function getAllUsers() {
  const users = await userRepo.getAllUsers();
  return users.map((user) => pick(user, fields));
}

export async function createUser(data) {
  await userSchema.validate(data);

  const user = await userRepo.createUser(data);

  logger.info('Created new user', user);
  return pick(user, fields);
}

export async function deleteUserById(id) {
  if (!Number.isInteger(id)) {
    throw new errors.ParameterError();
  }

  const user = await userRepo.getUserById(id);

  if (!user) {
    throw new errors.NotFoundError();
  }

  await userRepo.deleteUser(user);
  logger.info('Deleted user', id);
  return pick(user, fields);
}
