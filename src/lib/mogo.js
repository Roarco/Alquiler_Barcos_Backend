const mongoose = require('mongoose');
const config = require('../config/config');

mongoose
  .connect(
    `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.database}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

  module.exports = mongoose;