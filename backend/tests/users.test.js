import status from 'http-status';
import request from 'supertest';
import { pick } from 'lodash';
import app from '../src/app';
import * as userRepo from '../src/repositories/userRepo';

const basePath = '/api/users';

describe('GET /api/users', () => {
  it('returns the existing users', async () => {
    const user = await userRepo.createUser({
      name: 'Alice',
      email: 'alice@inter.net',
    });

    const res = await request(app).get(basePath);

    expect(res.statusCode).toEqual(status.OK);
    expect(res.body).toEqual({
      results: [
        pick(user, ['id', 'name', 'email']),
      ],
    });
  });

  it('returns empty list if there are no users', async () => {
    const res = await request(app).get(basePath);

    expect(res.statusCode).toEqual(status.OK);
    expect(res.body).toEqual({ results: [] });
  });
});

describe('POST /api/users/', () => {
  it('creates a new user with valid data', async () => {
    const userData = { name: 'Alice', email: 'alice@inter.net' };

    const res = await request(app).post(basePath).send(userData);

    expect(res.statusCode).toEqual(status.CREATED);
    expect(res.body).toEqual({ id: 1, ...userData });

    const userObj = await userRepo.getUserById(1);
    expect(userObj).toMatchObject(userData);
  });

  it('returns error for invalid email', async () => {
    const userData = { name: 'Alice', email: 'aliceinternet' };

    const res = await request(app).post(basePath).send(userData);

    expect(res.statusCode).toEqual(status.BAD_REQUEST);
    expect(res.body).toHaveProperty('message');

    const users = await userRepo.getAllUsers();
    expect(users).toEqual([]);
  });
});
