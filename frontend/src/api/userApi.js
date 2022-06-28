const path = '/api/users';

const userApi = {
  async getUsers() {
    const response = await fetch(path);

    if (response.ok) {
      return response.json();
    }
    return [];
  },

  async getUser(userId) {
    const response = await fetch(`${path}/${userId}`);

    if (response.ok) {
      return response.json();
    }
    return {};
  },
};

export default userApi;
