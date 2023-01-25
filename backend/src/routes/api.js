import express from 'express';
import status from 'http-status';
import apiErrorHandler from '../middlewares/apiErrorHandler';
import userRouter from './users';

const apiRouter = express.Router();

apiRouter.use(express.json());

apiRouter.use('/users', userRouter);

apiRouter.use('/*', (req, res) => res.sendStatus(status.NOT_FOUND));
apiRouter.use(apiErrorHandler);

export default apiRouter;
