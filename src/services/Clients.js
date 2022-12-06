const mongoose = require("mongoose");
const Clients = require("../models/Clients");

class ClientServices {

    // Get all clients
    async getClients() {
        return await Clients.find();
    }

    async saveBoat(Client){
        return Clients.save(Client);
    }
}

module.exports = ClientServices;