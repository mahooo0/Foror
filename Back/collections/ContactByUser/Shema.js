const mongoose = require('mongoose');
const ContactByUser = new mongoose.Schema({
    message: { type: String, required: true },
    phone: { type: String, required: true },
    fio: { type: String, required: true },
    price: { type: String, required: false },
});

const logoModel = mongoose.model('ContactByUser', ContactByUser);
module.exports = logoModel;
