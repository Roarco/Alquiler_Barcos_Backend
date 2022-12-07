const mongoose = require("../lib/mongo");
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