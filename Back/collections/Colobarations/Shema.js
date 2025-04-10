const mongoose = require('mongoose');
const ColabarationShema = new mongoose.Schema({
    image: { type: String, required: true },
});

const logoModel = mongoose.model('ColabarationShema', ColabarationShema);
module.exports = logoModel;
