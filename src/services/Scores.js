const mongoose = require("mongoose");
const Score = require("../models/Score");

class ScoreServices {
    constructor() {}

    // Get all scores
    async getScores() {
        return await Score.find();
    }

    // Get score by id

    async getScoreById(id) {
        return await Score.findById(id);
    }
}

module.exports = ScoreServices;