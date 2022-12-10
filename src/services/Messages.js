const mongoose = require("../lib/mongo");
const boom = require("@hapi/boom");
const Messages = require("../models/Messages");

class MessageServices {
    constructor() {
    }

    // Get all mesagges
    async getMesagges() {
        return await Messages.find();
    }
     // Get category by id
     async getCategory(id) {
        const message = await Message.findById(id);

        if (!message) {
            throw boom.notFound("message not found");
        }
        return message;
    }

    // create category
    async createMessage(message) {
        const existMessage = await Messages.findOne({
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

module.exports = MessageServices;