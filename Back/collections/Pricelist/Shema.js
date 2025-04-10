const mongoose = require('mongoose');

const PriceList = new mongoose.Schema({
    title: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
    description: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
    price: { type: String, required: true },
    discontedPrice: { type: String, required: true },
    // Many-to-many relation with PortfolioCategory
    featrues: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'featrues',
        },
    ],
});

const homeAboutModel = mongoose.model('PriceList', PriceList);
module.exports = homeAboutModel;
