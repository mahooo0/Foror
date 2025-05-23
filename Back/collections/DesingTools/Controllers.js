const getLocalizedData = require('../../Helpers/getLocalizedData');
const Schema = require('./Shema'); // Ensure this matches your model file name

const Create = async (req, res) => {
    try {
        let { title, description, image, image_bg } = req.body;
        if (!image_bg || !title || !description || !image) {
            return res
                .status(400)
                .json({ error: 'Invalid input: type and img are required' });
        }
        title = JSON.parse(title);
        description = JSON.parse(description);
        // Create new user (without password hashing)
        const Hero = new Schema({ image_bg, title, description, image });
        Hero.save();
        res.status(201).json({ message: 'Hero Created successfully', Hero });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const Edit = async (req, res) => {
    try {
        const { id } = req.params;

        let { title, description, image, image_bg } = req.body;
        title = JSON.parse(title);
        description = JSON.parse(description);
        const updatedTranslation = await Schema.findByIdAndUpdate(
            id,
            { image_bg, title, description, image },
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

const ReadDesingTools = async (req, res) => {
    try {
        const Seo = await Schema.find({});
        const lang = req.headers['accept-language'];
        const Homehero = Seo.map((item) => getLocalizedData(item, lang));
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

module.exports = { Create, Read, ReadDesingTools, Delete, Edit };
