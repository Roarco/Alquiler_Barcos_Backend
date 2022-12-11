const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoatSchema = new Schema({
  brand: {
    type: String
  },
  name: {
    type: String
  },
  year: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: Object
  }
});

const Boat = mongoose.model('Boats', BoatSchema);

module.exports = Boat;