const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/dashboard', authMiddleware('store'), storeController.getDashboard);

module.exports = router;