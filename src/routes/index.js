const express = require("express");

// importamos las rutas
const categories = require("./Categories");
const admins = require("./Admins");
const scores = require("./Scores");

const routerApi = (app) => {
    const router = express.Router();
    app.use("/api", router);
    app.use("/api/categories", categories);
    app.use("/api/admins", admins);
    app.use("/api/scores", scores);
};

module.exports = routerApi;