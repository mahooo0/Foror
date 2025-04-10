const mongoose = require('mongoose');
const Prefe = new mongoose.Schema({
    title: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
});

const logoModel = mongoose.model('Prefe', Prefe);
module.exports = logoModel;
