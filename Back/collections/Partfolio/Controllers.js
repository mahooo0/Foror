const getLocalizedData = require('../../Helpers/getLocalizedData');
const Schema = require('./Shema'); // Make sure this file name is correct
const slugify = require('slugify');

// Utility for localized data

// CREATE
const Create = async (req, res) => {
    try {
        let { title, description, isdetail, image, categories, url } = req.body;

        // Check for required fields
        if (
            !title ||
            !description ||
            typeof isdetail === 'undefined' ||
            !categories ||
            !url
        ) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Parse stringified fields for languages
        title = JSON.parse(title);
        description = JSON.parse(description);
        isdetail = JSON.parse(isdetail);
        categories = JSON.parse(categories);

        // Generate slugs using slugify for each language
        const slug = {
            az: slugify(title.az, { lower: true, strict: true }),
            en: slugify(title.en, { lower: true, strict: true }),
            ru: slugify(title.ru, { lower: true, strict: true }),
        };

        // Create a new document
        const newDocument = new Schema({
            title,
            slug,
            description,
            image,
            isdetail,
            categories,
            url,
        });

        await newDocument.save();

        res.status(201).json({
            message: 'Document created successfully',
            data: newDocument,
        });
    } catch (error) {
        console.error('Create error:', error);
        res.status(500).json({ message: error.message });
    }
};

// EDIT
const Edit = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).json({ message: 'Missing document ID' });
        }

        let { title, description, isdetail, image, categories, url } = req.body;

        const updateData = {};

        // Parse and assign only if fields are present
        if (title) {
            // Generate slugs using slugify for each language
            updateData.title = JSON.parse(title);
            updateData.slug = {
                az: slugify(updateData.title.az, { lower: true, strict: true }),
                en: slugify(updateData.title.en, { lower: true, strict: true }),
                ru: slugify(updateData.title.ru, { lower: true, strict: true }),
            };
        }
        if (description) updateData.description = JSON.parse(description);
        if (typeof isdetail !== 'undefined')
            updateData.isdetail = JSON.parse(isdetail);
        if (categories) updateData.categories = JSON.parse(categories);
        if (image) updateData.image = image;
        if (url) updateData.url = url;

        const updatedDocument = await homeAboutModel.findByIdAndUpdate(
            id,
            updateData,
            {
                new: true,
            }
        );

        if (!updatedDocument) {
            return res.status(404).json({ message: 'Document not found' });
        }

        res.status(200).json({
            message: 'Document updated successfully',
            data: updatedDocument,
        });
    } catch (error) {
        console.error('Edit error:', error);
        res.status(500).json({ message: error.message });
    }
};

// READ ALL
const Read = async (req, res) => {
    try {
        const documents = await Schema.find({});
        res.status(200).json(documents);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).json({ message: error.message });
    }
};

// READ LOCALIZED
const ITEMS_PER_PAGE = 9;

const ReadWorcksapi = async (req, res) => {
    try {
        const { category, page = 1 } = req.query;
        const lang = req.headers['accept-language'] || 'en';
        const currentPage = parseInt(page, 10) || 1;

        const filter = {};

        if (category) {
            filter.categories = { $in: [category] };
        }

        const totalDocuments = await Schema.countDocuments(filter);
        const totalPages = Math.ceil(totalDocuments / ITEMS_PER_PAGE);

        const documents = await Schema.find(filter)
            .populate('categories')
            .skip((currentPage - 1) * ITEMS_PER_PAGE)
            .limit(ITEMS_PER_PAGE);

        const localized = documents.map((item) => getLocalizedData(item, lang));

        res.status(200).json({
            data: localized,
            totalDocuments,
            totalPages,
            currentPage,
        });
    } catch (error) {
        console.error('ReadWorcksapi error:', error);
        res.status(500).json({ message: error.message });
    }
};
const ReadPartfolioBySlug = async (req, res) => {
    try {
        const { slug } = req.params;
        const lang = req.headers['accept-language'] || 'en';

        if (!slug) {
            return res.status(400).json({ message: 'Missing document slug' });
        }

        const document = await Schema.findOne({
            $or: [
                { 'slug.az': slug },
                { 'slug.en': slug },
                { 'slug.ru': slug },
            ],
        }).populate('categories');

        if (!document) {
            return res.status(404).json({ message: 'Document not found' });
        }

        const localized = getLocalizedData(document, lang);

        res.status(200).json(localized);
    } catch (error) {
        console.error('ReadBySlug error:', error);
        res.status(500).json({ message: error.message });
    }
};

// DELETE
const Delete = async (req, res) => {
    try {
        const { id } = req.params;

        const found = await Schema.findById(id);
        if (!found)
            return res.status(404).json({ message: 'Document not found' });

        await Schema.findByIdAndDelete(id);
        res.status(200).json({ message: 'Document deleted successfully' });
    } catch (error) {
        console.error('Delete error:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    Create,
    Edit,
    Read,
    ReadWorcksapi,
    Delete,
    ReadPartfolioBySlug,
};
