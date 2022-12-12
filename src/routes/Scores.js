const express = require("express");
const router = express.Router();
const ScoreServices = require("../services/Scores");
const validatorHandler = require("../middlewares/validator");
const { createScoreSchema, updateScoreSchema, getScoreSchema } = require("../schemas/Scores");
const service = new ScoreServices();

//GET
router.get("/", async(req, res, next) => {
    try {
        const scores = await service.getScores();
        res.json(scores);
    }catch(err) {
        next(err);
    }
});

//GET by ID
router.get(
    "/:id",
    validatorHandler(getScoreSchema, "params"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const score = await service.getScore(id);
            res.json(score);
        } catch (err) {
            next(err);
        }
    }
);

//POST
router.post("/",
    validatorHandler(createScoreSchema, "body"),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newScore = await service.createScore(body);
            res.status(201).json(newScore);
        } catch (err) {
            next(err);
        }
    }
);


//PUT
router.put("/:id",
    validatorHandler(getScoreSchema, "params"),
    validatorHandler(updateScoreSchema, "body"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const score = await service.updateScore(id, body);
            res.json(score);
        } catch (err) {
            next(err);
        }
    }
);

//DELETE
router.delete("/:id",
    validatorHandler(getScoreSchema, "params"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const score = await service.deleteScore(id);
            res.json(score);
        } catch (err) {
            next(err);
        }
    }
);

module.exports = router;