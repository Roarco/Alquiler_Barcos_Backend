const mongoose = require("../lib/mongo");
const boom = require("@hapi/boom");
const Scores = require("../models/Score");

class ScoreServices {
    
    // Get all scores
    async getScores() {
        return await Scores.find();
    }

    // Get score by id
    async getScore(id) {
        const score = await Scores.findById(id);

        if (!score) {
            throw boom.notFound("Score not found");
        }
        return score;
    }

    // create score
    async createScore(score) {
        const existCategory = await Scores.findOne({
            name: score.name,
        });

        if (existCategory) {
            throw boom.conflict("Score already exist");
        }

        const newScore = new Scores(score);
        return await newScore.save();
    }

    // update score
    async updateScore(id, score) {
        const findScore = await this.getScore(id);

        if (!findScore) {
            throw boom.notFound("Score not found");
        }

        const updatedScore = await Scores.findByIdAndUpdate(id, score, {
            new: true,
        });
        return updatedScore;
    }

    // delete score
    async deleteScore(id) {
        const score = await this.getScore(id);

        if (!score) {
            throw boom.notFound("Score not found");
        }

        await Scores.findByIdAndRemove(id);
        return { message: "Score deleted" };
    }
}

module.exports = ScoreServices;