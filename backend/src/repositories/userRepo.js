import User from '../models/user';

export function createUser(data) {
  return User.create(data);
}

export function getUserById(id) {
  return User.findByPk(id);
}

export function getAllUsers() {
  return User.findAll();
}

export function deleteUser(user) {
  return user.destroy();
}
