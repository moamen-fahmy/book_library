const Joi = require('joi');

const createBookSchema = Joi.object({
    title: Joi.string().min(2).max(100).required(),
    author: Joi.string().min(2).max(100).required(),
    genre: Joi.string().min(2).max(50).required(),
    rating: Joi.number().min(0).max(5).required(),
    image_url: Joi.string().uri().required(),
});

const updateBookSchema = Joi.object({
    title: Joi.string().min(2).max(100).optional(),
    author: Joi.string().min(2).max(100).optional(),
    genre: Joi.string().min(2).max(50).optional(),
    rating: Joi.number().min(0).max(5).optional(),
    image_url: Joi.string().uri().optional(),
});

module.exports = {
    createBookSchema,
    updateBookSchema
};