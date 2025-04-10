const mongoose = require('mongoose');

const Blogs = new mongoose.Schema({
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
    // Many-to-many relation with PortfolioCategory
});

const homeAboutModel = mongoose.model('Blogs', Blogs);
module.exports = homeAboutModel;
