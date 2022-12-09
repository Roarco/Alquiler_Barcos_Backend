const mongoose = require("../lib/mongo");
const boom = require("@hapi/boom");
const Categories = require("../models/Categories");

class CategoryServices {
    constructor() { }

    // Get all categories
    async getCategories() {
        return await Categories.find();
    }

    // Get category by id
    async getCategory(id) {
        const category = await Categories.findById(id);

        if (!category) {
            throw boom.notFound("Category not found");
        }
        return category;
    }

    // create category
    async createCategory(category) {
        const existCategory = await Categories.findOne({
            name: category.name,
        });

        if (existCategory) {
            throw boom.conflict("Category already exist");
        }

        const newCategory = new Categories(category);
        return await newCategory.save();
    }

    // update category
    async updateCategory(id, category) {
        const findCategory = await this.getCategory(id);

        if (!findCategory) {
            throw boom.notFound("Category not found");
        }

        const updatedCategory = await Categories.findByIdAndUpdate(id, category, {
            new: true,
        });
        return updatedCategory;
    }

    // delete category
    async deleteCategory(id) {
        const category = await this.getCategory(id);

        if (!category) {
            throw boom.notFound("Category not found");
        }

        await Categories.findByIdAndRemove(id);
        return { message: "Category deleted" };
    }
}

module.exports = CategoryServices;