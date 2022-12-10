const joi = require('joi');

const id = joi.string();
const name = joi.string().min(3).max(15);
const email = joi.string().email();
const password = joi.string().min(8).max(15);

// creamos el schema de admin para la creacion

const createAdminSchema = joi.object({
    name: name.required(),
    email: email.required(),
    password: password.required(),
});

// creamos el schema de admin para la actualizacion

const updateAdminSchema = joi.object({
    name: name,
    email: email,
    password: password,
});

// validamos el id para un get
const getAdminSchema = joi.object({
    id: id.required(),
});

module.exports = {
    createAdminSchema,
    updateAdminSchema,
    getAdminSchema,
};