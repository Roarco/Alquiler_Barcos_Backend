const joi = require('joi');

const id = joi.string();
const boats = joi.string().max(45);
const clients = joi.string().max(1000);
const stardate =  joi.string();
const endline = joi.string();

// creamos el schema de reservaciones para la creacion
const createReservationSchema = joi.object({
    boats: boats.required(),
    clients: clients.required(),
    stardate: stardate.required(),
    endline: endline.required(),
});

// creamos el schema de reservaciones para la actualizacion
const updateReservationSchema = joi.object({
    boats: boats,
    clients: clients,
    stardate: stardate,
    endline: endline,
});

// validamos el id para un get
const getReservationSchema = joi.object({
    id: id.required(),
});


module.exports = {
    createReservationSchema,
    updateReservationSchema,
    getReservationSchema,
}