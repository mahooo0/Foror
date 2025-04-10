const getLocalizedData = require('../../Helpers/getLocalizedData');
const Schema = require('./Shema'); // Make sure this file name is correct
const slugify = require('slugify');

// Utility for localized data

// CREATE
const Create = async (req, res) => {
    try {
        let { title, description, featrues, price, discontedPrice } = req.body;

        // Check for required fields
        if (!title || !description || !featrues || !price || !discontedPrice) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new document
        const newDocument = new Schema({
            title,
            description,
            featrues,
            price,
            discontedPrice,
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

        let { title, description, featrues, price, discontedPrice } = req.body;

        const updatedTranslation = await Schema.findByIdAndUpdate(
            id,
            { title, description, featrues, price, discontedPrice },
            { new: true }
        );

        if (!updatedTranslation) {
            return res.status(404).json({ message: 'Document not found' });
        }

        res.status(200).json({
            message: 'Document updated successfully',
            data: updatedTranslation,
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
const ReadPriceListsapi = async (req, res) => {
    try {
        const documents = await Schema.find({}).populate('featrues');
        const lang = req.headers['accept-language'] || 'en';
        let localizedDocuments = documents.map((item) =>
            getLocalizedData(item, lang)
        );
        localizedDocuments = localizedDocuments.map((item) => {
            return {
                ...item,
                featrues: item.featrues.map((feature) => {
                    return {
                        ...feature,
                        title: feature.title[lang],
                    };
                }),
            };
        });
        res.status(200).json(localizedDocuments);
    } catch (error) {
        console.error('Read error:', error);
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
    ReadPriceListsapi,
    Delete,
    ReadPartfolioBySlug,
};
