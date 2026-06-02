const Joi = require('joi');
const { dropSearchIndex } = require('./models/listing');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location : Joi.string().required(),
        country : Joi.string().required(),
        price : Joi.string().required().min(0),
        image : Joi.string().allow("", null),
        search : Joi.string(),
        category: Joi.string()
            .valid(
                'Trending',
                'Rooms',
                'Iconic Cities',
                'Mountains',
                'Castles',
                'Pools',
                'Camping',
                'Farms',
                'Arctic'
            )
            .required(),
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review : Joi.object({
        rating : Joi.number().required().min(1).max(5),
        comment : Joi.string().required(),
    }).required()
});