const express = require("express");
const router = express.Router();
const ScoreServices = require("../services/Score");

const service = new ScoreServices();

//GET
router.get("/", async (req, res, next) => {
    try {
        const scores = await service.getScores();
        console.log(scores);
    } catch (err) {
        next(err);
    }
});

//GET by ID
router.get("/:id", async (req, res, next) => {
    try {
        const score = await service.getScoreById(req.params.id);
        console.log(score);
    } catch (err) {
        next(err);
    }
});

//POST
router.post("/", async (req, res, next) => {
    try {
        const score = await service.createScore(req.body);
        res.json(score);
    } catch (err) {
        next(err);
    }
});

//PUT
router.put("/:id", async (req, res, next) => {
    try {
        const score = await service.updateScore(req.params.id, req.body);
        res.json(score);
    } catch (err) {
        next(err);
    }
});

//DELETE
router.delete("/:id", async (req, res, next) => {
    try {
        const score = await service.deleteScore(req.params.id);
        res.json(score);
    } catch (err) {
        next(err);
    }
});