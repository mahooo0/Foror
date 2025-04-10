const getLocalizedData = require('../../Helpers/getLocalizedData');
const Schema = require('./Shema'); // Ensure this matches your model file name

const Create = async (req, res) => {
    try {
        let { preTitle, title, description } = req.body;
        if (!preTitle || !title || !description) {
            return res
                .status(400)
                .json({ error: 'Invalid input: type and img are required' });
        }

        // Create new user (without password hashing)
        const Hero = new Schema({ preTitle, title, description });
        Hero.save();
        res.status(201).json({ message: 'Hero Created successfully', Hero });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const Edit = async (req, res) => {
    try {
        let { preTitle, title, description } = req.body;

        const updatedTranslation = await Schema.findByIdAndUpdate(
            '67f060ae125e79ddcaf930a9',
            { preTitle, title, description },
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
const ReadHomeAboutDev = async (req, res) => {
    try {
        const Seo = await Schema.find({});
        const lang = req.headers['accept-language'];
        const Homehero = getLocalizedData(Seo[0], lang);
        res.status(200).json(Homehero);
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

module.exports = { Create, Read, ReadHomeAboutDev, Delete, Edit };
