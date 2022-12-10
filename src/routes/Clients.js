const express = require("express");
const router = express.Router();
const ClientServices = require("../services/Clients");
const validatorHandler = require("../middlewares/validator");
const { createClientSchema, updateClientSchema, getClientSchema } = require("../schemas/Clients");

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
router.get(
    "/:id",
    validatorHandler(getClientSchema, "params"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const client = await service.getClient(id);
            res.json(client);
        } catch (err) {
            next(err);
        }
    }
);

//POST
router.post("/",
    validatorHandler(createClientSchema, "body"),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newClient = await service.createClient(body);
            res.status(201).json(newClient);
        } catch (err) {
            next(err);
        }
    });


//PUT
router.put(
    "/:id",
    validatorHandler(getClientSchema, "params"),
    validatorHandler(updateClientSchema, "body"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const client = await service.updateClient(id, body);
            res.json(client);
        } catch (err) {
            next(err);
        }
    }
);

//DELETE
router.delete("/:id",
    validatorHandler(getClientSchema, "params"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const client = await service.deleteClient(id);
            res.json(client);
        } catch (err) {
            next(err);
        }
    }
);

module.exports = router;