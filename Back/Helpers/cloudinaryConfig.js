const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dgl6kzjcp', // Replace with your Cloudinary cloud name
    api_key: '879448811319689', // Replace with your Cloudinary API key
    api_secret: 'Jf-OTRbebT3evwwasiuCUtjG0xs', // Replace with your Cloudinary API secret
});

module.exports = cloudinary;
