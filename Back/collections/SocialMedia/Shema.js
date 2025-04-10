const mongoose = require('mongoose');
const SocialMedia = new mongoose.Schema({
    url: { type: String, required: true },
    image: { type: String, required: true },
});

const logoModel = mongoose.model('SocialMedia', SocialMedia);
module.exports = logoModel;
