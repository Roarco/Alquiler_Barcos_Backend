const joi = require('joi');

const id = joi.string();
const boats = joi.string().max(45);
const text = joi.string().max(250);

// creamos el schema de mensajes para la creacion
const createMessageSchema = joi.object({
    boats: boats.required(),
    text: text.required(),
}); 

// creamos el schema de mensaje para la actualizacion
const updateMessageSchema = joi.object({
    boats: boats,
    text: text,
});

// validamos el id para un get
const getMessageSchema = joi.object({
    id: id.required(),
});


module.exports = {
    createMessageSchema,
    updateMessageSchema,
    getMessageSchema,
}