const mongoose = require("../lib/mongo");
const boom = require("@hapi/boom");
const Boats = require("../models/Boats");

class BoatServices {
    constructor() { }
    
    // Get all boats
    async getBoats() {
        return await Boats.find();
    }

    // Get boat by id
    async getBoat(id) {
        const boat = await Boats.findById(id);

        if (!boat) {
            throw boom.notFound("Boat not found");
        }
        return boat;
    }

    // create boat
    async createBoat(boat) {
        const existCategory = await Boats.findOne({
            name: boat.name,
        });

        if (existCategory) {
            throw boom.conflict("Boat already exist");
        }

        const newBoat = new Boats(boat);
        return await newBoat.save();
    }

    // update boat
    async updateBoat(id, boat) {
        const findBoat = await this.getBoat(id);

        if (!findBoat) {
            throw boom.notFound("Boat not found");
        }

        const updatedBoat = await Boats.findByIdAndUpdate(id, boat, {
            new: true,
        });
        return updatedBoat;
    }

    // delete boat
    async deleteBoat(id) {
        const boat = await this.getBoat(id);

        if (!boat) {
            throw boom.notFound("Boat not found");
        }

        await Boats.findByIdAndRemove(id);
        return { message: "Boat deleted" };
    }
}

module.exports = BoatServices;