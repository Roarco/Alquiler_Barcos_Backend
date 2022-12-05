const mongoose = require("mongoose");
const Categories = require("../models/Categories");

class CategoryServices {
    constructor() {
    }

    // Get all categories
    async getCategories() {
        return await Categories.find();
    }
}

module.exports = CategoryServices;