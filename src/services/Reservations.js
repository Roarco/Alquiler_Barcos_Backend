const mongoose = require("mongoose");
const Reservations = require("../models/Reservations");

class ReservationServices {
    constructor() {
    }

    // Get all 
    async getReservations() {
        return await Reservetions.find();
    }
}

module.exports = ReservationServices;