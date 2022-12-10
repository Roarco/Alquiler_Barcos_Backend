const express = require("express");
const router = express.Router();
const AdminServices = require("../services/Admins");
const validatorHandler = require("../middlewares/validator");
const { createAdminSchema, updateAdminSchema, getAdminSchema } = require("../schemas/Admins");

const service = new AdminServices();

//GET

router.get("/", async (req, res, next) => {
    try {
        const admins = await service.getAdmins();
        res.json(admins);
    } catch (err) {
        next(err);
    }
});

//GET by ID

router.get("/:id",
    validatorHandler(getAdminSchema, "params"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const admin = await service.getAdminById(id);
            res.json(admin);
        } catch (err) {
            next(err);
        }
    });

//POST

router.post("/",
    validatorHandler(createAdminSchema, "body"),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newAdmin = await service.createAdmin(body);
            res.status(201).json(newAdmin);
        } catch (err) {
            next(err);
        }
    });

//PUT

router.put(
    "/:id",
    validatorHandler(getAdminSchema, "params"),
    validatorHandler(updateAdminSchema, "body"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const updatedAdmin = await service.updateAdmin(id, body);
            res.json(updatedAdmin);
        } catch (err) {
            next(err);
        }
    }
);

//DELETE

router.delete("/:id",
    validatorHandler(getAdminSchema, "params"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedAdmin = await service.deleteAdmin(id);
            res.json(deletedAdmin);
        }catch (err) {
            next(err);
        }
    });

module.exports = router;