const mongoose = require('mongoose');
const AboutDevHero = new mongoose.Schema({
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

const logoModel = mongoose.model('AboutDevHero', AboutDevHero);
module.exports = logoModel;
