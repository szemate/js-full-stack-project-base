import db from '../src/db';

global.beforeEach(async () => {
  await db.sync({ force: true }); // Clear the database
});
