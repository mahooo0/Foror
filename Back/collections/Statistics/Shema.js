const mongoose = require('mongoose');
const Statistics = new mongoose.Schema({
    value: { type: String, required: true },
    desctiption: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
});

const translationModel = mongoose.model('Statistics', Statistics);
module.exports = translationModel;
