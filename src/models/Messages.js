const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  value: {
    type: Number
  
  },
  text: {
    type: String
  },
});

const Message = mongoose.model('Messages', MessageSchema);

module.exports = Message;