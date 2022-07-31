const request = require('supertest');
const status = require('http-status');
const userService = require('../src/services/userService');

jest.mock('../src/services/userService');
const app = require('../src/app');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('GET /users/:id', () => {
  it('should return an existing user', async () => {
    userService.getUser.mockResolvedValue({ id: 8, name: 'Jack' });

    const res = await request(app).get('/api/users/8');

    expect(userService.getUser.mock.calls.length).toBe(1);
    expect(userService.getUser.mock.calls[0][0]).toBe(8);

    expect(res.statusCode).toEqual(status.OK);
    expect(res.body).toEqual({
      id: 8,
      name: 'Jack',
    });
  });

  it('should send 404 for non-existent user', async () => {
    userService.getUser.mockResolvedValue(undefined);

    const res = await request(app).get('/api/users/8');

    expect(userService.getUser.mock.calls.length).toBe(1);
    expect(userService.getUser.mock.calls[0][0]).toBe(8);

    expect(res.statusCode).toEqual(status.NOT_FOUND);
    expect(res.body).toHaveProperty('message');
  });
});
