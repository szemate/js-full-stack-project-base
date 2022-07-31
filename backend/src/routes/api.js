const express = require('express');
const status = require('http-status');
const apiErrorHandler = require('../middlewares');
const { userController } = require('../controllers');

const router = express.Router();

router.use(express.json());

router.get('/users/', userController.getUsers);
router.get('/users/:userId', userController.getUser);

router.use('*', (req, res) => res
  .status(status.NOT_FOUND)
  .send({ message: status[status.NOT_FOUND] }));

router.use(apiErrorHandler);

module.exports = router;
