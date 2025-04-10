const getLocalizedData = require('../../Helpers/getLocalizedData');
const Schema = require('./Shema'); // Ensure this matches your model file name

const Create = async (req, res) => {
    try {
        let { url, image } = req.body;
        if (!url || !image) {
            return res
                .status(400)
                .json({ error: 'Invalid input: type and img are required' });
        }
        // Create new user (without password hashing)
        const logo = new Schema({ url, image });
        logo.save();
        res.status(201).json({ message: 'logo Created successfully', logo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const Edit = async (req, res) => {
    try {
        const { id } = req.params;

        let { url, image } = req.body;

        const updatedTranslation = await Schema.findByIdAndUpdate(
            id,
            { url, image },
            { new: true }
        );
        res.status(200).json({
            message: 'logo updated successfully',
            updatedTranslation,
        });
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
const ReadSocialMedia = async (req, res) => {
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

module.exports = { Create, Read, ReadSocialMedia, Delete, Edit };
