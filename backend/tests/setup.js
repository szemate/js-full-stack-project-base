import db from '../src/db';

global.beforeAll(async () => {
  await db.query('PRAGMA journal_mode = "OFF"'); // SQLite DB setup
});

global.beforeEach(async () => {
  jest.clearAllMocks();
  await db.sync({ force: true }); // Clear the database
});
