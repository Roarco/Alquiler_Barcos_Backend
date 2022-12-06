const mongoose = require("mongoose");
const Boats = require("../models/Boats");

class BoatServices {

    // Get all boats
    async getBoats() {
        return await Boats.find();
    }

    async saveBoat(Boat){
        return Boats.save(Boat);
    }
}

module.exports = BoatServices;