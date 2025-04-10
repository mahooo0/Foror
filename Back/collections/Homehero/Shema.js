const mongoose = require('mongoose');
const HomeHero = new mongoose.Schema({
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
    image: { type: String, required: true },
});

const logoModel = mongoose.model('HomeHero', HomeHero);
module.exports = logoModel;
