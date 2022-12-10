const joi = require('joi');

const id = joi.string();
const name = joi.string().max(250);
const email = joi.string().email();
const age = joi.string().max(3);
const password = joi.string().min(8).max(15);

// creamos el schema de categoria para la creacion
const createClientSchema = joi.object({
    name: name.required(),
    email: email.required(),
    age: age.required(),
    password: password.required()
});

// creamos el schema de categoria para la actualizacion
const updateClientSchema = joi.object({
    name: name,
    email: email,
    age: age,
    password: password
});

// validamos el id para un get
const getClientSchema = joi.object({
    id: id.required(),
});

module.exports = {
    createCategorySchema,
    updateCategorySchema,
    getCategorySchema,
}