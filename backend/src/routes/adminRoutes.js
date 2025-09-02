const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/dashboard', authMiddleware('admin'), adminController.getDashboard);
router.get('/users', authMiddleware('admin'), adminController.listUsers);
router.get('/stores', authMiddleware('admin'), adminController.listStores);
router.get('/offers', authMiddleware('admin'), adminController.listOffers);
router.post('/approveStore', authMiddleware('admin'), adminController.approveStore);
router.post('/moderateOffer', authMiddleware('admin'), adminController.moderateOffer);

module.exports = router;