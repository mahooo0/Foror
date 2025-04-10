const mongoose = require('mongoose');

const Worcks = new mongoose.Schema({
    title: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
    slug: {
        az: { type: String, required: true, unique: true },
        en: { type: String, required: true, unique: true },
        ru: { type: String, required: true, unique: true },
    },
    description: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
    image: { type: String, required: true },
    isdetail: { type: Boolean, required: true },
    url: { type: String, required: false },

    // Many-to-many relation with PortfolioCategory
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PortfolioCategory',
        },
    ],
});

const homeAboutModel = mongoose.model('Worcks', Worcks);
module.exports = homeAboutModel;
