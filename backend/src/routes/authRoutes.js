const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const storeController = require('../controllers/storeController');

// Usuario
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

// Tienda
router.post('/store/register', storeController.registerStore);
router.post('/store/login', storeController.loginStore);

module.exports = router;