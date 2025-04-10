const mongoose = require('mongoose');
const HomeServices = new mongoose.Schema({
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
    spline_url: { type: String, required: true },
});

const logoModel = mongoose.model('HomeServices', HomeServices);
module.exports = logoModel;
