const mongoose = require('mongoose');
const config = require('../config/config');
const chalk = require('chalk');

mongoose
  .connect(
    `mongodb+srv://${config.dbUser}:${config.dbPassword}@cluster0.r5gkvxf.mongodb.net/${config.mongo.database}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log(chalk.green("Connected to MongoDB...")))
  .catch((err) => console.error(chalk.red("Could not connect to MongoDB...", err)));

  module.exports = mongoose;