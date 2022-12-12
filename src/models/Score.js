const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    score: {
        type: Number,
        required: true,
        default: 0,
    },
    message: {
        type: String,
    },
    reservartion: {
        type: Object
      }
});

const Score = mongoose.model('Scores', ScoreSchema);

module.exports = Score;