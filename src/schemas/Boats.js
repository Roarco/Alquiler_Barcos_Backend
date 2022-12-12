const joi = require('joi');

const id = joi.string();
const brand = joi.string().max(250);
const name = joi.string().max(250);
const year = joi.string().max(250);
const description = joi.string().max(250);
const category = joi.object();

// creamos el schema de boat para la creacion
const createBoatSchema = joi.object({
    brand: brand.required(),
    name: name.required(),
    year: year.required(),
    description: description.required(),
    category : category.required() });

// creamos el schema de boat para la actualizacion
const updateBoatSchema = joi.object({
    brand: brand,
    name: name,
    year: year,
    description: description,
    category: category
});

// validamos el id para un get
const getBoatSchema = joi.object({
    id: id.required(),
});

module.exports = {
    createBoatSchema,
    updateBoatSchema,
    getBoatSchema,
}