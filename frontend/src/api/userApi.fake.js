const fakeUserApi = {
  async getUsers() {
    return [
      {
        id: 1,
        name: 'Jack',
      },
      {
        id: 2,
        name: 'Jane',
      },
    ];
  },

  async getUser(userId) {
    if (userId <= 5) {
      return {
        id: userId,
        name: 'Jack',
      };
    }
    return {};
  },
};

export default fakeUserApi;
