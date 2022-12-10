const joi = require('joi');

const id = joi.string();
const name = joi.string().max(250);
const description = joi.string().max(1000);

// creamos el schema de categoria para la creacion
const createCategorySchema = joi.object({
    name: name.required(),
    description: description.required(),
});

// creamos el schema de categoria para la actualizacion
const updateCategorySchema = joi.object({
    name: name,
    description: description,
});

// validamos el id para un get
const getCategorySchema = joi.object({
    id: id.required(),
});


module.exports = {
    createCategorySchema,
    updateCategorySchema,
    getCategorySchema,
}