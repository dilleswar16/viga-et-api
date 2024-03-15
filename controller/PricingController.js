// controllers/PricingController.js
const PricingService = require('../services/PricingService');

async function calculatePrice(req, res) {
  try {
    const { zone, organizationId, totalDistance, itemType } = req.query;
    const totalPrice = await PricingService.calculatePrice({
      zone,
      organizationId,
      totalDistance,
      itemType,
    });

    return res.json({ total_price: totalPrice });
  } catch (error) {
    console.error('Error calculating price:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { calculatePrice };

// Similar controllers for Organization and Item
