// db.js
// const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "postgres", // or 'mysql' if using MySQL
//   }
// );

// module.exports = sequelize;

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "viga_et_db",
  "dilleswar",
  "8yar1Rlehl-Me4JA9mOqQg",
  {
    dialect: "postgres",
    host: "fuzzy-avocet-14143.5xj.gcp-us-central1.cockroachlabs.cloud",
    port: 26257,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  },
    logging: console.log, // Log SQL queries
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
