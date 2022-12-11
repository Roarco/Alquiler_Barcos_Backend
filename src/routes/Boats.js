const express = require("express");
const router = express.Router();
const validatorHandler = require("../middlewares/validator");
const { createBoatSchema, updateBoatSchema, getBoatSchema } = require("../schemas/Boats");
const BoatServices = require("../services/Boats");

const service = new BoatServices();

//GET
router.get("/", async(req, res, next) => {
    try {
        const boats = await service.getBoats();
        res.json(boats);
    }catch(err) {
        next(err);
    }
});

//GET by ID
router.get(
    "/:id",
    validatorHandler(getBoatSchema, "params"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const boat = await service.getBoat(id);
            res.json(boat);
        } catch (err) {
            next(err);
        }
    }
);

//POST
router.post("/",
    validatorHandler(createBoatSchema, "body"),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newBoat = await service.createBoat(body);
            res.status(201).json(newBoat);
        } catch (err) {
            next(err);
        }
    }
);


//PUT
router.put("/:id",
    validatorHandler(getBoatSchema, "params"),
    validatorHandler(updateBoatSchema, "body"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const boat = await service.updateBoat(id, body);
            res.json(boat);
        } catch (err) {
            next(err);
        }
    }
);

//DELETE
router.delete("/:id",
    validatorHandler(getBoatSchema, "params"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const boat = await service.deleteBoat(id);
            res.json(boat);
        } catch (err) {
            next(err);
        }
    }
);

module.exports = router;