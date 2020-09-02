const express = require('express');

const userController = require('../controller/user-controller');

const router = express.Router();

router.get('/', userController.getUsers);

router.post('/signup', userController.signup);

router.post('/login', userController.login);

module.exports = router;