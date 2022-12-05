const express = require("express");

// importamos las rutas
const categories = require("./Categories");

const routerApi = (app) => {
    const router = express.Router();
    app.use("/api", router);
    app.use("/api/categories", categories);
};

module.exports = routerApi;