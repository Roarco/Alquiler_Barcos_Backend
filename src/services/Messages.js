const mongoose = require("../lib/mongo");
const boom = require("@hapi/boom");
const Messages = require("../models/Messages");

class MessagesServices {
    constructor() {
    }

    // Get all mesagges
    async getMessages() {
        return await Messages.find();
    }
     // Get message by id
     
    async getMessagesById(id) {
        const message = await Messages.findById(id);

        if (!message) {
            throw boom.notFound("message not found");
        }
        return message;
    }

    // create message
    async createMessage(message) {
        /* const existMessage = await Messages.findOne({
            boats: message.boats,
        });

        if (existCategory) {
            throw boom.conflict("message already exist");
        } */

        const newMessage = new Messages (message);
        return await newMessage.save();
    }

    // update message
    async updateMessage(id, message) {
        const findMessage = await Messages.findById(id);

        if (!findMessage) {
            throw boom.notFound("message not found");
        }

        const updatedMessage = await Messages.findByIdAndUpdate(id, message, {
            new: true,
        });
        return updatedMessage;
    }

    // delete message
    async deleteMessage(id) {
        const message = await this.getMessagesById(id);

        if (!message) {
            throw boom.notFound("message not found");
        }

        await Messages.findByIdAndRemove(id);
        return { message: "message deleted" };
    }
}

module.exports = MessagesServices;