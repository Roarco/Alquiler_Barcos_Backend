const mongoose = require("../lib/mongo");
const boom = require("@hapi/boom");
const Clients = require("../models/Clients");

class ClientServices {
    constructor() { }
    
    // Get all clients
    async getClients() {
        return await Clients.find();
    }

    // Get client by id
    async getClient(id) {
        const client = await Clients.findById(id);

        if (!client) {
            throw boom.notFound("Client not found");
        }
        return client;
    }

    // create client
    async createClient(client) {
        const existCategory = await Clients.findOne({
            name: client.name,
        });

        if (existCategory) {
            throw boom.conflict("Client already exist");
        }

        const newClient = new Clients(client);
        return await newClient.save();
    }

    // update client
    async updateClient(id, client) {
        const findClient = await this.getClient(id);

        if (!findClient) {
            throw boom.notFound("Client not found");
        }

        const updatedClient = await Clients.findByIdAndUpdate(id, client, {
            new: true,
        });
        return updatedClient;
    }

    // delete client
    async deleteClient(id) {
        const client = await this.getClient(id);

        if (!client) {
            throw boom.notFound("Client not found");
        }

        await Clients.findByIdAndRemove(id);
        return { message: "Client deleted" };
    }
}

module.exports = ClientServices;