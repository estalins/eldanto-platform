const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/profile', authMiddleware('user'), userController.getProfile);
router.post('/preferences', authMiddleware('user'), userController.updatePreferences);

module.exports = router;