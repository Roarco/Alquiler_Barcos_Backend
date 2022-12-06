const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoatSchema = new Schema({
  brand: {
    type: String
  },
  nombre: {
    type: String
  },
  year: {
    type: String
  },
  description: {
    type: String
  },
  category: {
  }
});

const Boat = mongoose.model('Boats', BoatSchema);

module.exports = Boat;