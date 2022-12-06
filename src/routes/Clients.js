const express = require("express");
const router = express.Router();
const ClientServices = require("../services/Clients");

const service = new ClientServices();

//GET
router.get("/", async(req, res, next) => {
    try {
        const clients = await service.getClients();
        console.log(clients);
    }catch(err) {
        next(err);
    }
});

//GET by ID
router.get("/:id", (req, res) => {
    res.send("El cliente es: " + req.params.id);
});

//POST
router.post("/", (req, res) => {
    const { body } = req;
    res.send("Cliente creado: " + body.name);
});


//PUT
router.put("/:id", (req, res) => {
    const { body } = req;
    res.send("Cliente actualizado: " + body.name);
});


//DELETE
router.delete("/:id", (req, res) => {
    res.send("El cliente con id: " + req.params.id + " ha sido eliminado")
});

module.exports = router;