const getLocalizedData = require('../../Helpers/getLocalizedData');
const Schema = require('./Shema'); // Make sure this file name is correct
const slugify = require('slugify');

// Utility for localized data

// CREATE
const Create = async (req, res) => {
    try {
        let {
            title,
            description,
            image,
            metaTitle,
            metaDescription,
            metaKeywords,
        } = req.body;

        // Check for required fields
        if (
            !title ||
            !description ||
            !metaTitle ||
            !metaDescription ||
            !metaKeywords
        ) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Parse stringified fields for languages
        title = JSON.parse(title);
        description = JSON.parse(description);
        metaTitle = JSON.parse(metaTitle);
        metaDescription = JSON.parse(metaDescription);
        metaKeywords = JSON.parse(metaKeywords);

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
            metaTitle,
            metaDescription,
            metaKeywords,
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
    const { id } = req.params; // Get the document ID from the URL parameters

    try {
        // Find the document to edit by its ID
        const existingDocument = await Schema.findById(id);

        if (!existingDocument) {
            return res.status(404).json({ message: 'Document not found' });
        }

        // Destructure fields from the request body
        let {
            title,
            description,
            image,
            metaTitle,
            metaDescription,
            metaKeywords,
        } = req.body;

        // Check for required fields
        if (
            !title ||
            !description ||
            !metaTitle ||
            !metaDescription ||
            !metaKeywords
        ) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Parse stringified fields for languages if they are provided
        if (title) title = JSON.parse(title);
        if (description) description = JSON.parse(description);
        if (metaTitle) metaTitle = JSON.parse(metaTitle);
        if (metaDescription) metaDescription = JSON.parse(metaDescription);
        if (metaKeywords) metaKeywords = JSON.parse(metaKeywords);

        // Generate slugs using slugify for each language if the title is provided
        const slug = title
            ? {
                  az: slugify(title.az, { lower: true, strict: true }),
                  en: slugify(title.en, { lower: true, strict: true }),
                  ru: slugify(title.ru, { lower: true, strict: true }),
              }
            : existingDocument.slug;

        // Update the fields of the existing document
        existingDocument.title = title || existingDocument.title;
        existingDocument.slug = slug;
        existingDocument.description =
            description || existingDocument.description;
        existingDocument.image = image || existingDocument.image;
        existingDocument.metaTitle = metaTitle || existingDocument.metaTitle;
        existingDocument.metaDescription =
            metaDescription || existingDocument.metaDescription;
        existingDocument.metaKeywords =
            metaKeywords || existingDocument.metaKeywords;

        // Save the updated document
        const updatedDocument = await existingDocument.save();

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
const ITEMS_PER_PAGE = 8;

const ReadBlogsapi = async (req, res) => {
    try {
        const { page = 1 } = req.query;
        const lang = req.headers['accept-language'] || 'en';
        const currentPage = parseInt(page, 10) || 1;
        const filter = {};
        const totalDocuments = await Schema.countDocuments(filter);
        const totalPages = Math.ceil(totalDocuments / ITEMS_PER_PAGE);
        const documents = await Schema.find(filter)
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
        console.error('ReadBlogsapi error:', error);
        res.status(500).json({ message: error.message });
    }
};
const ReadBlogBySlug = async (req, res) => {
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
        });

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
    ReadBlogsapi,
    Delete,
    ReadBlogBySlug,
};
