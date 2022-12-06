const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  age: {
    type: String
  },
  password: {
    type: String
  }
});

const Client = mongoose.model('Clients', ClientSchema);

module.exports = Client;