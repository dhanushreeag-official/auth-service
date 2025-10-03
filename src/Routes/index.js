const express = require('express');
const router = express.Router();

const { handleLogin } = require('../Controllers/login.controller');
const { handleRegister } = require('../Controllers/register.controller');

router.post('/loginUser', handleLogin);
router.post('/registerUser', handleRegister);

module.exports = router;