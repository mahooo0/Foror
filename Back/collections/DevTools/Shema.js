const mongoose = require('mongoose');
const DevTools = new mongoose.Schema({
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
    image_bg: { type: String, required: true },
});

const logoModel = mongoose.model('DevTools', DevTools);
module.exports = logoModel;
