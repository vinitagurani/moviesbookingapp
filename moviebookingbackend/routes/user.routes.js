const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.post('/auth/login', UserController.login);
router.post('/auth/signup', UserController.signup);
router.post('/auth/logout', UserController.logout);

module.exports = router;
