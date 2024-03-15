const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const pricingRoutes = require('./routes/pricingRoutes');
// Initialize Sequelize models
 // Import Organization, Item, Pricing models
// const organizationRoutes = require('./routes/organizationRoutes');
// const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(bodyParser.json());



// Set up routes
app.use('/api', pricingRoutes);
// app.use('/api', organizationRoutes);
// app.use('/api', itemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
