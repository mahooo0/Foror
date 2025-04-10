const getLocalizedData = require('../../Helpers/getLocalizedData');
const Schema = require('./Shema'); // Ensure this matches your model file name
const axios = require('axios');
const twilio = require('twilio');
//telegram bot token and chat id
const botToken = '7985298939:AAEJ7h_EAy8h6--Xfab8dK2OAEGQr4wt5Z0'; // Replace with your bot's token
const chatId = '6229723240';
//whatsapp token

const ContactByUser = async (req, res) => {
    try {
        let { message, phone, fio, price } = req.body;
        if (!message || !phone || !fio) {
            return res
                .status(400)
                .json({ error: 'Invalid input: type and img are required' });
        }
        const teleqram_message = `Message: ${message}\nPhone: ${phone}\nFio: ${fio}\nPrice: ${price}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: teleqram_message,
            }
        );

        // Create new user (without password hashing)
        const logo = new Schema({ message, phone, fio, price });
        logo.save();
        res.status(201).json({ message: 'logo Created successfully', logo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const Read = async (req, res) => {
    try {
        const Seo = await Schema.find({});
        res.status(200).json(Seo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const ReadContactInfos = async (req, res) => {
    try {
        let ContactInfos = await Schema.find();
        ContactInfos = ContactInfos.map((item) => getLocalizedData(item));
        if (!ContactInfos.length) {
            return res
                .status(404)
                .json({ message: 'No ContactInfos found for the given type' });
        }

        res.status(200).json(ContactInfos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const Delete = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if user exists
        const translations = await Schema.findById(id);
        if (!translations) {
            return res.status(404).json({ message: 'translations not found' });
        }

        // Delete user
        await Schema.findByIdAndDelete(id);

        res.status(200).json({ message: 'translations deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { ContactByUser, Read, ReadContactInfos, Delete };
