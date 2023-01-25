import * as fetchWrapper from '../helpers/fetchWrapper';

const basePath = '/api/users';

export function getAllUsers() {
  return fetchWrapper.get(basePath);
}

export function createUser(data) {
  return fetchWrapper.post(basePath, data);
}

export function deleteUserById(id) {
  return fetchWrapper.del(`${basePath}/${id}`);
}
