const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  value: {
    type: Number
  
    
  },
  client: {
    type: Number
  
    
  },
  intake: {
    type: Number
  
    
  },
  deadline: {
    type: Number
    
  },
});

const Reservation = mongoose.model('Reservations', ReservationSchema);

module.exports = Reservation;