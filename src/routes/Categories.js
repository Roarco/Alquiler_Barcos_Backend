const express = require("express");
const router = express.Router();
const CategoryServices = require("../services/Categories");

const service = new CategoryServices();

//GET
router.get("/", async(req, res, next) => {
    try {
        const categories = await service.getCategories();
        console.log(categories);
    }catch(err) {
        next(err);
    }
});

//GET by ID
router.get("/:id", (req, res) => {
    res.send("La categoría es: " + req.params.id);
});

//POST
router.post("/", (req, res) => {
    const { body } = req;
    res.send("Categoría creada: " + body.name);
});


//PUT
router.put("/:id", (req, res) => {
    const { body } = req;
    res.send("Categoría actualizada: " + body.name);
});


//DELETE
router.delete("/:id", (req, res) => {
    res.send("La categoría con id: " + req.params.id + " ha sido eliminada")
});

module.exports = router;