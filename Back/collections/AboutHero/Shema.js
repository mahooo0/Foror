const mongoose = require('mongoose');
const AboutHero = new mongoose.Schema({
    preTitle: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
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
    spline_url_Lg: { type: String, required: true },
    spline_url__Md: { type: String, required: true },
    image: { type: String, required: true },
});

const logoModel = mongoose.model('AboutHero', AboutHero);
module.exports = logoModel;
