const mongoose = require('mongoose');
const PortfolioCategory = new mongoose.Schema({
    title: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
});

const logoModel = mongoose.model('PortfolioCategory', PortfolioCategory);
module.exports = logoModel;
