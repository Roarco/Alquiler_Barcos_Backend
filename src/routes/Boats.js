const express = require("express");
const router = express.Router();
const BoatServices = require("../services/Boats");

const service = new BoatServices();

//GET
router.get("/", async(req, res, next) => {
    try {
        const boats = await service.getBoats();
        console.log(boats);
    }catch(err) {
        next(err);
    }
});

//GET by ID
router.get("/:id", (req, res) => {
    res.send("El barco es: " + req.params.id);
});

//POST
router.post("/", (req, res) => {
    const { body } = req;
    res.send("Barco creado: " + body.name);
});


//PUT
router.put("/:id", (req, res) => {
    const { body } = req;
    res.send("Barco actualizado: " + body.name);
});


//DELETE
router.delete("/:id", (req, res) => {
    res.send("El barco con id: " + req.params.id + " ha sido eliminado")
});

module.exports = router;