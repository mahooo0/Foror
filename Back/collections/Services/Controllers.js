const { default: slugify } = require('slugify');
const getLocalizedData = require('../../Helpers/getLocalizedData');
const Schema = require('./Shema'); // Ensure this matches your model file name

const Create = async (req, res) => {
    try {
        let {
            metaDescription,
            metaTitle,
            metaKeywords,
            title,
            description,
            image,
        } = req.body;

        if (
            !metaTitle ||
            !metaDescription ||
            !metaKeywords ||
            !title ||
            !description ||
            !image
        ) {
            return res
                .status(400)
                .json({ error: 'Invalid input: type and img are required' });
        }

        title = JSON.parse(title);
        description = JSON.parse(description);
        metaTitle = JSON.parse(metaTitle);
        metaDescription = JSON.parse(metaDescription);
        metaKeywords = JSON.parse(metaKeywords);
        // Create new user (without password hashing)
        const slug = {
            az: slugify(title.az, { lower: true, strict: true }),
            en: slugify(title.en, { lower: true, strict: true }),
            ru: slugify(title.ru, { lower: true, strict: true }),
        };
        const prefe = new Schema({
            metaTitle,
            metaDescription,
            metaKeywords,
            title,
            description,
            image,
            slug,
        });
        prefe.save();
        res.status(201).json({ message: 'prefe Created successfully', prefe });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const Edit = async (req, res) => {
    try {
        let {
            metaDescription,
            metaTitle,
            metaKeywords,
            title,
            description,
            image,
        } = req.body;
        const { id } = req.params;

        // Check for required fields
        if (
            !metaTitle ||
            !metaDescription ||
            !metaKeywords ||
            !title ||
            !description
        ) {
            return res.status(400).json({
                error: 'Invalid input: All fields including image are required',
            });
        }

        // Safely parse stringified JSON fields
        try {
            title = JSON.parse(title);
            description = JSON.parse(description);
            metaTitle = JSON.parse(metaTitle);
            metaDescription = JSON.parse(metaDescription);
            metaKeywords = JSON.parse(metaKeywords);
        } catch (parseError) {
            return res.status(400).json({
                error: 'Invalid JSON format in one or more fields',
            });
        }
        const slug = {
            az: slugify(title.az, { lower: true, strict: true }),
            en: slugify(title.en, { lower: true, strict: true }),
            ru: slugify(title.ru, { lower: true, strict: true }),
        };
        // Update document in DB
        const updatedPrefe = await Schema.findByIdAndUpdate(
            id,
            {
                metaTitle,
                metaDescription,
                metaKeywords,
                title,
                description,
                image,
                slug,
            },
            { new: true }
        );

        if (!updatedPrefe) {
            return res.status(404).json({ error: 'Item not found' });
        }

        res.status(200).json({
            message: 'Prefe item updated successfully',
            updatedPrefe,
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
const ReadServicesBySlug = async (req, res) => {
    try {
        const { slug } = req.params;

        // Find document by slug
        const document = await Schema.findOne({
            $or: [
                { 'slug.az': slug },
                { 'slug.en': slug },
                { 'slug.ru': slug },
            ],
        });

        if (!document) {
            return res.status(404).json({ message: 'Item not found' });
        }

        const lang = req.headers['accept-language'];
        const Homehero = getLocalizedData(document, lang);

        res.status(200).json(Homehero);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const ReadServicesApi = async (req, res) => {
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

module.exports = {
    Create,
    Read,
    ReadServicesApi,
    Delete,
    Edit,
    ReadServicesBySlug,
};
