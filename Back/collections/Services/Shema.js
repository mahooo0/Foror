const mongoose = require('mongoose');
const Services = new mongoose.Schema({
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
    metaTitle: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
    metaDescription: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
    metaKeywords: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
});

const logoModel = mongoose.model('Services', Services);
module.exports = logoModel;
