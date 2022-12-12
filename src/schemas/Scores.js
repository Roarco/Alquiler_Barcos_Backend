const joi = require('joi');

const id = joi.string();
const score = joi.integer();
const message = joi.string();
const reservartion = joi.object();

// creamos el schema de boat para la creacion
const createScoreSchema = joi.object({
    score: score.required(),
    message: message.required(),
    reservartion : reservartion.required() });

// creamos el schema de boat para la actualizacion
const updateScoreSchema = joi.object({
    score: score,
    message: message,
    reservartion: reservartion
});

// validamos el id para un get
const getScoreSchema = joi.object({
    id: id.required(),
});

module.exports = {
    createScoreSchema,
    updateScoreSchema,
    getScoreSchema,
}