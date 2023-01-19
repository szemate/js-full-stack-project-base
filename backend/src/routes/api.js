import express from 'express';
import apiErrorHandler from '../middlewares/apiErrorHandler';
import { NotFoundError } from '../helpers/errors';
import userRouter from './users';

const apiRouter = express.Router();

// Middlewares that run before controllers
apiRouter.use(express.json());

// Routers by resource
apiRouter.use('/users', userRouter);

// Middlewares that run after controllers
apiRouter.use('/*', (req, res, next) => next(new NotFoundError()));
apiRouter.use(apiErrorHandler);

export default apiRouter;
