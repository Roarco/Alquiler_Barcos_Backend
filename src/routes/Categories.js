const express = require("express");
const router = express.Router();
const CategoryServices = require("../services/Categories");
const validatorHandler = require("../middlewares/validator");
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require("../schemas/Categories");
const service = new CategoryServices();

//GET
router.get("/", async (req, res, next) => {
    try {
        const categories = await service.getCategories();
        res.json(categories);
    } catch (err) {
        next(err);
    }
});

//GET by ID
router.get(
    "/:id",
    validatorHandler(getCategorySchema, "params"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const category = await service.getCategory(id);
            res.json(category);
        } catch (err) {
            next(err);
        }
    }
);

//POST
router.post("/",
    validatorHandler(createCategorySchema, "body"),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newCategory = await service.createCategory(body);
            res.status(201).json(newCategory);
        } catch (err) {
            next(err);
        }
    });

//PUT
router.put(
    "/:id",
    validatorHandler(getCategorySchema, "params"),
    validatorHandler(updateCategorySchema, "body"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const category = await service.updateCategory(id, body);
            res.json(category);
        } catch (err) {
            next(err);
        }
    }
);


//DELETE
router.delete("/:id",
    validatorHandler(getCategorySchema, "params"),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const category = await service.deleteCategory(id);
            res.json(category);
        } catch (err) {
            next(err);
        }
    });

module.exports = router;