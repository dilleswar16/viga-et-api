// services/PricingService.js
const { Pricing } = require('../models/Pricing');

async function calculatePrice({ zone, organizationId, totalDistance, itemType }) {
  const pricing = await Pricing.findOne({
    where: {
      organization_id: organizationId,
      zone,
      item_id: itemType,
    },
  });

  if (!pricing) {
    throw new Error('Pricing data not found');
  }

  const { fixed_price, km_price } = pricing;

  // Calculate total price
  const basePrice = fixed_price;
  const additionalCost = (totalDistance - pricing.base_distance_in_km) * km_price;
  const totalPrice = basePrice + additionalCost;

  // Return the total price in cents
  return totalPrice * 100;
}

module.exports = { calculatePrice };

// Similar services for Organization and Item
