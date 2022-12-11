const mongoose = require("../lib/mongo");
const boom = require("@hapi/boom");
const Reservations = require("../models/Reservations");

class ReservationsServices {
    constructor() {
    }

    // Get all reservation
    async getReservations() {
        return await Reservations.find();
    }
     // Get reservation by id
     
     async getReservationsById(id) {
        const reservarion = await Reservations.findById(id);

        if (!reservarion) {
            throw boom.notFound("reservation not found");
        }
        return reservarion;
    }

    // create reservations
    async createReservation(reservation) {
        /* const existMessage = await Messages.findOne({
            boats: message.boats,
        });

        if (existCategory) {
            throw boom.conflict("message already exist");
        } */

        const newReservation = new Reservations (reservation);
        return await newReservation.save();
    }

    // update message
    async updateReservation(id, reservartion) {
        const findReservation = await Reservations.findById(id);

        if (!findReservation) {
            throw boom.notFound("reservations not found");
        }

        const updatedReservation = await Reservations.findByIdAndUpdate(id, reservartion, {
            new: true,
        });
        return updatedReservation;
    }

    // delete reservation
    async deleteReservation(id) {
        const reservation = await this.getReservationsById(id);

        if (!reservation) {
            throw boom.notFound("reservation not found");
        }

        await Reservations.findByIdAndRemove(id);
        return { reservation: "reservation deleted" };
    }

}

module.exports = ReservationsServices;