const request = require('supertest');
const app = require('../src/app');
const { User } = require('../src/models');

beforeEach(async () => {
  await User.sync({ force: true }); // Clear the database
});

describe('GET /users/:id', () => {
  it('should return an existing user', async () => {
    const alice = await User.create({ name: 'Alice' });

    const res = await request(app).get('/api/users/1');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      id: alice.id,
      name: alice.name,
    });
  });

  it('should send 404 for non-existent user', async () => {
    const res = await request(app).get('/api/users/1');

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('message');
  });
});
