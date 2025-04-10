const mongoose = require('mongoose');
const featrues = new mongoose.Schema({
    title: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
});

const logoModel = mongoose.model('featrues', featrues);
module.exports = logoModel;
