const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({

  clients: {
    type: String
  },

  boats: {
    type: String
  },
  
  stardate: {
    type: String
  },
  
  endline: {
    type: String
    
  },
});

const Reservation = mongoose.model('Reservations', ReservationSchema);

module.exports = Reservation;