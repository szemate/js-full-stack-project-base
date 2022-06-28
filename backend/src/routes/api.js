const express = require('express');
const apiErrorHandler = require('../middlewares/apiErrorHandler');
const { userController } = require('../controllers');

const router = express.Router();

router.use(express.json());

router.get('/users/', userController.getUsers);
router.get('/users/:userId', userController.getUser);

router.use('*', (req, res) => {
  res.status(404).send({ message: 'Not found' });
});

router.use(apiErrorHandler);

module.exports = router;
