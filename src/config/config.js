require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || "development",
  isProd: process.env.NODE_ENV === "production",
  port: process.env.PORT || 3000,
  dbUser: process.env.MONGO_USERNAME,
  dbPassword: process.env.MONGO_PASSWORD,
  mongo: {
    host: process.env.MONGO_HOST || "localhost",
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE,
  },
};

module.exports = config;