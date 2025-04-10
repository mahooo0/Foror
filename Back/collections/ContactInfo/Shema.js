const mongoose = require('mongoose');
const ContactInfo = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
});

const logoModel = mongoose.model('ContactInfo', ContactInfo);
module.exports = logoModel;
