// models/Pricing.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pricing = sequelize.define('Pricing', {
  base_distance_in_km: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  km_price: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  fixed_price: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
});

module.exports = Pricing;
