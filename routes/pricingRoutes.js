// routes/pricingRoutes.js
const express = require('express');
const PricingController = require('../controller/PricingController');

const router = express.Router();

router.get('/calculate-price', PricingController.calculatePrice);

module.exports = router;

// Similar routes for Organization and Item
