# Template for JavaScript Full Stack Projects with React & Node.js

## Technologies

### Backend

- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/) with [MySQL](https://sidorares.github.io/node-mysql2/)
  ([SQLite](https://github.com/TryGhost/node-sqlite3) for integration tests)
- [Jest](https://jestjs.io/) & [SuperTest](https://github.com/visionmedia/supertest)
- [Helmet](https://helmetjs.github.io/)
- [pino](https://getpino.io/)

### Frontend

- [React](https://reactjs.org/) (with [Create React App](https://create-react-app.dev/))
- [React Router](https://reactrouter.com/)
- [SCSS](https://sass-lang.com/)

### Common

- [ESLint](https://eslint.org/) with Airbnb [JavaScript](https://airbnb.io/javascript/)
  & [React](https://airbnb.io/javascript/react/) Style Guide plugins

## Scripts

- `npm run build`: Build the React frontend for production
- `npm start`: Start the full stack in production mode
- `npm run lint`: Run static code analysis
- `npm run test`: Run automated tests
- `npm run dev`: Start the full stack in development mode
- `npm run dev -w backend`: Start the backend in development mode
- `npm run dev -w frontend`: Start the frontend in development mode (with fake
  API)
- `npm install <pkg> -w backend`: Add backend dependency
- `npm install <pkg> -w frontend`: Add frontend dependency
