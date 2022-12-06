const express = require("express");
const router = express.Router();
const AdminServices = require("../services/Admins");

const service = new AdminServices();

//GET

router.get("/", async(req, res, next) => {
    try {
        const admins = await service.getAdmins();
        console.log(admins);
    }catch(err) {
        next(err);
    }
});

//GET by ID

router.get("/:id", (req, res) => {
    res.send("get by id");
});

//POST

router.post("/", (req, res) => {
    res.send("post");
});

//PUT

router.put("/:id", (req, res) => {
    res.send("put");
});

//DELETE

router.delete("/:id", (req, res) => {
    res.send("delete");
});

module.exports = router;